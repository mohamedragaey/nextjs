import React from 'react'
import {Container, Grid, Button} from '@material-ui/core'
import {md} from '../../../utils/ResponsiveUtility'
import TranslateHelper from '../../TranslateHelper'
import {useStyles} from './Styles'
import Image from '../../Image'

const bannerImageMobile = 'Clubs/cred-club-mobile.png'
const bannerImage = 'Clubs/heroImage.jpg'

const ClubsBanner = () => {
  const classes = useStyles()
  const [width, setWidth] = React.useState(process.browser ? document.body.clientWidth : '')
  const DesktopAndUp = (width >= md)

  React.useEffect(() => {
    const getWidth = () => {
      setWidth(process.browser ? document.body.clientWidth : '')
    }

    window.addEventListener('resize', getWidth)
    return () => {
      window.removeEventListener('resize', getWidth)
    }
  }, [width])

  return (
    <section className={classes.clubsBannerWrapper}>
      <Image src={DesktopAndUp ? bannerImage : bannerImageMobile} alt={'Players page banner image'}/>
      <Container maxWidth="lg" className={classes.clubsBannerCaptionContainer}>
        <Grid container justify='flex-start'>
          <Grid item xs={12} lg={6}>
            <div className={classes.clubsBannerCaption}>
              <h1 className={classes.clubsBannerCaptionTitle}>
                {TranslateHelper().ClubsBannerBannerCaptionTitle}
              </h1>
              <p className={classes.clubsBannerCaptionDescription}>
                {TranslateHelper().ClubsBannerBannerCaptionDescription}
              </p>
              <div className={classes.clubsBannerCaptionActions}>
                <Button variant='contained' color='default' className={classes.clubsBannerCaptionActionsButton}>
                  {TranslateHelper().ClubsBannerBannerCaptionActionsGetInTouch}
                </Button>
                <Button variant='outlined' color='default' className={classes.clubsBannerCaptionActionsButtonOutlined}>
                  {TranslateHelper().ClubsBannerBannerCaptionActionsLearnMore}
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default ClubsBanner
