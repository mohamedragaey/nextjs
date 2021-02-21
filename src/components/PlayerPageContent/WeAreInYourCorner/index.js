import React from 'react'
import Link from 'next/link'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import ArrowRightAltIcon from './../../ArrowRightAltIcon'
import TranslateHelper from '../../TranslateHelper'
import ColumnLayout from '../../ColumnLayout'
import {NamedRoutes} from '../../../routes'
import {useStyles} from './Styles'
import Image from '../../Image'

import arrows from './../../../lotties/Arrows.json'
import coins from './../../../lotties/Coins.json'

const chart = 'WeAreInYourCorner/group19@3x.png'

const WeAreInYourCorner = () => {
  const classes = useStyles()

  return (
    <section className={classes.weAreInYourCornerWrapper}>
      <Container maxWidth="lg">
        <Grid container justify='center'>
          <Grid item xs={12} lg={11}>
            <Grid container justify='center' alignItems='center'>
              <Grid item xs={12} md={6} className={classes.weAreInYourCornerChart}>
                <Image src={chart} alt='We Are In Your Corner chart'/>
              </Grid>
              <Grid item xs={12} md={6} className={classes.weAreInYourCornerContent}>
                <h2 className={classes.weAreInYourCornerTitle}>
                  {TranslateHelper().WeAreInYourCornerTitle}
                </h2>
                <p className={classes.weAreInYourCornerDescription}>
                  {TranslateHelper().WeAreInYourCornerDescription}
                </p>
                <Link href={NamedRoutes.about}>
                  <a className={classes.weAreInYourCornerLink}>
                    {TranslateHelper().WeAreInYourCornerLinkLearnMore}
                    <ArrowRightAltIcon/>
                  </a>
                </Link>
                <Grid container justify='space-between'>
                  <Grid item xs={12} md={6} className={classes.weAreInYourCornerColumnWrapper}>
                    <ColumnLayout
                      small
                      animationData={arrows}
                      width={45}
                      height={57}
                      title={TranslateHelper().HowItWorksColumnLayoutMissionTitle}
                      description={TranslateHelper().HowItWorksColumnLayoutMissionDescription}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <ColumnLayout
                      small
                      animationData={coins}
                      width={50}
                      height={56}
                      title={TranslateHelper().HowItWorksColumnLayoutStackTitle}
                      description={TranslateHelper().HowItWorksColumnLayoutStackDescription}
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

export default WeAreInYourCorner
