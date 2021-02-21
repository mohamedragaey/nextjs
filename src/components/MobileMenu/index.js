import React from 'react'
import dynamic from 'next/dynamic'
import Drawer from '@material-ui/core/Drawer'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import {GeneralConsumer, GeneralProvider} from '../../GeneralContext'
import {useStyles} from './Styles'
import LanguageSwitcher from '../LanguageSwitcher'

const Logo = dynamic(import('../Logo'))
const MainNavigation = dynamic(import('../Navigation/MainNavigation'))

const MobileMenu = () => {
  const classes = useStyles()

  return (
    <GeneralProvider>
      <GeneralConsumer>{({mobileMenuState, toggleMobileMenuDrawer}) => (
        <>
          <div className={classes.languageSwitcherWrapper}>
            <LanguageSwitcher/>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={() => toggleMobileMenuDrawer(true)}
            >
              <MenuIcon/>
            </IconButton>
          </div>
          <Drawer className={classes.navigationDrawerWrapper} anchor='top' open={mobileMenuState}
                  onClose={() => toggleMobileMenuDrawer(false)}>
            <div className={classes.navigationDrawer}>
              <IconButton
                edge="end"
                className={classes.menuCloseButton}
                color="inherit"
                aria-label="close drawer"
                onClick={() => toggleMobileMenuDrawer(false)}
              >
                <CloseIcon/>
              </IconButton>
              <Logo/>
              <MainNavigation toggleMobileMenuDrawer={toggleMobileMenuDrawer}/>
            </div>
          </Drawer>
        </>
      )}
      </GeneralConsumer>
    </GeneralProvider>
  )
}

export default MobileMenu
