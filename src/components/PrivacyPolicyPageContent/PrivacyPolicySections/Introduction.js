import React from 'react'
import TranslateHelper from '../../TranslateHelper'
import {useStyles} from '../Styles'

const Introduction = () => {
  const classes = useStyles()
  return (
    <li className={classes.privacyPolicySection}>
      <h2 className={classes.sectionTitle}>{TranslateHelper().IntroductionTitle}</h2>
      <ol>
        <li>
          <p>{TranslateHelper().IntroductionFirstParagraph}</p>
          <p>{TranslateHelper().IntroductionSecondParagraph}</p>
          <p>{TranslateHelper().IntroductionThirdParagraph}</p>
          <p>{TranslateHelper().IntroductionFourthParagraph}</p>
          <p>{TranslateHelper().IntroductionFifthParagraph}</p>
          <ul>
            <li>{TranslateHelper().IntroductionFirstItemSubParagraph}</li>
            <li>{TranslateHelper().IntroductionFirstItemSubSecondParagraph}</li>
          </ul>
          <p>{TranslateHelper().IntroductionSexParagraph}</p>
          <p>{TranslateHelper().IntroductionSeventhParagraph}</p>
        </li>
        <li>
          <p>{TranslateHelper().IntroductionSecondItemParagraph}</p>
          <p>{TranslateHelper().IntroductionSecondItemSecondParagraph}</p>
          <p>{TranslateHelper().IntroductionSecondItemThirdParagraph}</p>
        </li>
        <li>
          <p>{TranslateHelper().IntroductionThirdItemParagraph}</p>
          <p>{TranslateHelper().IntroductionThirdItemSecondParagraph}</p>
          <ul>
            <li>{TranslateHelper().IntroductionThirdItemSubParagraph}</li>
            <li>{TranslateHelper().IntroductionThirdItemSubSecondParagraph}</li>
            <li>{TranslateHelper().IntroductionThirdItemSubThirdParagraph}</li>
            <li>{TranslateHelper().IntroductionThirdItemSubFourthParagraph}</li>
            <li>{TranslateHelper().IntroductionThirdItemSubFifthParagraph}</li>
            <li>{TranslateHelper().IntroductionThirdItemSubSexParagraph}</li>
            <li>{TranslateHelper().IntroductionThirdItemSubSeventhParagraph}</li>
            <li>{TranslateHelper().IntroductionThirdItemSubEighthParagraph}</li>
            <li>{TranslateHelper().IntroductionThirdItemSubNinthParagraph}</li>
            <li>{TranslateHelper().IntroductionThirdItemSubTenthParagraph}</li>
          </ul>
        </li>
      </ol>
    </li>
  )
}

export default Introduction
