# 🎭 Portal Web & Landing Page Definitiva - Ballet UCB

Bienvenido al repositorio oficial del **Portal Web y Landing Page Definitiva del Ballet de la Universidad Católica Boliviana "San Pablo" (Ballet UCB)**.

Este sitio web ha sido desarrollado como una plataforma web moderna, interactiva y accesible, diseñada con **HTML5 Semántico**, **CSS3 Modular de Alto Impacto Visual** y **JavaScript Vainilla (100% documentado)**.

---

## 🌟 Características Destacadas de la Landing Page

1. **Hero Banner de Impacto Visual**:
   - Encabezado con imagen de fondo en alta resolución, superposición con gradiente teatral borgoña/oscura, titulación en tipografía elegante (*Cinzel*) y botones de acción (*CTA*).

2. **Carrusel de Imágenes Interactivo con JS (Totalmente Documentado)**:
   - Desarrollado desde cero en JS Vainilla sin librerías externas.
   - Navegación manual (Botones Anterior / Siguiente), puntos indicadores (*dots*), contador de diapositivas (`1 / 4`) y botón de Reproducir/Pausar (*autoplay*).
   - Pausa automática en *hover* y soporte para gestos táctiles (*swipe*) en dispositivos móviles.
   - **Código 100% documentado**: Incluye comentarios JSDoc y notas en español explicando detalladamente la lógica, manejo de estado y accesibilidad ARIA.

3. **Banner de Estadísticas e Impacto Institucional**:
   - Métricas destacadas (Años de trayectoria, obras en repertorio, bailarines en elenco y reconocimientos).

4. **Sección Resumen "Sobre el Ballet UCB" & Producciones Emblemáticas**:
   - Tarjetas informativas enriquecidas con imágenes de alta definición.

5. **Banner CTA de Audiciones 2026 & Diálogo Nativo `<dialog>`**:
   - Convocatoria interactiva con diálogo modal emergente accesible.

6. **Sistema de Tema Claro / Oscuro con Persistencia Global**:
   - Sincronizado en todas las páginas mediante `localStorage`.

---

## 📁 Estructura del Proyecto

```
web04/
├── index.html              # Landing Page Definitiva del Ballet UCB
├── nosotros.html           # Historia, Misión, Visión y Directores
├── repertorio.html         # Obras Clásicas, Neoclásicas y Folclore Estilizado
├── elenco.html             # Perfiles de Bailarines y Primeros Solistas
├── glosario.html           # Glosario Técnico de Términos de Ballet
├── multimedia.html         # Galería de Fotos, Audio y Vídeos
├── audiciones.html         # Formulario Completo de Inscripción
├── faq.html                # Preguntas Frecuentes con Acordeones Nativos
├── contacto.html           # Información de Contacto y Ubicación
├── css/
│   ├── README.md           # Documentación de la Arquitectura CSS3
│   ├── styles.css          # Punto de entrada unificado
│   ├── variables.css       # Tokens de diseño y colores
│   ├── base.css            # Normalización y tipografía
│   ├── layout.css          # Grids y estructura responsiva
│   ├── components.css      # Hero, Carrusel, Tablas, Forms, Modales
│   └── animations.css      # Transiciones y keyframes
├── js/
│   ├── README.md           # Documentación de Scripts JS
│   ├── carousel.js         # Módulo de Carrusel JS 100% Documentado
│   └── main.js             # Lógica general (Tema, Modal, Slider)
└── assets/
    ├── README.md           # Documentación de Recursos Multimedia
    ├── images/             # Fotografías en alta resolución
    ├── audio/              # Pistas sonoras de prueba
    └── video/              # Tráileres y vídeos promocionales
```

---

## 🎨 Paleta de Colores Teatral

- **Borgoña / Crimson Principal**: `#800020`
- **Oro Telón Acceso**: `#D4AF37`
- **Fondo Oscuro Velvet**: `#0A0D14`
- **Superficies / Tarjetas**: `rgba(20, 26, 38, 0.75)`
- **Tipografía Titulares**: `'Cinzel', serif`
- **Tipografía Cuerpo**: `'Plus Jakarta Sans', sans-serif`

---

## 🚀 Instalación y Uso

1. Clona o descarga este repositorio en tu equipo local:
   ```bash
   git clone https://github.com/WebDesignOneU/web04.git
   ```
2. Abre el archivo `index.html` en cualquier navegador web moderno (Chrome, Edge, Firefox, Safari).
3. No requiere compiladores, Node.js ni servidor web especial (funciona localmente mediante protocolo `file://` o mediante servidor de desarrollo).

---

## 📝 Licencia y Derechos

© 2026 **Ballet de la Universidad Católica Boliviana "San Pablo"**. Todos los derechos reservados.
