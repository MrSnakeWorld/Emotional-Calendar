import React, { ReactElement } from 'react'
import Image from 'next/image'

interface IProps {
  id?: any,
  className?: any, 
  style?: any, 
  src?: any, 
  alt?: any, 
  width?: any, 
  height?: any, 
  layout?: any, 
  loader?: any, 
  quality?: any, 
  priority?: any, 
  placeholder?: any, 
  loading?: any, 
  draggable?: any, 
  onClick?: any, 
  objectFit?: any, 
  ref?: any, 
  sizes?: any, 
  objectPosition?: any
}

function NextImage({ id, className, style, src, alt, width, height, layout, loader, quality, priority, placeholder, loading, draggable, onClick, objectFit, ref, sizes, objectPosition }: IProps) {

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