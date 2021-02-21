import React from 'react'
import {Container, Grid, Button} from '@material-ui/core'
import TranslateHelper from '../../TranslateHelper'
import {useStyles} from './Styles'

const GetInTouch = () => {
  const classes = useStyles()
  return (
    <section className={classes.getInTouchWrapper}>
      <Container maxWidth="lg">
        <Grid container justify='center'>
          <Grid item xs={12} lg={10}>
            <h2 className={classes.getInTouchTitle}>
              {TranslateHelper().GetInTouchTitle}
            </h2>
            <p className={classes.getInTouchDescription}>
              {TranslateHelper().GetInTouchDescription}
            </p>
            <Button variant='contained' className={classes.getInTouchButton}
                    onClick={() => Intercom('showNewMessage')}>
              {TranslateHelper().GetInTouchButtonLearnMore}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default GetInTouch
