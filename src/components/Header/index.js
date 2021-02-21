import React from 'react'
import dynamic from 'next/dynamic'
import {useRouter} from 'next/router'
import {Container, Grid, AppBar, Toolbar} from '@material-ui/core'
import {LocalStorageService} from '../../Services/LocalStorageService'
import {md} from '../../utils/ResponsiveUtility'
import {useStyles} from './Styles'

const Logo = dynamic(import('../Logo'))
const MobileMenu = dynamic(import('../MobileMenu'))
const GetInTouchButton = dynamic(import('../GetInTouchButton'))
const MainNavigation = dynamic(import('../Navigation/MainNavigation'))

const Header = () => {
  const classes = useStyles()
  const location = useRouter()
  const [state, setState] = React.useState('')
  const [inverseHeader, setInverseHeader] = React.useState(false)
  const [width, setWidth] = React.useState(process.browser ? document.body.clientWidth : '')
  const headerClasses = state ? `${classes.header} ${state}` : classes.header
  const inverseHeaderClass = !!inverseHeader ? `inverseHeader ${headerClasses}` : headerClasses
  const Mobile = (width < md)
  const DesktopAndUp = (width >= md)

  React.useEffect(() => {
    const getWidth = () => {
      setWidth(document.body.clientWidth)
    }
    const resizeHeaderOnScroll = () => {
      let distanceY = window.pageYOffset || document.documentElement.scrollTop
      let shrinkOn = 50

      if (distanceY > shrinkOn) {
        setState('shrink')
      } else {
        setState('')
      }
    }
    window.addEventListener('scroll', resizeHeaderOnScroll)
    window.addEventListener('resize', getWidth)
    return () => {
      window.removeEventListener('scroll', resizeHeaderOnScroll)
      window.removeEventListener('resize', getWidth)
    }
  }, [width])

  React.useEffect(() => {
    LocalStorageService.set('prevLocation', location.pathname)
    if (location.pathname.includes('/about')
      || location.pathname.includes('/verify')
      || location.pathname.includes('/verify-talent')
      || location.pathname.includes('/privacy-policy')
      || location.pathname.includes('/recover/password')
      || location.pathname.includes('/recover/talent-password')
    ) {
      setInverseHeader(true)
    } else {
      setInverseHeader(false)
    }
  }, [location.pathname])

  return (
    <AppBar position="fixed" className={inverseHeaderClass} id='header' elevation={0}>
      <Toolbar className={classes.headerToolbar}>
        <Container maxWidth='lg'>
          <Grid container justify='space-between' alignItems='center'>
            <div className={classes.headerMobileLogoWrapper}>
              <Logo/>
              {Mobile && <MobileMenu/>}
            </div>
            {DesktopAndUp &&
            <>
              <MainNavigation/>
              <GetInTouchButton/>
            </>
            }
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  )
}
export default Header
