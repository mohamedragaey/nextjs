import React from 'react'
import MainNavigation from '../../Navigation/MainNavigation'
import {useStyles} from './Styles'

const SiteMap = () => {
  const classes = useStyles()

  return (
    <section className={classes.siteMapWrapper}>
      <div className={classes.siteMapColumn}>
        <MainNavigation/>
      </div>
    </section>
  )
}
export default SiteMap
