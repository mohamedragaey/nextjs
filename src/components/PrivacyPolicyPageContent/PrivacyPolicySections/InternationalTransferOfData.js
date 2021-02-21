import React from 'react'
import TranslateHelper from '../../TranslateHelper'
import {useStyles} from '../Styles'

const InternationalTransferOfData = () => {
  const classes = useStyles()
  return (
    <li className={classes.privacyPolicySection}>
      <h2 className={classes.sectionTitle}>{TranslateHelper().InternationalTransferOfDataTitle}</h2>
      <p>{TranslateHelper().InternationalTransferOfDataParagraph}</p>
    </li>
  )
}

export default InternationalTransferOfData
