// Real product screenshots, framed in a light browser bar.
export default function AppShot({ src, alt, url, live, width, height, eager = false }) {
  return (
    <div className="mk">
      <div className="mk__bar">
        <span className="mk__dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="mk__url">{url}</span>
        {live && (
          <span className="mk__live">
            <i />
            {live}
          </span>
        )}
      </div>
      <img
        className="mk__shot"
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
      />
    </div>
  )
}
