import React from 'react'
import dynamic from 'next/dynamic'
import {Container, Grid} from '@material-ui/core'
import TranslateHelper from '../TranslateHelper'
import {useStyles} from './Styles'

const Introduction = dynamic(import('./PrivacyPolicySections/Introduction'))
const Interpretation = dynamic(import('./PrivacyPolicySections/Interpretation'))
const NotificationOfChanges = dynamic(import('./PrivacyPolicySections/NotificationOfChanges'))
const InternationalTransferOfData = dynamic(import('./PrivacyPolicySections/InternationalTransferOfData'))
const AgeLimitForOurUsers = dynamic(import('./PrivacyPolicySections/AgeLimitForOurUsers'))
const HowLongWillWeRetainYourData = dynamic(import('./PrivacyPolicySections/HowLongWillWeRetainYourData'))
const YourDataAndThirdParties = dynamic(import('./PrivacyPolicySections/YourDataAndThirdParties'))
const YourRightsAndHowYouAreProtectedByUs = dynamic(import('./PrivacyPolicySections/YourRightsAndHowYouAreProtectedByUs'))
const LegalBasisForDataCollection = dynamic(import('./PrivacyPolicySections/LegalBasisForDataCollection'))
const HowWeUseYourPersonalData = dynamic(import('./PrivacyPolicySections/HowWeUseYourPersonalData'))

const PrivacyPolicyPageContent = () => {
  const classes = useStyles()
  return (
    <section className={classes.privacyPolicyPageContentWrapper}>
      <Container maxWidth="lg">
        <Grid container justify={'center'}>
          <Grid item xs={12} sm={12}>
            <h1 className={classes.privacyPolicyPageContentTitle}>{TranslateHelper().PrivacyPolicyPageTitle}</h1>
            <ol>
              <Introduction/>
              <LegalBasisForDataCollection/>
              <HowWeUseYourPersonalData/>
              <YourRightsAndHowYouAreProtectedByUs/>
              <YourDataAndThirdParties/>
              <HowLongWillWeRetainYourData/>
              <AgeLimitForOurUsers/>
              <InternationalTransferOfData/>
              <NotificationOfChanges/>
              <Interpretation/>
            </ol>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default PrivacyPolicyPageContent
