import React from 'react'
import {Container, Grid} from '@material-ui/core'
import TranslateHelper from '../../TranslateHelper'
import ColumnLayout from '../../ColumnLayout'
import {useStyles} from './Styles'

import user from './../../../lotties/User.json'
import planet from './../../../lotties/Planet.json'
import podium from './../../../lotties/Podium.json'

const OurKeyValues = () => {
  const classes = useStyles()
  return (
    <section className={classes.ourKeyValuesWrapper}>
      <Container maxWidth="lg">
        <Grid container justify='center'>
          <Grid item xs={12} lg={10}>
            <Grid container justify='center' alignItems='center'>
              <Grid item xs={12} md={12}>
                <h6 className={classes.ourKeyValuesTitleHint}>{TranslateHelper().OurKeyValuesHint}</h6>
                <h2 className={classes.ourKeyValuesTitle}>
                  {TranslateHelper().OurKeyValuesTitle}
                </h2>
              </Grid>
              <Grid item xs={12} md={12}>
                <Grid container justify='space-between'>
                  <Grid item xs={12} md={4}>
                    <ColumnLayout
                      small
                      inverted
                      animationData={user}
                      width={44}
                      height={55}
                      title={TranslateHelper().OurKeyValuesColumnLayoutCustomerTitle}
                      description={TranslateHelper().OurKeyValuesColumnLayoutCustomerDescription}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <ColumnLayout
                      small
                      inverted
                      animationData={planet}
                      width={70}
                      height={51}
                      title={TranslateHelper().OurKeyValuesColumnLayoutGlobalTitle}
                      description={TranslateHelper().OurKeyValuesColumnLayoutGlobalDescription}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <ColumnLayout
                      small
                      inverted
                      animationData={podium}
                      width={57}
                      height={53}
                      title={TranslateHelper().OurKeyValuesColumnLayoutImpactTitle}
                      description={TranslateHelper().OurKeyValuesColumnLayoutImpactDescription}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default OurKeyValues
