import React from 'react'
import Link from 'next/link'
import {Button} from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import FCAApprovedAdvisorsChart from './FCAApprovedAdvisorsChart'
import ArrowRightAltIcon from './../../ArrowRightAltIcon'
import TranslateHelper from '../../TranslateHelper'
import ColumnLayout from '../../ColumnLayout'
import {NamedRoutes} from '../../../routes'
import {useStyles} from './Styles'

import stamp from './../../../lotties/Stamp.json'
import timer from './../../../lotties/Timer.json'

const FCAApprovedAdvisors = () => {
  const classes = useStyles()

  return (
    <section className={classes.fCAApprovedAdvisorsWrapper}>
      <Container maxWidth={'xl'}>
        <Grid container justify='center'>
          <Grid item xs={12} lg={10}>
            <Grid container justify='center' alignItems='center'>
              <Grid item xs={12} md={7} className={classes.fCAApprovedAdvisorsChart}>
                <FCAApprovedAdvisorsChart/>
              </Grid>
              <Grid item xs={12} md={5} className={classes.fCAApprovedAdvisorsContent}>
                <h2 className={classes.fCAApprovedAdvisorsTitleHint}>{TranslateHelper().FCAApprovedAdvisorsHint}</h2>
                <h3 className={classes.fCAApprovedAdvisorsTitle}>
                  {TranslateHelper().FCAApprovedAdvisorsTitle}
                </h3>
                <p className={classes.fCAApprovedAdvisorsDescription}>
                  {TranslateHelper().FCAApprovedAdvisorsDescription}
                </p>
                <Button onClick={() => Intercom('showNewMessage')} className={classes.fCAApprovedAdvisorsLink}>
                  {TranslateHelper().FCAApprovedAdvisorsLinkLearnMore}
                  <ArrowRightAltIcon/>
                </Button>
                <Grid container justify='space-between'>
                  <Grid item xs={12} md={6} className={classes.fCAApprovedAdvisorsColumnWrapper}>
                    <ColumnLayout
                      small
                      animationData={stamp}
                      width={49}
                      height={61}
                      title={TranslateHelper().HowItWorksColumnLayoutAdvisorsTitle}
                      description={TranslateHelper().HowItWorksColumnLayoutAdvisorsDescription}
                      link={
                        <Link href={NamedRoutes.about}>
                          <a className={classes.fCAApprovedAdvisorsColumnLink}>
                            {TranslateHelper().HowItWorksColumnLayoutAdvisorsLink}
                            <ArrowRightAltIcon/>
                          </a>
                        </Link>
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <ColumnLayout
                      small
                      animationData={timer}
                      width={36}
                      height={51}
                      title={TranslateHelper().HowItWorksColumnLayoutInvestmentTitle}
                      description={TranslateHelper().HowItWorksColumnLayoutInvestmentDescription}
                      link={
                        <Button onClick={() => Intercom('showNewMessage')}
                                className={classes.fCAApprovedAdvisorsColumnButton}>
                          {TranslateHelper().HowItWorksColumnLayoutInvestmentLink}
                          <ArrowRightAltIcon/>
                        </Button>
                      }
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default FCAApprovedAdvisors
