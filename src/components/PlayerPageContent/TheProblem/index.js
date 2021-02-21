import React from 'react'
import {Button} from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import ArrowRightAltIcon from './../../ArrowRightAltIcon'
import TranslateHelper from '../../TranslateHelper'
import {useStyles} from './Styles'
import Image from '../../Image'

const chart = 'theProblem/chart.png'

const TheProblem = () => {
  const classes = useStyles()
  return (
    <section className={classes.theProblemWrapper}>
      <Container maxWidth="lg">
        <Grid container justify='center'>
          <Grid item xs={12} lg={10}>
            <Grid container justify='center' alignItems='center'>
              <Grid item xs={12} md={6} className={classes.theProblemContent}>
                <h2 className={classes.theProblemTitleHint}>{TranslateHelper().TheProblemHint}</h2>
                <h3 className={classes.theProblemTitle}>
                  {TranslateHelper().TheProblemTitle}
                </h3>
                <p className={classes.theProblemDescription}>
                  {TranslateHelper().TheProblemDescription}
                </p>
                <Button onClick={() => Intercom('showNewMessage')} className={classes.theProblemLink}>
                  {TranslateHelper().TheProblemLinkLearnMore}
                  <ArrowRightAltIcon/>
                </Button>
              </Grid>
              <Grid item xs={12} md={6} className={classes.theProblemChartWrapper}>
                <Image src={chart} alt={'the Problem chart'}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default TheProblem
