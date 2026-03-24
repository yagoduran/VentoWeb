$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Net.Http

$root = Split-Path -Parent $PSScriptRoot
$sourceFiles = @(
  'index.html',
  'blog.html',
  'aviso-legal.html',
  'cookies.html',
  'privacidad.html',
  'sectores.html',
  'servicios-clinicas.html',
  'servicios-estetica.html',
  'servicios-fitness.html',
  'servicios-legal.html',
  'servicios-restaurantes.html',
  'blog/diseno-web-clinicas-barcelona.html',
  'blog/diseno-web-clinicas-bilbao.html',
  'blog/diseno-web-estetica-madrid.html',
  'blog/diseno-web-estetica-valencia.html',
  'blog/diseno-web-restaurantes-madrid.html',
  'blog/diseno-web-restaurantes-sevilla.html'
)

$targetLangs = @('en', 'eu')
$http = New-Object System.Net.Http.HttpClient
$http.Timeout = [TimeSpan]::FromSeconds(35)

$cache = @{}
foreach ($lang in $targetLangs) {
  $cache[$lang] = @{}
}

function Translate-Text([string]$text, [string]$lang) {
  if ([string]::IsNullOrWhiteSpace($text)) {
    return $text
  }

  if ($cache[$lang].ContainsKey($text)) {
    return $cache[$lang][$text]
  }

  $url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=es&tl=' + $lang + '&dt=t&q=' + [System.Uri]::EscapeDataString($text)
  try {
    $raw = $http.GetStringAsync($url).Result
    $parsed = ConvertFrom-Json -InputObject $raw
    $translated = ''

    if ($parsed -and $parsed[0]) {
      foreach ($piece in $parsed[0]) {
        if ($piece -and $piece[0] -ne $null) {
          $translated += [string]$piece[0]
        }
      }
    }

    if ([string]::IsNullOrWhiteSpace($translated)) {
      $translated = $text
    }

    $cache[$lang][$text] = $translated
    Start-Sleep -Milliseconds 25
    return $translated
  }
  catch {
    $cache[$lang][$text] = $text
    return $text
  }
}

function Translate-Html([string]$html, [string]$lang) {
  $parts = [System.Text.RegularExpressions.Regex]::Split($html, '(<[^>]+>)')
  $out = New-Object System.Text.StringBuilder
  $inScript = $false
  $inStyle = $false

  foreach ($part in $parts) {
    if ($part -eq '') {
      continue
    }

    if ($part.StartsWith('<')) {
      $lower = $part.ToLowerInvariant()
      if ($lower -match '^<script\b') {
        $inScript = $true
      }
      elseif ($lower -match '^</script') {
        $inScript = $false
      }
      elseif ($lower -match '^<style\b') {
        $inStyle = $true
      }
      elseif ($lower -match '^</style') {
        $inStyle = $false
      }

      [void]$out.Append($part)
      continue
    }

    if ($inScript -or $inStyle) {
      [void]$out.Append($part)
      continue
    }

    if ($part -match '[A-Za-zÁÉÍÓÚáéíóúÑñÜü]') {
      [void]$out.Append((Translate-Text -text $part -lang $lang))
    }
    else {
      [void]$out.Append($part)
    }
  }

  return $out.ToString()
}

$utf8NoBom = New-Object System.Text.UTF8Encoding($false)

foreach ($relativePath in $sourceFiles) {
  $sourcePath = Join-Path $root $relativePath
  if (-not (Test-Path $sourcePath)) {
    Write-Host "SKIP (missing): $relativePath"
    continue
  }

  $sourceHtml = [System.IO.File]::ReadAllText($sourcePath)

  foreach ($lang in $targetLangs) {
    $targetPath = Join-Path (Join-Path $root $lang) $relativePath
    $targetDir = Split-Path -Parent $targetPath
    if (-not (Test-Path $targetDir)) {
      New-Item -ItemType Directory -Path $targetDir -Force | Out-Null
    }

    $translatedHtml = Translate-Html -html $sourceHtml -lang $lang
    $translatedHtml = [System.Text.RegularExpressions.Regex]::Replace(
      $translatedHtml,
      '(<html[^>]*\slang=")[^"]*(")',
      ('$1' + $lang + '$2')
    )

    [System.IO.File]::WriteAllText($targetPath, $translatedHtml, $utf8NoBom)
    Write-Host "OK $lang -> $relativePath"
  }
}

Write-Host 'Translation generation completed.'
