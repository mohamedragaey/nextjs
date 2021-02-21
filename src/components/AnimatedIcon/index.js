import React from 'react'
import Lottie from 'react-lottie'
import {useStyles} from './Styles'

const AnimatedIcon = ({animationData, width, height}) => {
  const classes = useStyles()
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return (
    <div className={`${classes.animatedIconWrapper}`}>
      <Lottie options={defaultOptions} height={height} width={width}/>
    </div>
  )
}

export default AnimatedIcon
