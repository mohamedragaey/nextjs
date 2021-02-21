import React from 'react'

const Image = ({src, alt}) => {
  const responsiveImage = require(`../images/${src}?sizes[]=2048,sizes[]=1024,sizes[]=600,sizes[]=300`)
  const responsiveImageWebp = require(`../images/${src}?sizes[]=2048,sizes[]=1024,sizes[]=600,sizes[]=300&format=webp`)

  return (
    <picture>
      <source srcSet={responsiveImageWebp.srcSet} type='image/webp'/>
      <img
        src={responsiveImage.src}
        srcSet={responsiveImage.srcSet}
        width={responsiveImage.width}
        height={responsiveImage.height}
        sizes='(min-width: 1024px) 1024px, 100vw'
        loading="lazy"
        alt={alt}
      />
    </picture>
  )
}

export default Image
