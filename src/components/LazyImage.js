import React from 'react'
import {LazyLoadImage} from 'react-lazy-load-image-component'
import {Tooltip} from '@material-ui/core'

const LazyImage = ({caption, alt, height, width, src, className, tooltipTitle}) => (
  <>
    <Tooltip title={!!tooltipTitle ? tooltipTitle : 'image'} arrow>
      <LazyLoadImage
        effect="blur"
        className={className}
        src={src} // use normal <img> attributes as props
        alt={alt}
        height={height}
        width={width}/>
    </Tooltip>
    {!!caption &&
    <span>{caption}</span>
    }
  </>
)

export default LazyImage
