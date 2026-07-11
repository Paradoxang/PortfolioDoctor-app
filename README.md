# Portafolio — Dr. Adrián Valcárcel (arquetipo)

One-page animado para un cirujano plástico ficticio. Componentes inspirados en
[mina-massoud.com](https://mina-massoud.com) y dirección de arte inspirada en
[bigdirty.agency](https://www.bigdirty.agency).

## Stack

- **React 18 + Vite 6**
- **Tailwind CSS 4** (tokens de diseño en `src/index.css` → `@theme`)
- **Framer Motion** (animaciones de entrada, contadores, reveal por scroll)
- **Lenis** (smooth scroll)

## Cómo correrlo

```bash
npm install
npm run dev
```

Build de producción: `npm run build` (salida en `dist/`).

## Paleta

| Token | Hex | Uso |
|---|---|---|
| `cream` | `#FAF3E7` | Fondo principal |
| `ink` | `#1C1C1C` | Secciones oscuras / texto |
| `sage` | `#6B8F71` | Acento principal |
| `sage-deep` | `#4E6E58` | Acento sobre crema (contraste) |
| `sage-mist` | `#A9BFAE` | Acento sobre oscuro |

Tipografías (Google Fonts, cargadas en `index.html`): **Archivo** (display
condensada/expandida), **Fraunces itálica** (etiquetas serif), **Manrope** (cuerpo).

## Estructura de secciones

1. `Hero` — nombre gigante animado letra por letra
2. `Marquee` ×2 — cintas infinitas con frases
3. `Manifiesto` — cita que se revela palabra por palabra al hacer scroll
4. `About` — retrato + ficha de datos
5. `Numbers` — contadores animados
6. `Metodologia` — 4 pasos con efecto sticky apilado
7. `Trayectoria` — 3 capítulos (Bogotá, Madrid, Miami)
8. `Procedimientos` — lista con hover de cortina
9. `CtaMarquee` — cinta gigante de llamado a la acción
10. `Agenda` — calendario decorativo (`CalendarWidget.jsx`, reemplazable por Cal.com/Calendly) + contactos
11. `Footer`

(Entre Método y Trayectoria va `QuirofanoBand` — banda de imagen full-bleed con parallax.)

## Imágenes

Las 5 imágenes (generadas con Gemini) están optimizadas en `public/media/` como
AVIF + WebP en 4 anchos (400/800/1200/1600) con fallback PNG y placeholder
blur-up. Cada imagen tiene un `*.manifest.json` (copiado también en `src/media/`
para importarlo en build) que consume el componente
`src/components/ResponsiveImage.jsx`.

| Imagen | Dónde se usa |
|---|---|
| `retrato-doctor` | `About.jsx` (retrato 3:4) |
| `bogota` / `madrid` / `miami` | `Trayectoria.jsx` (capítulos 4:3) |
| `quirofano` | `QuirofanoBand.jsx` (banda panorámica con parallax entre Método y Trayectoria) |

Para regenerar los derivados si cambias una imagen fuente (los PNG originales
están en la raíz del proyecto):

```bash
node "C:\Users\Santiago pc\.claude\skills\web-media-builder\scripts\media.mjs" convert "Retrato Doctor.png" --out public/media --widths 400,800,1200,1600
```

y copia el nuevo `*.manifest.json` de `public/media/` a `src/media/`.

## Dónde conectar cosas reales

- **Calendario:** en `src/components/Agenda.jsx` hay un comentario con el
  `<iframe>` de Cal.com/Calendly listo para descomentar.
- **Contactos:** emails, WhatsApp y redes en el array `CONTACTOS` de `Agenda.jsx`.
- **Textos:** todo el copy vive en arrays/constantes al inicio de cada componente.
