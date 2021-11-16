import Image from 'next/image'

function NextImage({ id, className, style, src, alt, width, height, layout, loader, quality, priority, placeholder, loading, draggable, onClick, objectFit, ref, sizes, objectPosition }) {

  return (
    <div
      className={className} id={id}
      draggable={draggable} style={style}
      onClick={onClick} ref={ref}
    >
      <Image
        src={src} alt={alt} width={width}
        height={height} layout={layout}
        loader={loader} quality={quality}
        priority={priority} placeholder={placeholder}
        loading={loading} objectFit={objectFit}
        sizes={sizes} objectPosition={objectPosition}
      />

    </div>
  )
}

export default NextImage