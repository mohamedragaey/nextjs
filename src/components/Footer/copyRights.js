import React from 'react'
import Link from 'next/link'
import TranslateHelper from '../TranslateHelper'
import {NamedRoutes} from '../../routes'
import {useStyles} from './Styles'

const CopyRights = () => {
  const classes = useStyles()

  return (
    <div className={classes.footerCopyRights}>
      {TranslateHelper().CopyRightsMessageCopyright} © {new Date().getFullYear()}
      {` `}
      <Link href={NamedRoutes.player}><a>{TranslateHelper().CopyRightsMessageCred}</a></Link>|
      <Link href={NamedRoutes.privacyPolicy}><a>{TranslateHelper().CopyRightsMessagePrivacy}</a></Link>
    </div>
  )
}

export default CopyRights
