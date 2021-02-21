import React from 'react'
import {Button, Container, Grid} from '@material-ui/core'
import ArrowRightAltIcon from './../../ArrowRightAltIcon'
import ColumnLayout from '../../ColumnLayout'
import {useStyles} from './Styles'

import meter from './../../../lotties/Meter.json'
import shield from './../../../lotties/Shield.json'
import warning from './../../../lotties/Warning.json'
import lock from './../../../lotties/lock.json'
import TranslateHelper from '../../TranslateHelper'

const WhyCred = () => {
  const classes = useStyles()
  return (
    <section className={classes.whyCredWrapper}>
      <Container maxWidth="lg">
        <Grid container justify='center'>
          <Grid item xs={12} lg={10}>
            <Grid container justify='center' alignItems='center'>
              <Grid item xs={12} md={12}>
                <h2 className={classes.whyCredTitleHint}>{TranslateHelper().WhyCredHint}</h2>
                <h3 className={classes.whyCredTitle}>
                  {TranslateHelper().WhyCredTitle}
                </h3>
              </Grid>
              <Grid item xs={12} md={12}>
                <Grid container justify='space-between'>
                  <Grid item xs={12} md={6} lg={3} className={classes.whyCredColumnWrapper}>
                    <ColumnLayout
                      small
                      animationData={lock}
                      width={66}
                      height={38}
                      title={TranslateHelper().WhyCredColumnLayoutLockedTitle}
                      description={TranslateHelper().WhyCredColumnLayoutLockedDescription}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={3} className={classes.whyCredColumnWrapper}>
                    <ColumnLayout
                      small
                      animationData={meter}
                      width={66}
                      height={33}
                      title={TranslateHelper().WhyCredColumnLayoutLowerRiskTitle}
                      description={TranslateHelper().WhyCredColumnLayoutLowerRiskDescription}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={3} className={classes.whyCredColumnWrapper}>
                    <ColumnLayout
                      small
                      animationData={shield}
                      height={52}
                      width={53}
                      title={TranslateHelper().WhyCredColumnLayoutDownSideTitle}
                      description={TranslateHelper().WhyCredColumnLayoutDownSideDescription}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={3} className={classes.whyCredColumnWrapper}>
                    <ColumnLayout
                      small
                      animationData={warning}
                      height={47}
                      width={47}
                      title={TranslateHelper().WhyCredColumnLayoutDiversificationTitle}
                      description={TranslateHelper().WhyCredColumnLayoutDiversificationDescription}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={12}>
                <Button onClick={() => Intercom('showNewMessage')} className={classes.whyCredLink}>
                  {TranslateHelper().WhyCredLinkLearnMore}
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

export default WhyCred
