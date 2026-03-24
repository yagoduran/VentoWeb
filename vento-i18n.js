// VENTO Internationalization System - Simplified
// Solo maneja preferencia de idioma, sin manipulación de DOM
// Los contenidos multiidioma se sirven dinámicamente si es necesario

const VENTO_I18N = {
  es: {
    heroSubtitle: "Diseño web y automatización premium | Toda España",
    heroTitle: "El nuevo estándar digital para negocios en toda España.",
    heroDescription: "Diseñamos webs de alto rendimiento con automatización real para locales y empresas: reservas, citas, páginas informativas y embudos de captación. Sin plantillas, sin PDFs, solo código puro.",
    contactInstagram: "CONTACTAR POR INSTAGRAM",
    sendEmail: "ENVIAR EMAIL",
    pdfEnemy: "Tu carta en PDF está matando tus ventas.",
    pdfProblem: "El problema del PDF",
    pdfProblemList: ["Legibilidad pobre en móvil y zoom constante.", "Carga lenta justo cuando el cliente tiene hambre.", "Impacto SEO nulo, Google no entiende tu carta.", "Percepción amateur para un restaurante premium."],
    ventoSolution: "La solución VENTO",
    ventoSolutionList: ["Carga instantánea desde cualquier conexión.", "Diseño de autor coherente con tu identidad.", "Arquitectura optimizada para SEO local.", "Experiencia móvil impecable para convertir más mesas."],
    speedSimulator: "Simulador de carga",
    ventoVsWorld: "Vento vs. El Mundo",
    speedDescription: "El 53% de los clientes abandonan una web si tarda más de 3 segundos en cargar. Vento carga en menos de 0.8s. No pierdas ni una reserva más por culpa de la lentitud.",
    currentSpeed: "Tiempo actual (WordPress/PDF) en segundos",
    estimatedLoad: "Carga estimada actual",
    ventoLoad: "Carga estimada VENTO",
    pureCode: "Código puro optimizado",
    byePDF: "Adiós al PDF",
    byePDFDescription: "Lo cómodo para el negocio suele ser incómodo para el cliente. Estos son los pecados del PDF.",
    mobileProblem: "No se lee bien en móvil",
    mobileProblemDesc: "El usuario necesita zoom para entender la carta.",
    googleProblem: "Google no entiende tus platos",
    googleProblemDesc: "El PDF no te posiciona por términos que sí compran.",
    updateProblem: "Cada cambio te roba tiempo",
    updateProblemDesc: "Actualizar precios obliga a resubir archivos una y otra vez.",
    imageProblem: "Imagen anticuada",
    imageProblemDesc: "Tu experiencia digital no representa la calidad del local.",
    ventoDNA: "ADN Vento",
    ventoDNADesc: "La ventaja técnica de trabajar en Código Puro: rendimiento real, posicionamiento y control total.",
    speedTitle: "Velocidad < 1 segundo",
    speedDesc: "Cada milisegundo cuenta. Una web ligera y optimizada reduce rebote y multiplica conversiones desde móvil.",
    seoTitle: "SEO superior a WordPress",
    seoDesc: "Arquitectura limpia, sin plugins pesados ni ruido. Google rastrea mejor y te encuentra antes en búsquedas clave en cualquier ciudad.",
    securityTitle: "Seguridad total",
    securityDesc: "Sin paneles vulnerables ni instalaciones masivas. Menos superficie de ataque y más tranquilidad para tu negocio.",
    services: "Servicios que escalan en toda España",
    servicesDesc: "Implementamos sistemas digitales completos para captar, convertir y gestionar clientes sin fricción.",
    automation: "Webs con automatización",
    automationDesc: "Conexión de formularios, respuestas automáticas y flujos que ahorran tiempo operativo.",
    reservations: "Gestión de reservas",
    reservationsDesc: "Sistemas de reserva claros para restaurantes y negocios con alta demanda.",
    appointments: "Gestión de citas",
    appointmentsDesc: "Agenda digital con bloques, recordatorios y control de disponibilidad.",
    informative: "Páginas informativas",
    informativeDesc: "Sitios corporativos orientados a marca, posicionamiento y captación de leads.",
    stamp: "Sello de calidad Vento",
    stampTitle: "Atención de proximidad. Estamos en Donosti.",
    stampDesc: "Si tienes un problema un viernes noche, no hablas con un bot, hablas con Iker y con el equipo Vento. Soporte humano, rápido y con contexto real de hostelería en Gipuzkoa.",
    calculator: "Calculadora de potencial de mejora",
    calcDesc: "Introduce tus visitas mensuales de Instagram y estima cuántas reservas o contactos extra puedes conseguir con una web VENTO.",
    visits: "Visitas Instagram / mes",
    currentConversion: "Conversión actual (%)",
    expectedImprovement: "Mejora esperada con Vento (%)",
    fixed: "(estimación fija)",
    sectors: "Soluciones por sector",
    sectorsDesc: "Páginas específicas para posicionar por intención real según tipo de negocio.",
    allSectors: "VER TODOS LOS SECTORES",
    restaurants: "Restaurantes",
    restaurantsDesc: "Reservas, carta digital y conversión para hostelería.",
    clinics: "Clínicas",
    clinicsDesc: "Captación y gestión de citas médicas o de salud.",
    aesthetics: "Centros de estética",
    aestheticsDesc: "Agenda digital y venta de tratamientos premium.",
    process: "Nuestro Proceso",
    processDesc: "Sistema claro, sin fricción: sabes qué ocurre, cuándo y con qué resultado.",
    step1: "Breve cuestionario",
    step2: "Boceto inicial gratuito",
    step3: "Pago 50% señal",
    step4: "Desarrollo a medida",
    step5: "Pago final y entrega",
    contact: "Solicita diagnóstico estratégico",
    contactDesc: "Cuéntanos tu negocio y te enviamos una propuesta inicial orientada a resultados.",
    name: "Nombre",
    namePlaceholder: "Tu nombre",
    email: "Email",
    emailPlaceholder: "tu@email.com",
    businessType: "Tipo de negocio",
    businessPlaceholder: "Restaurante, clínica, estudio...",
    city: "Ciudad",
    cityPlaceholder: "Madrid, Sevilla, Bilbao...",
    mainGoal: "Objetivo principal",
    goalPlaceholder: "Quiero más reservas, automatizar citas, mejorar posicionamiento...",
    sendRequest: "ENVIAR SOLICITUD",
    blog: "Blog SEO por ciudad y negocio",
    blogDesc: "Arquitectura orientada a búsquedas long-tail para atraer clientes con intención de compra.",
    viewBlog: "IR AL BLOG",
    madrid: "Madrid | Restaurantes",
    blogTitle1: "Cómo captar más reservas con una web optimizada",
    barcelona: "Barcelona | Clínicas",
    blogTitle2: "Qué estructura web convierte más citas",
    faq: "FAQ",
    faqDesc: "Respuestas rápidas sobre plazos, gestión y por qué una carta web supera al PDF.",
    faq1: "¿En cuánto tiempo se entrega una web VENTO?",
    faq1Ans: "El plazo medio está entre 10 y 21 días según alcance. Primero validamos un boceto y después pasamos a desarrollo cerrado por fases.",
    faq2: "¿Quién gestiona los cambios una vez publicada?",
    faq2Ans: "Puedes delegarlo en VENTO o gestionar cambios puntuales con un sistema muy simple de solicitudes. No dependes de plugins ni paneles complejos.",
    faq3: "¿Por qué abandonar la carta en PDF?",
    faq3Ans: "Porque en móvil penaliza lectura, velocidad y SEO. Una carta web bien construida carga antes, posiciona mejor y transmite una imagen premium. ",
    faq4: "¿Trabajáis solo para hostelería?",
    faq4Ans: "No. Diseñamos y desarrollamos para restaurantes y para cualquier negocio que necesite una web rápida, clara y conectada a procesos de reservas o citas."
  },
  eu: {
    heroSubtitle: "Web diseinua eta premium automatizazioa | Espainiako osoa",
    heroTitle: "Negozioetarako digital estandardaren berria osoaren egitea.",
    heroDescription: "Garapen altuko webak diseinatzen ditugu automatizazio errealarekin tokietan eta enpresan. Txantilonik gabe, PDFrik gabe, kode pura bakarrik.",
    contactInstagram: "INSTAGRAM BIDEZ JARRI HARREMANETAN",
    sendEmail: "EMAILA BIDALI",
    pdfEnemy: "Zure PDF gutxik salez behera botatzen ari dute.",
    pdfProblem: "PDFaren arazoa",
    ventoSolution: "VENTO-ren irtenbidea",
    speedSimulator: "Kargatzeko simuladorea",
    ventoVsWorld: "Vento vs. Mundua",
    byePDF: "Agur PDFa"
  },
  en: {
    heroSubtitle: "Premium web design and automation | All over Spain",
    heroTitle: "The new digital standard for businesses across Spain.",
    heroDescription: "We design high-performance websites with real automation for local businesses and companies: reservations, appointments, informative pages and lead capture funnels. No templates, no PDFs, pure code only.",
    contactInstagram: "CONTACT VIA INSTAGRAM",
    sendEmail: "SEND EMAIL",
    pdfEnemy: "Your PDF menu is killing your sales.",
    pdfProblem: "The PDF problem",
    ventoSolution: "The VENTO solution",
    speedSimulator: "Load simulator",
    ventoVsWorld: "Vento vs. The World",
    byePDF: "Goodbye PDF"
  }
};

// Función para obtener traducción
function t(key, lang = 'es') {
  const translation = VENTO_I18N[lang]?.[key];
  return translation !== undefined ? translation : key;
}

// Sistema simplificado para guardar preferencia de idioma
function setLanguage(lang = 'es') {
  localStorage.setItem('vento_lang', lang);
  document.documentElement.lang = lang;
  // Solo guardar preferencia, sin manipulación de DOM
}

// Obtener idioma guardado al cargar la página
function getCurrentLanguage() {
  return localStorage.getItem('vento_lang') || 'es';
}

// Inicializar al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  const saved = getCurrentLanguage();
  setLanguage(saved);
  
  // Actualizar botones de idioma para mostrar cuál está activo
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.dataset.lang === saved) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
});
