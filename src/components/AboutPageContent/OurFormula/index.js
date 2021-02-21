import React from 'react'
import {Container, Grid, Button} from '@material-ui/core'
import ArrowRightAltIcon from './../../ArrowRightAltIcon'
import TranslateHelper from '../../TranslateHelper'
import Image from '../../Image'
import {useStyles} from './Styles'

const chart = 'about/formulaGraph.png'

const OurFormula = () => {
  const classes = useStyles()
  return (
    <section className={classes.ourFormulaWrapper}>
      <Container maxWidth="xl">
        <Grid container justify='center' alignItems='center' className={classes.ourFormulaGridContainer}>
          <Grid item xs={12} md={5} className={classes.ourFormulaContent}>
            <h6 className={classes.ourFormulaTitleHint}>{TranslateHelper().OurFormulaHint}</h6>
            <h2 className={classes.ourFormulaTitle}>
              {TranslateHelper().OurFormulaTitle}
            </h2>
            <p className={classes.ourFormulaDescription}>
              {TranslateHelper().OurFormulaDescription}
            </p>
            <Button onClick={() => Intercom('showNewMessage')} className={classes.ourFormulaLink}>
              {TranslateHelper().OurFormulaLinkLearnMore}
              <ArrowRightAltIcon/>
            </Button>
          </Grid>
          <Grid item xs={12} md={7} className={classes.ourFormulaChart}>
            <Image src={chart} alt='Our formula chart'/>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default OurFormula
