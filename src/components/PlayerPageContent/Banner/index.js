import React from 'react'
import {useStyles} from './Styles'
import Image from '../../Image'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import {Button} from '@material-ui/core'
import Link from 'next/link'
import {NamedRoutes} from '../../../routes'
import ArrowRightAltIcon from './../../ArrowRightAltIcon'
import TranslateHelper from '../../TranslateHelper'

const Banner = () => {
  const classes = useStyles()
  return (
    <section className={classes.bannerWrapper}>
      <Image src={'Players/PlayesBanner.jpg'} alt={'Players page banner image'}/>
      <Container maxWidth="lg" className={classes.bannerCaptionContainer}>
        <Grid container justify='flex-start'>
          <Grid item xs={12}>
            <div className={classes.bannerCaption}>
              <h1 className={classes.bannerCaptionTitle}>
                {TranslateHelper().BannerBannerCaptionTitle}
              </h1>
              <p className={classes.bannerCaptionDescription}>
                {TranslateHelper().BannerBannerCaptionDescription}
              </p>
              <div className={classes.bannerCaptionActions}>
                <Button
                  variant='contained' color='default'
                  onClick={() => Intercom('showNewMessage')}
                  className={classes.bannerCaptionActionsButton}
                >
                  {TranslateHelper().BannerBannerCaptionActionsLearnMore}
                </Button>
                <Link href={NamedRoutes.about}>
                  <a className={classes.bannerCaptionActionsLink}>
                    {TranslateHelper().BannerBannerCaptionActionsAbout}
                    <ArrowRightAltIcon/>
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

export default Banner
