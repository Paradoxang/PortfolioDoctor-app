import { useState } from 'react'

const BASE = '/media'

// El srcset del manifest trae solo nombres de archivo; se les antepone la ruta pública.
const prefix = (srcset) => srcset.replace(/([^\s,]+\.\w+)/g, `${BASE}/$1`)

/**
 * Imagen responsive AVIF → WebP → PNG con placeholder blur-up (lqip)
 * y aspect-ratio reservado para evitar saltos de layout.
 * `manifest` es el JSON generado por media.mjs (importado desde src/media).
 */
export default function ResponsiveImage({ manifest, alt, sizes = '100vw', className = '' }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio: manifest.aspectRatio }}
    >
      <img
        src={manifest.lqip}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 h-full w-full scale-105 object-cover blur-xl transition-opacity duration-700 ${
          loaded ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <picture>
        <source type="image/avif" srcSet={prefix(manifest.srcset.avif)} sizes={sizes} />
        <source type="image/webp" srcSet={prefix(manifest.srcset.webp)} sizes={sizes} />
        <img
          src={`${BASE}/${manifest.fallback}`}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={`relative h-full w-full object-cover transition-opacity duration-700 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </picture>
    </div>
  )
}
