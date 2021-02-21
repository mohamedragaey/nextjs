import React from 'react'
import {Container, Grid, Button} from '@material-ui/core'
import ArrowRightAltIcon from './../../ArrowRightAltIcon'
import TranslateHelper from '../../TranslateHelper'
import LazyImage from '../../LazyImage'
import {useStyles} from './Styles'

import chart from './../../../images/superchargeEarnings/chart.png'

const SuperchargeEarnings = () => {
  const classes = useStyles()
  return (
    <section className={classes.superchargeEarningsWrapper}>
      <Container maxWidth="lg">
        <Grid container justify='center'>
          <Grid item xs={12} lg={10}>
            <Grid container justify='center' alignItems='center'>
              <Grid item xs={12} md={6} className={classes.superchargeEarningsContent}>
                <h2 className={classes.superchargeEarningsTitleHint}>
                  {TranslateHelper().SuperchargeEarningsHint}
                </h2>
                <h3 className={classes.superchargeEarningsTitle}>
                  {TranslateHelper().SuperchargeEarningsTitle}
                </h3>
                <p className={classes.superchargeEarningsDescription}>
                  {TranslateHelper().SuperchargeEarningsDescription}
                </p>
                <Button onClick={() => Intercom('showNewMessage')} className={classes.superchargeEarningsLink}>
                  {TranslateHelper().SuperchargeEarningsLinkLearnMore}
                  <ArrowRightAltIcon/>
                </Button>
              </Grid>
              <Grid item xs={12} md={6} className={classes.superchargeEarningsChart}>
                <LazyImage src={chart} alt='Supercharge Earnings chart' tooltipTitle='Supercharge Earnings chart'/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default SuperchargeEarnings
