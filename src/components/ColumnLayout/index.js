import React from 'react'
import AnimatedIcon from '../AnimatedIcon'
import {useStyles} from './Styles'
import Image from '../Image'

const ColumnLayout = ({animationData, width, height, icon, title, description, small, link, inverted}) => {
  const classes = useStyles()
  const smallClass = !!small ? 'small' : ''
  const invertedClass = !!inverted ? 'inverted' : ''

  return (
    <div className={`${classes.columnLayoutWrapper} ${smallClass} ${invertedClass}`}>
      {!!icon ? <Image src={icon} alt={'Icon'}/> :
        <AnimatedIcon height={height} width={width} animationData={animationData}/>
      }
      <h3 className={classes.columnLayoutTitle}>{title}</h3>
      <p className={classes.columnLayoutDescription}>{description}</p>
      {!!link ? link : null}
    </div>
  )
}

export default ColumnLayout
