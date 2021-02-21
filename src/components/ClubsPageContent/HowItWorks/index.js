import React from 'react'
import Link from 'next/link'
import {Container, Grid} from '@material-ui/core'
import ArrowRightAltIcon from './../../ArrowRightAltIcon'
import TranslateHelper from '../../TranslateHelper'
import ColumnLayout from '../../ColumnLayout'
import {NamedRoutes} from '../../../routes'
import {useStyles} from './Styles'

import hands from './../../../lotties/Hands.json'
import umbrella from './../../../lotties/Umbrella.json'
import rocket from './../../../lotties/Rocket.json'

const ClubsHowItWorks = () => {
  const classes = useStyles()
  return (
    <section className={classes.clubsHowItWorksWrapper}>
      <Container maxWidth="lg">
        <Grid container justify='center'>
          <Grid item xs={12} lg={10}>
            <Grid container justify='center' alignItems='center'>
              <Grid item xs={12} md={12}>
                <h6 className={classes.clubsHowItWorksTitleHint}>{TranslateHelper().ClubsHowItWorksHint}</h6>
                <h2 className={classes.clubsHowItWorksTitle}>
                  {TranslateHelper().ClubsHowItWorksTitle}
                </h2>
                <p className={classes.clubsHowItWorksDescription}>
                  {TranslateHelper().ClubsHowItWorksDescription}
                </p>
              </Grid>
              <Grid item xs={12} md={12}>
                <Grid container justify='space-between'>
                  <Grid item xs={12} md={4}>
                    <ColumnLayout
                      animationData={hands}
                      width={130}
                      height={55}
                      title={TranslateHelper().ClubsHowItWorksColumnLayoutReceiveTitle}
                      description={TranslateHelper().ClubsHowItWorksColumnLayoutReceiveDescription}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <ColumnLayout
                      animationData={umbrella}
                      width={82}
                      height={70}
                      title={TranslateHelper().ClubsHowItWorksColumnLayoutProtectTitle}
                      description={TranslateHelper().ClubsHowItWorksColumnLayoutProtectDescription}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <ColumnLayout
                      animationData={rocket}
                      width={90}
                      height={65}
                      title={TranslateHelper().ClubsHowItWorksColumnLayoutSecureTitle}
                      description={TranslateHelper().ClubsHowItWorksColumnLayoutSecureDescription}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={12}>
                <Link href={NamedRoutes.about}>
                  <a className={classes.clubsHowItWorksLink}>
                    {TranslateHelper().ClubsHowItWorksLinkLearnMore}
                    <ArrowRightAltIcon/>
                  </a>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default ClubsHowItWorks
