import React from 'react'
import TranslateHelper from '../../TranslateHelper'
import {useStyles} from '../Styles'

const YourRightsAndHowYouAreProtectedByUs = () => {
  const classes = useStyles()
  return (
    <li className={classes.privacyPolicySection}>
      <h2 className={classes.sectionTitle}>{TranslateHelper().YourRightsAndHowYouAreProtectedByUsTitle}</h2>
      <ol>
        <li>
          <p>{TranslateHelper().YourRightsAndHowYouAreProtectedByUsFirstParagraph}</p>
          <p>{TranslateHelper().YourRightsAndHowYouAreProtectedByUsSecondParagraph}</p>
          <p>{TranslateHelper().YourRightsAndHowYouAreProtectedByUsThirdParagraph}</p>
          <p>{TranslateHelper().YourRightsAndHowYouAreProtectedByUsFourthParagraph}</p>
          <p>{TranslateHelper().YourRightsAndHowYouAreProtectedByUsFifthParagraph}</p>
          <p>{TranslateHelper().YourRightsAndHowYouAreProtectedByUsSexParagraph}</p>
          <p>{TranslateHelper().YourRightsAndHowYouAreProtectedByUsSeventhParagraph}</p>
        </li>
        <li>
          <p>{TranslateHelper().YourRightsAndHowYouAreProtectedByUsSecondItemParagraph}</p>
          <p>{TranslateHelper().YourRightsAndHowYouAreProtectedByUsSecondItemSecondParagraph}</p>
        </li>
        <li>
          <p>{TranslateHelper().YourRightsAndHowYouAreProtectedByUsThirdItemParagraph}</p>
          <p>{TranslateHelper().YourRightsAndHowYouAreProtectedByUsThirdItemSecondParagraph}</p>
          <p>{TranslateHelper().YourRightsAndHowYouAreProtectedByUsThirdItemThirdParagraph}</p>
        </li>
      </ol>
    </li>
  )
}

export default YourRightsAndHowYouAreProtectedByUs
