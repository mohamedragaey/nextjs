import React from 'react'
import Link from 'next/link'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import ArrowRightAltIcon from './../../ArrowRightAltIcon'
import TranslateHelper from '../../TranslateHelper'
import {NamedRoutes} from '../../../routes'
import {useStyles} from './Styles'
import Image from '../../Image'

const chart = 'Clubs/credTeam.jpg'

const ClubsWeAreOnYourSide = () => {
  const classes = useStyles()
  return (
    <section className={classes.clubsWeAreOnYourSideWrapper}>
      <Container maxWidth="lg">
        <Grid container justify='center'>
          <Grid item xs={12} lg={10}>
            <Grid container justify='flex-end' alignItems='stretch'>
              <Grid item xs={12} md={7} lg={5} xl={7} className={classes.clubsWeAreOnYourSideContent}>
                <h6 className={classes.clubsWeAreOnYourSideTitleHint}>{TranslateHelper().ClubsWeAreOnYourSideHint}</h6>
                <h2 className={classes.clubsWeAreOnYourSideTitle}>
                  {TranslateHelper().ClubsWeAreOnYourSideTitle}
                </h2>
                <p className={classes.clubsWeAreOnYourSideDescription}>
                  {TranslateHelper().ClubsWeAreOnYourSideDescription}
                </p>
                <Link href={NamedRoutes.about}>
                  <a className={classes.clubsWeAreOnYourSideLink}>
                    {TranslateHelper().ClubsWeAreOnYourSideLinkLearnMore}
                    <ArrowRightAltIcon/>
                  </a>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <div className={classes.clubsWeAreOnYourSideChart}>
        <Image src={chart} alt='we’re on your side Sum chart'/>
      </div>
    </section>
  )
}

export default ClubsWeAreOnYourSide
