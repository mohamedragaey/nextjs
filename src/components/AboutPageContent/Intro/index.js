import React from 'react'
import {Container, Grid, Button} from '@material-ui/core'
import TranslateHelper from '../../TranslateHelper'
import Image from '../../Image'
import {useStyles} from './Styles'

const chart = 'about/aboutChat.png'

const Intro = () => {
  const classes = useStyles()
  return (
    <section className={classes.introWrapper}>
      <Container maxWidth="lg">
        <Grid container justify='center'>
          <Grid item xs={12} lg={10}>
            <Grid container justify='center' alignItems='center'>
              <Grid item xs={12} md={6} className={classes.introContent}>
                <h1 className={classes.introTitle}>
                  {TranslateHelper().IntroTitle}
                </h1>
                <p className={classes.introDescription}>
                  {TranslateHelper().IntroDescription}
                </p>
                <Button onClick={() => Intercom('showNewMessage')} className={classes.introLink}>
                  {TranslateHelper().IntroLinkLearnMore}
                </Button>
              </Grid>
              <Grid item xs={12} md={6} className={classes.introChart}>
                <Image src={chart} alt='Mission chart'/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default Intro
