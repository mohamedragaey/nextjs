import React from 'react'
import HowWeUseYourPersonalDataTable from './HowWeUseYourPersonalDataTable'
import TranslateHelper from '../../TranslateHelper'
import {useStyles} from '../Styles'

const HowWeUseYourPersonalData = () => {
  const classes = useStyles()
  return (
    <li className={classes.privacyPolicySection}>
      <h2 className={classes.sectionTitle}>{TranslateHelper().HowWeUseYourPersonalDataTitle}</h2>
      <ol>
        <li>
          <p>{TranslateHelper().HowWeUseYourPersonalDataFirstParagraph}</p>
          <p>{TranslateHelper().HowWeUseYourPersonalDataSecondParagraph}</p>
          <p>{TranslateHelper().HowWeUseYourPersonalDataThirdParagraph}</p>
        </li>
        <HowWeUseYourPersonalDataTable/>
        <li>
          <p>{TranslateHelper().HowWeUseYourPersonalDataSecondItemParagraph}</p>
          <p>{TranslateHelper().HowWeUseYourPersonalDataSecondItemSecondParagraph}</p>
          <p>{TranslateHelper().HowWeUseYourPersonalDataSecondItemThirdParagraph}</p>
          <p>{TranslateHelper().HowWeUseYourPersonalDataSecondItemFourthParagraph}</p>
        </li>
      </ol>
    </li>
  )
}

export default HowWeUseYourPersonalData
