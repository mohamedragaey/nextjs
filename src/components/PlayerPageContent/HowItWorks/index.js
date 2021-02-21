import React from 'react'
import {Button, Container, Grid} from '@material-ui/core'
import ArrowRightAltIcon from './../../ArrowRightAltIcon'
import TranslateHelper from '../../TranslateHelper'
import ColumnLayout from '../../ColumnLayout'
import {useStyles} from './Styles'

import hands from './../../../lotties/Hands.json'
import umbrella from './../../../lotties/Umbrella.json'
import boots from './../../../lotties/Boots.json'

const HowItWorks = () => {
  const classes = useStyles()
  return (
    <section className={classes.howItWorksWrapper}>
      <Container maxWidth="lg">
        <Grid container justify='center'>
          <Grid item xs={12} lg={10}>
            <Grid container justify='center' alignItems='center'>
              <Grid item xs={12} md={12}>
                <h2 className={classes.howItWorksTitleHint}>{TranslateHelper().HowItWorksHint}</h2>
                <h3 className={classes.howItWorksTitle}>
                  {TranslateHelper().HowItWorksTitle}
                </h3>
                <p className={classes.howItWorksDescription}>
                  {TranslateHelper().HowItWorksDescription}
                </p>
              </Grid>
              <Grid item xs={12} md={12}>
                <Grid container justify='space-between'>
                  <Grid item xs={12} md={4}>
                    <ColumnLayout
                      animationData={hands}
                      width={130}
                      height={55}
                      title={TranslateHelper().HowItWorksColumnLayoutReceiveTitle}
                      description={TranslateHelper().HowItWorksColumnLayoutReceiveDescription}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <ColumnLayout
                      animationData={umbrella}
                      width={82}
                      height={70}
                      title={TranslateHelper().HowItWorksColumnLayoutProtectTitle}
                      description={TranslateHelper().HowItWorksColumnLayoutProtectDescription}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <ColumnLayout
                      animationData={boots}
                      width={50}
                      height={100}
                      title={TranslateHelper().HowItWorksColumnLayoutSecureTitle}
                      description={TranslateHelper().HowItWorksColumnLayoutSecureDescription}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={12}>
                <Button onClick={() => Intercom('showNewMessage')} className={classes.howItWorksLink}>
                  {TranslateHelper().HowItWorksLinkLearnMore}
                  <ArrowRightAltIcon/>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default HowItWorks
