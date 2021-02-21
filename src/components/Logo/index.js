import React from 'react'
import Link from 'next/link'
import {NamedRoutes} from '../../routes'
import {useStyles} from './Styles'
import Image from '../Image'

const logoImage = 'logo.png'

const Logo = () => {
  const classes = useStyles()
  return (
    <div className={classes.logo}>
      <Link href={NamedRoutes.player}>
        <a><Image alt='logo' src={logoImage}/></a>
      </Link>
    </div>
  )
}

export default Logo
