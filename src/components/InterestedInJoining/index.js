import React from 'react'
import {Container, Grid, Button} from '@material-ui/core'
import TranslateHelper from '../TranslateHelper'
import {useStyles} from './Styles'

const InterestedInJoining = () => {
  const classes = useStyles()
  return (
    <section className={classes.interestedInJoiningWrapper}>
      <Container maxWidth="lg">
        <Grid container justify='center'>
          <Grid item xs={12} lg={10}>
            <h2 className={classes.interestedInJoiningTitle}>
              {TranslateHelper().InterestedInJoiningTitle}
            </h2>
            <Button onClick={() => Intercom('showNewMessage')} variant='contained'
                    className={classes.interestedInJoiningButton}>
              {TranslateHelper().InterestedInJoiningButtonLearnMore}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default InterestedInJoining
