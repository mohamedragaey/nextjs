import React from 'react'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import TranslateHelper from '../../TranslateHelper'
import LazyImage from '../../LazyImage'
import {useStyles} from './Styles'

import premium_legue from './../../../images/ConnectedWithTheBest/premium_legue.png'
import ligue1 from './../../../images/ConnectedWithTheBest/ligue1.png'
import laLiga from './../../../images/ConnectedWithTheBest/laLiga.png'
import bundesLiga from './../../../images/ConnectedWithTheBest/bundesLiga.png'
import seriaA from './../../../images/ConnectedWithTheBest/seriaA.png'

const ConnectedWithTheBest = () => {
  const classes = useStyles()
  return (
    <section className={classes.connectedWithTheBestWrapper}>
      <Container maxWidth="lg">
        <Grid container justify='center'>
          <Grid item xs={12} lg={10}>
            <h2 className={classes.connectedWithTheBestTitle}>
              {TranslateHelper().ConnectedWithTheBestTitle}
            </h2>
            <p className={classes.connectedWithTheBestDescription}>
              {TranslateHelper().ConnectedWithTheBestDescription}
            </p>
            <div className={classes.connectedWithTheBestClients}>
              <LazyImage src={premium_legue} alt='premium league' tooltipTitle='premium league'/>
              <LazyImage src={ligue1} alt='LIGUE 1' tooltipTitle='LIGUE 1'/>
              <LazyImage src={laLiga} alt='LaLiga' tooltipTitle='LaLiga'/>
              <LazyImage src={bundesLiga} alt='BUNDES Liga' tooltipTitle='BUNDES Liga'/>
              <LazyImage src={seriaA} alt='SERIE A' tooltipTitle='SERIE A'/>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default ConnectedWithTheBest
