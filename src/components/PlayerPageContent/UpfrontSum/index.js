import React from 'react'
import {Container, Grid, Button} from '@material-ui/core'
import ArrowRightAltIcon from './../../ArrowRightAltIcon'
import TranslateHelper from '../../TranslateHelper'
import Image from '../../Image'
import {useStyles} from './Styles'

const chart = 'upfrontSum/home.jpg'

const UpfrontSum = () => {
  const classes = useStyles()
  return (
    <section className={classes.upfrontSumWrapper}>
      <Container maxWidth="lg">
        <Grid container justify='center'>
          <Grid item xs={12} lg={10}>
            <Grid container justify='flex-start' alignItems='stretch'>
              <Grid item xs={12} md={6} className={classes.upfrontSumContent}>
                <h2 className={classes.upfrontSumTitleHint}>{TranslateHelper().UpfrontSumHint}</h2>
                <h3 className={classes.upfrontSumTitle}>
                  {TranslateHelper().UpfrontSumTitle}
                </h3>
                <p className={classes.upfrontSumDescription}>
                  {TranslateHelper().UpfrontSumDescription}
                </p>
                <Button onClick={() => Intercom('showNewMessage')} className={classes.upfrontSumLink}>
                  {TranslateHelper().UpfrontSumLinkLearnMore}
                  <ArrowRightAltIcon/>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <div className={classes.upfrontSumChart}>
        <Image src={chart} alt='Receive capital now'/>
      </div>
    </section>
  )
}

export default UpfrontSum
