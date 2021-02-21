import React from 'react'
import TranslateHelper from '../../TranslateHelper'
import {useStyles} from '../Styles'

const YourDataAndThirdParties = () => {
  const classes = useStyles()
  return (
    <li className={classes.privacyPolicySection}>
      <h2 className={classes.sectionTitle}>{TranslateHelper().YourDataAndThirdPartiesTitle}</h2>
      <ol>
        <li>
          <p>{TranslateHelper().YourDataAndThirdPartiesFirstParagraph}</p>
          <p>{TranslateHelper().YourDataAndThirdPartiesSecondParagraph}</p>
          <p>{TranslateHelper().YourDataAndThirdPartiesThirdParagraph}</p>
          <p>{TranslateHelper().YourDataAndThirdPartiesFourthParagraph}</p>
        </li>
        <li>
          <p>{TranslateHelper().YourDataAndThirdPartiesSecondItemParagraph}</p>
          <p>{TranslateHelper().YourDataAndThirdPartiesSecondItemSecondParagraph}</p>
        </li>
      </ol>
    </li>
  )
}

export default YourDataAndThirdParties
