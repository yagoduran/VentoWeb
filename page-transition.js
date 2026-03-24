(function () {
  var OVERLAY_ID = 'page-transition-overlay';
  var STYLE_ID = 'page-transition-style';
  var NAV_DELAY_MS = 260;

  function ensureStyle() {
    if (document.getElementById(STYLE_ID)) {
      return;
    }

    var style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = [
      '.page-transition-overlay {',
      '  position: fixed;',
      '  inset: 0;',
      '  z-index: 9999;',
      '  display: grid;',
      '  place-items: center;',
      '  background: radial-gradient(circle at 20% 20%, rgba(77, 163, 255, 0.18), rgba(6, 26, 64, 0.98) 60%);',
      '  opacity: 1;',
      '  visibility: visible;',
      '  transition: opacity 260ms ease, visibility 260ms ease;',
      '}',
      '.page-transition-overlay.is-hidden {',
      '  opacity: 0;',
      '  visibility: hidden;',
      '}',
      '.page-transition-overlay.is-light {',
      '  background: radial-gradient(circle at 20% 20%, rgba(0, 102, 204, 0.2), rgba(248, 251, 255, 0.98) 62%);',
      '}',
      '.page-transition-loader {',
      '  display: inline-flex;',
      '  align-items: center;',
      '  gap: 0.8rem;',
      '  color: #f8fbff;',
      '  font-size: 0.78rem;',
      '  letter-spacing: 0.14em;',
      '  font-weight: 800;',
      '  text-transform: uppercase;',
      '}',
      '.page-transition-overlay.is-light .page-transition-loader {',
      '  color: #061a40;',
      '}',
      '.page-transition-dot {',
      '  width: 0.7rem;',
      '  height: 0.7rem;',
      '  border-radius: 999px;',
      '  background: #4da3ff;',
      '  box-shadow: 0 0 0 0 rgba(77, 163, 255, 0.6);',
      '  animation: pageTransitionPulse 1.25s infinite ease-in-out;',
      '}',
      '@keyframes pageTransitionPulse {',
      '  0% { transform: scale(0.86); box-shadow: 0 0 0 0 rgba(77, 163, 255, 0.6); }',
      '  70% { transform: scale(1); box-shadow: 0 0 0 11px rgba(77, 163, 255, 0); }',
      '  100% { transform: scale(0.86); box-shadow: 0 0 0 0 rgba(77, 163, 255, 0); }',
      '}',
      '@media (prefers-reduced-motion: reduce) {',
      '  .page-transition-overlay { transition: none; }',
      '  .page-transition-dot { animation: none; }',
      '}'
    ].join('\n');

    document.head.appendChild(style);
  }

  function createOverlay() {
    var existing = document.getElementById(OVERLAY_ID);
    if (existing) {
      return existing;
    }

    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    overlay.className = 'page-transition-overlay';
    overlay.setAttribute('aria-hidden', 'true');
    overlay.innerHTML = '<div class="page-transition-loader"><span class="page-transition-dot"></span><span>Cargando VENTO</span></div>';

    if (document.documentElement.classList.contains('light') || document.body.classList.contains('light')) {
      overlay.classList.add('is-light');
    }

    document.body.appendChild(overlay);
    return overlay;
  }

  function hideOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (!overlay) {
      return;
    }
    overlay.classList.add('is-hidden');
  }

  function showOverlay() {
    var overlay = createOverlay();
    overlay.classList.remove('is-hidden');
    if (document.documentElement.classList.contains('light') || document.body.classList.contains('light')) {
      overlay.classList.add('is-light');
    } else {
      overlay.classList.remove('is-light');
    }
  }

  function isInternalLink(anchor) {
    if (!anchor || !anchor.href) {
      return false;
    }
    if (anchor.target && anchor.target.toLowerCase() === '_blank') {
      return false;
    }
    if (anchor.hasAttribute('download')) {
      return false;
    }

    var href = anchor.getAttribute('href') || '';
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) {
      return false;
    }

    try {
      var url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) {
        return false;
      }
      return true;
    } catch (e) {
      return false;
    }
  }

  function bindNavigationTransitions() {
    document.addEventListener('click', function (event) {
      var target = event.target;
      if (!target) {
        return;
      }

      var anchor = target.closest('a');
      if (!isInternalLink(anchor)) {
        return;
      }

      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
        return;
      }

      var destination = anchor.href;
      if (!destination || destination === window.location.href) {
        return;
      }

      event.preventDefault();
      showOverlay();
      window.setTimeout(function () {
        window.location.href = destination;
      }, NAV_DELAY_MS);
    }, true);

    document.addEventListener('submit', function () {
      showOverlay();
    });
  }

  ensureStyle();
  document.addEventListener('DOMContentLoaded', function () {
    createOverlay();
    requestAnimationFrame(function () {
      hideOverlay();
    });
    bindNavigationTransitions();
  });

  window.addEventListener('pageshow', function () {
    hideOverlay();
  });
})();
