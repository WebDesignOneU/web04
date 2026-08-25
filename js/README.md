# Directorio JavaScript - Ballet UCB

Este directorio contiene la lógica frontend liviana en **JavaScript Vanilla** para dar soporte a la interactividad, accesibilidad, carrusel de imágenes, conmutación de temas y persistencia global en el portal del **Ballet UCB**.

---

## 📄 Módulos y Archivos Implementados

### 1. `carousel.js` (Módulo del Carrusel de Imágenes Interactivo - Totalmente Documentado)
Clase `BalletCarousel` desarrollada en JS Vainilla sin librerías externas. Cuenta con comentarios detallados (JSDoc y notas en español) explicando paso a paso la lógica implementada:

- **Propiedades del Estado Interno**:
  - `currentIndex`: Índice numérico de la diapositiva visible.
  - `totalSlides`: Total de diapositivas disponibles.
  - `autoplayTimer`: Referencia al temporizador `setInterval`.
  - `isPlaying`: Booleano para el control de reproducción.
- **Métodos Documentados**:
  - `init()`: Inicializa el estado, crea los puntos indicadores y arranca el autoplay.
  - `createDots()`: Genera dinámicamente los botones indicadores (*dots*) en el DOM.
  - `bindEvents()`: Asigna los eventos de clic en botones anterior/siguiente, puntos, reproducir/pausar, teclado (flechas) y gestos táctiles (*swipe*).
  - `updateCarousel()`: Mueve la pista (`transform: translateX()`), actualiza clases `active` y atributos `aria-hidden` / `aria-selected`.
  - `nextSlide()` / `prevSlide()`: Control de navegación con soporte para ciclo infinito (*loop*).
  - `goToSlide(index)`: Salto directo a una diapositiva específica.
  - `startAutoplay()` / `pauseAutoplay()` / `toggleAutoplay()`: Gestión del temporizador automático.
  - `handleSwipe()`: Detección de gestos de deslizamiento en pantallas táctiles móviles.

---

### 2. `main.js` (Script Principal Frontend)
Script de integración general incluido de forma diferida (`defer`) en las páginas del sitio.

- **Funcionalidades**:
  1. **Inicialización del Carrusel**: Instancia la clase `BalletCarousel` en `#ballet-carousel` dentro de `index.html`.
  2. **Gestión de Tema Claro / Oscuro**: Sincroniza y persiste el modo visual (`'ballet_theme'`) mediante `localStorage` y atributos `data-theme`.
  3. **Control de Rango (`input[type="range"]`)**: Actualiza en vivo el valor de flexibilidad física en `audiciones.html`.
  4. **Diálogo Nativo (`<dialog>`)**: Controla la interacción y cierre del modal informativo de convocatorias.

---

## 🛠️ Buenas Prácticas Aplicadas
- Ejecución diferida con el atributo `defer` (`<script src="js/carousel.js" defer></script>`).
- Código completamente libre de dependencias o frameworks pesados.
- Cumplimiento de estándares de accesibilidad WAI-ARIA para carruseles y componentes interactivos.
