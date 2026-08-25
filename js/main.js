/**
 * ============================================================================
 * SCRIPT PRINCIPAL DE INTERACTIVIDAD - BALLET UCB
 * Gestión de tema claro/oscuro, inicialización de componentes e interactividad.
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. GESTIÓN DE TEMA CLARO / OSCURO CON PERSISTENCIA
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const themeText = document.getElementById('theme-text');
  const htmlElement = document.documentElement;

  // Cargar tema previo guardado o preferido
  const savedTheme = localStorage.getItem('ballet_theme') || 
    (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

  applyTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
    });
  }

  function applyTheme(theme) {
    if (theme === 'light') {
      htmlElement.setAttribute('data-theme', 'light');
      if (themeIcon) themeIcon.textContent = '☀️';
      if (themeText) themeText.textContent = 'Modo Claro';
    } else {
      htmlElement.removeAttribute('data-theme');
      if (themeIcon) themeIcon.textContent = '🌙';
      if (themeText) themeText.textContent = 'Modo Oscuro';
    }
    localStorage.setItem('ballet_theme', theme);
  }

  // 2. INICIALIZACIÓN DEL CARRUSEL DE IMÁGENES (LANDING PAGE)
  const carouselContainer = document.getElementById('ballet-carousel');
  if (carouselContainer && typeof window.BalletCarousel === 'function') {
    // Instanciar el carrusel con intervalo de 4.5 segundos por diapositiva
    window.mainCarousel = new window.BalletCarousel('#ballet-carousel', {
      autoplayInterval: 4500,
      loop: true
    });
    console.log('[Main.js] Carrusel de imágenes inicializado exitosamente.');
  }

  // 3. ACTUALIZACIÓN EN VIVO DEL INPUT RANGE (FLEXIBILIDAD EN AUDICIONES)
  const rangeInput = document.getElementById('flexibilidad');
  const rangeLabel = document.getElementById('flexibilidad-label');

  if (rangeInput && rangeLabel) {
    const updateRangeOutput = () => {
      const val = rangeInput.value;
      rangeInput.setAttribute('aria-valuenow', val);
      rangeInput.setAttribute('aria-valuetext', `${val} de 10`);
      
      let badge = document.getElementById('flex-val-badge');
      if (!badge) {
        badge = document.createElement('span');
        badge.id = 'flex-val-badge';
        badge.style.cssText = 'margin-left: 10px; font-weight: bold; color: var(--color-gold);';
        rangeLabel.appendChild(badge);
      }
      badge.textContent = `: [ ${val} / 10 ]`;
    };

    rangeInput.addEventListener('input', updateRangeOutput);
    updateRangeOutput();
  }

  // 4. MANEJO NATIVO DE DIÁLOGO (<dialog>)
  const dialogModal = document.querySelector('dialog');
  if (dialogModal) {
    dialogModal.addEventListener('click', (event) => {
      const rect = dialogModal.getBoundingClientRect();
      const isInDialog = (rect.top <= event.clientY && event.clientY <= rect.bottom &&
        rect.left <= event.clientX && event.clientX <= rect.right);
      if (!isInDialog) {
        dialogModal.close();
      }
    });
  }
});
