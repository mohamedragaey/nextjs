import React from 'react'
import {Container, Grid, Button} from '@material-ui/core'
import ArrowRightAltIcon from './../../ArrowRightAltIcon'
import TranslateHelper from '../../TranslateHelper'
import Image from '../../Image'
import {useStyles} from './Styles'

const chart = 'about/OurFocus.jpg'

const OurFocus = () => {
  const classes = useStyles()
  return (
    <section className={classes.ourFocusWrapper}>
      <Container maxWidth="lg">
        <Grid container justify='center'>
          <Grid item xs={12} lg={10}>
            <Grid container justify='center' alignItems='center'>
              <Grid item xs={12} md={7} className={classes.ourFocusChart}>
                <Image src={chart} alt='Our Focus chart'/>
              </Grid>
              <Grid item xs={12} md={5} className={classes.ourFocusContent}>
                <h6 className={classes.ourFocusTitleHint}>{TranslateHelper().OurFocusHint}</h6>
                <h2 className={classes.ourFocusTitle}>
                  {TranslateHelper().OurFocusTitle}
                </h2>
                <p className={classes.ourFocusDescription}>
                  {TranslateHelper().OurFocusDescription}
                </p>
                <Button onClick={() => Intercom('showNewMessage')} className={classes.ourFocusLink}>
                  {TranslateHelper().OurFocusLinkLearnMore}
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

export default OurFocus
