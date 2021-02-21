import React from 'react'
import {Container, Grid} from '@material-ui/core'
import TranslateHelper from '../../TranslateHelper'
import {useStyles} from './Styles'

const EmbedLeverJobs = () => {
  const classes = useStyles()

  React.useEffect(() => {
    window.leverJobsOptions = {accountName: 'credinvestments', includeCss: true}
    let element = document.createElement('script')
    element.src = 'https://andreasmb.github.io/lever-jobs-embed/index.js'
    document.body.appendChild(element)
  }, [])

  return (
    <section className={classes.embedLeverJobsWrapper}>
      <Container maxWidth="lg">
        <Grid container justify='center'>
          <Grid item xs={12} lg={10}>
            <h2 className={classes.embedLeverJobsSectionTitle}>
              {TranslateHelper().EmbedLeverJobsTitleJoin}
            </h2>
            <div id='lever-jobs-container'>
              <h2 className={classes.embedLeverJobsTitle}>
                {TranslateHelper().EmbedLeverJobsTitle}
              </h2>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default EmbedLeverJobs
