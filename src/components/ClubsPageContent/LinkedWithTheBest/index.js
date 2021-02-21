import React from 'react'
import {Container, Grid} from '@material-ui/core'
import TranslateHelper from '../../TranslateHelper'
import LazyImage from '../../LazyImage'
import {useStyles} from './Styles'

import manchesterUnited from './../../../images/LinkedWithTheBest/manchesterUnited.png'
import crystalPalace from './../../../images/LinkedWithTheBest/crystalPalace.png'
import manchester from './../../../images/LinkedWithTheBest/manchester.png'
import leicester from './../../../images/LinkedWithTheBest/leicester.png'
import chelsea from './../../../images/LinkedWithTheBest/chelsea.png'
import fox from './../../../images/LinkedWithTheBest/fox.png'

const LinkedWithTheBest = () => {
  const classes = useStyles()
  return (
    <section className={classes.connectedWithTheBestWrapper}>
      <Container maxWidth="lg">
        <Grid container justify='center'>
          <Grid item xs={12} lg={10}>
            <h6 className={classes.connectedWithTheBestTitleHint}>{TranslateHelper().LinkedWithTheBestHint}</h6>
            <h2 className={classes.connectedWithTheBestTitle}>
              {TranslateHelper().LinkedWithTheBestTitle}
            </h2>
            <div className={classes.connectedWithTheBestClients}>
              <LazyImage src={chelsea} alt='chelsea' width={104} tooltipTitle={'chelsea'}/>
              <LazyImage src={manchester} alt='manchester city' width={104} tooltipTitle={'Manchester city'}/>
              <LazyImage src={crystalPalace} alt='crystal Palace' width={104} height={104} tooltipTitle={'Crystal Palace'}/>
              <LazyImage src={manchesterUnited} alt='manchester United' width={104} tooltipTitle={'Manchester United'}/>
              <LazyImage src={leicester} alt='leicester city' width={104} tooltipTitle={'Leicester city'}/>
              <LazyImage src={fox} alt='fox' width={104} tooltipTitle={'Fox'}/>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default LinkedWithTheBest
