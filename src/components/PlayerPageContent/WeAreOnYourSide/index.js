import React from 'react'
import {Container, Grid, Button} from '@material-ui/core'
import ArrowRightAltIcon from './../../ArrowRightAltIcon'
import TranslateHelper from '../../TranslateHelper'
import Image from '../../Image'
import {useStyles} from './Styles'

const chart = 'WeAreOnYourSide/stadium.jpg'

const WeAreOnYourSide = () => {
  const classes = useStyles()
  return (
    <section className={classes.weAreOnYourSideWrapper}>
      <Container maxWidth="lg">
        <Grid container justify='center'>
          <Grid item xs={12} lg={10}>
            <Grid container justify='flex-start' alignItems='stretch'>
              <Grid item xs={12} md={6} className={classes.weAreOnYourSideContent}>
                <h2 className={classes.weAreOnYourSideTitleHint}>{TranslateHelper().WeAreOnYourSideHint}</h2>
                <h3 className={classes.weAreOnYourSideTitle}>
                  {TranslateHelper().WeAreOnYourSideTitle}
                </h3>
                <p className={classes.weAreOnYourSideDescription}>
                  {TranslateHelper().WeAreOnYourSideDescription}
                </p>
                <Button className={classes.weAreOnYourSideLink} onClick={() => Intercom('showNewMessage')}>
                  {TranslateHelper().WeAreOnYourSideLinkLearnMore}
                  <ArrowRightAltIcon/>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <div className={classes.weAreOnYourSideChart}>
        <Image src={chart} alt='We Are On Your Side chart'/>
      </div>
    </section>
  )
}

export default WeAreOnYourSide
