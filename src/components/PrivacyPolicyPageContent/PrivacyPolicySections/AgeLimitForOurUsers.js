import React from 'react'
import TranslateHelper from '../../TranslateHelper'
import {useStyles} from '../Styles'

const AgeLimitForOurUsers = () => {
  const classes = useStyles()
  return (
    <li className={classes.privacyPolicySection}>
      <h2 className={classes.sectionTitle}>{TranslateHelper().AgeLimitForOurUsersTitle}</h2>
      <p>{TranslateHelper().AgeLimitForOurUsersParagraph}</p>
      <p>{TranslateHelper().AgeLimitForOurUsersSecondParagraph}</p>
    </li>
  )
}

export default AgeLimitForOurUsers
