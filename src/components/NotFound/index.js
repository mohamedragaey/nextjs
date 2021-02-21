import React from 'react'
import Link from 'next/link'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import TranslateHelper from '../TranslateHelper'
import {NamedRoutes} from '../../routes'
import {useStyles} from './Styles'

const NotFound = () => {
  const classes = useStyles()
  return (
    <section className={classes.notFoundContainerWrapper}>
      <Container maxWidth="lg">
        <Grid container justify='center'>
          <Grid item xs={12}>
            <div className={classes.notFoundWrapper}>
              <span className={classes.notFoundNumber}>404</span>
              <h1>{TranslateHelper().not_found}</h1>
              <div className='item-cta-wrapper'>
                <Link href={NamedRoutes.player}>
                  <a className='item-cta item-cta-primary'>
                    {TranslateHelper().notFoundLinkItemCta}
                  </a>
                </Link>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default NotFound
