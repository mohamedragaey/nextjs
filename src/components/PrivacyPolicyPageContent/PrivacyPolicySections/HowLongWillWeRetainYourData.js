import React from 'react'
import TranslateHelper from '../../TranslateHelper'
import {useStyles} from '../Styles'

const HowLongWillWeRetainYourData = () => {
  const classes = useStyles()
  return (
    <li className={classes.privacyPolicySection}>
      <h2 className={classes.sectionTitle}>{TranslateHelper().HowLongWillWeRetainYourDataTitle}</h2>
      <p>{TranslateHelper().HowLongWillWeRetainYourDataParagraph}</p>
    </li>
  )
}

export default HowLongWillWeRetainYourData
