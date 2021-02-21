import React from 'react'
import dynamic from 'next/dynamic'
import {Container, Grid} from '@material-ui/core'
import {useStyles} from './Styles'

const Logo = dynamic(import('../Logo'))
const SiteMap = dynamic(import('./SiteMap'))
// const NewsLetter = dynamic(import('./NewsLetter'))
const CopyRights = dynamic(import('./copyRights'))
const SocialMedia = dynamic(import('./SocialMedia'))

const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={classes.footerWrapper}>
      <Container maxWidth="lg">
        <Grid container justify={'center'}>
          <Grid item xs={12} sm={12} md={11}>
            <Grid container spacing={2} justify={'space-between'} alignItems={'center'}>
              <Grid item xs={12} sm={12} md={1} className={classes.flexBaseAuto}><Logo/></Grid>
              <Grid item xs={12} sm={12} md={5}><SiteMap/></Grid>
              {/*<Grid item xs={12} sm={12} md={3}><NewsLetter/></Grid>*/}
              <Grid item xs={12} sm={12} md={4}>
                <SocialMedia/>
                <CopyRights/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </footer>
  )
}
export default Footer
