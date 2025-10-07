import React, { useState } from 'react'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [didError, setDidError] = useState(false)

  const handleError = () => {
    setDidError(true)
  }

  const { src, alt, style, className, ...rest } = props

  // If the src is a PNG/JPG file and a same-named .webp exists in the bundle,
  // prefer it via a <picture> element. We conservatively derive the webp path
  // by replacing the extension; Vite alias mapping already points figma:asset/* to .webp in the build.
  const isImage = typeof src === 'string' && /\.(png|jpg|jpeg)$/i.test(src)
  const webpSrc = isImage ? src.replace(/\.(png|jpg|jpeg)$/i, '.webp') : null

  if (didError) {
    return (
      <div
        className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
        style={style}
      >
        <div className="flex items-center justify-center w-full h-full">
          <img src={ERROR_IMG_SRC} alt="Error loading image" {...rest} data-original-url={src} />
        </div>
      </div>
    )
  }

  if (webpSrc) {
    return (
      // eslint-disable-next-line jsx-a11y/alt-text
      <picture>
        <source srcSet={webpSrc} type="image/webp" />
        <img src={String(src)} alt={alt} className={className} style={style} {...rest} onError={handleError} />
      </picture>
    )
  }

  return <img src={src} alt={alt} className={className} style={style} {...rest} onError={handleError} />
}
