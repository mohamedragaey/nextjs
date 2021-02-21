import React from 'react'
import TranslateHelper from '../../TranslateHelper'
import {useStyles} from '../Styles'

const Interpretation = () => {
  const classes = useStyles()
  return (
    <li className={classes.privacyPolicySection}>
      <h2 className={classes.sectionTitle}>{TranslateHelper().InterpretationTitle}</h2>
      <p>{TranslateHelper().InterpretationParagraph}</p>
      <p>{TranslateHelper().InterpretationSecondParagraph}</p>
    </li>
  )
}

export default Interpretation
