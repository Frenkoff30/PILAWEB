import { useState, useEffect } from 'react'

// Crossfading auto-slideshow. Images fill the parent via object-fit cover.
export default function Slideshow({ images, alt, interval = 4500, aspect = '4 / 3' }) {
  const [i, setI] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setI(p => (p + 1) % images.length), interval)
    return () => clearInterval(t)
  }, [images.length, interval])

  return (
    <div style={{ position: 'relative', width: '100%', aspectRatio: aspect }}>
      {images.map((src, idx) => (
        <img key={src} src={src} alt={alt} loading="lazy"
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', imageOrientation: 'from-image',
            opacity: idx === i ? 1 : 0,
            transition: 'opacity 1.1s ease',
          }}/>
      ))}
    </div>
  )
}
