import React from 'react'
import TranslateHelper from '../../TranslateHelper'
import {useStyles} from '../Styles'

const NotificationOfChanges = () => {
  const classes = useStyles()
  return (
    <li className={classes.privacyPolicySection}>
      <h2 className={classes.sectionTitle}>{TranslateHelper().NotificationOfChangesTitle}</h2>
      <p>{TranslateHelper().NotificationOfChangesParagraph}</p>
    </li>
  )
}

export default NotificationOfChanges
