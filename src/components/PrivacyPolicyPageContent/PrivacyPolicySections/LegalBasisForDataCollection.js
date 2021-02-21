import React from 'react'
import TranslateHelper from '../../TranslateHelper'
import {useStyles} from '../Styles'

const LegalBasisForDataCollection = () => {
  const classes = useStyles()
  return (
    <li className={classes.privacyPolicySection}>
      <h2 className={classes.sectionTitle}>{TranslateHelper().LegalBasisForDataCollectionTitle}</h2>
      <ol>
        <li>
          <p>{TranslateHelper().LegalBasisForDataCollectionFirstParagraph}</p>
          <p>{TranslateHelper().LegalBasisForDataCollectionSecondParagraph}</p>
          <p>{TranslateHelper().LegalBasisForDataCollectionThirdParagraph}</p>
          <p>{TranslateHelper().LegalBasisForDataCollectionFourthParagraph}</p>
        </li>
        <li>
          <p>{TranslateHelper().LegalBasisForDataCollectionSecondItemParagraph}</p>
          <p>{TranslateHelper().LegalBasisForDataCollectionSecondItemSecondParagraph}</p>
          <ul>
            <li>{TranslateHelper().LegalBasisForDataCollectionSecondItemSubParagraph}</li>
            <li>{TranslateHelper().LegalBasisForDataCollectionSecondItemSubSecondParagraph}</li>
            <li>{TranslateHelper().LegalBasisForDataCollectionSecondItemSubThirdParagraph}</li>
            <li>{TranslateHelper().LegalBasisForDataCollectionSecondItemSubFourthParagraph}</li>
          </ul>
        </li>
      </ol>
    </li>
  )
}

export default LegalBasisForDataCollection
