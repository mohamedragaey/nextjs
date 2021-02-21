import React from 'react'
import {useRouter} from 'next/router'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import {Button, fade, IconButton, Menu, withStyles} from '@material-ui/core'
import DeFlag from './flags/DeFlag'
import EnFlag from './flags/EnFlag'
import EsFlag from './flags/EsFlag'
import FrFlag from './flags/FrFlag'
import ItFlag from './flags/ItFlag'
import {useStyles} from './Styles'

const StyledMenu = withStyles((theme) => ({
  paper: {
    borderRadius: theme.spacing(0),
    boxShadow: `0 8px 16px -4px ${fade(theme.palette.common.white, 0.16)}`,
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(0),
    textAlign: 'left',
    '& .MuiMenu-list': {
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      border: `1px solid ${theme.palette.grey[300]}`
    }
  }
}))((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center'
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center'
    }}
    {...props}
  />
))
const LanguageSwitcher = () => {
  const classes = useStyles()
  const router = useRouter()
  const {locale} = router
  const [anchorEl, setAnchorEl] = React.useState(null)
  const isMenuOpen = Boolean(anchorEl)
  const menuId = 'header-language-menu'

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleMenuClose = () => {
    setAnchorEl(null)
  }
  const changeLanguage = (e) => {
    const locale = e
    router.push(router.pathname, router.asPath, {locale})
    handleMenuClose()
  }

  return (
    <>
      <IconButton
        edge="end"
        aria-label={'language switcher'}
        aria-controls={menuId}
        aria-haspopup="true"
        className={classes.actionMenuButton}
        onClick={handleMenuOpen}
        color="inherit"
      >
        {locale}
        <ArrowDropDownIcon color='inherit'/>
      </IconButton>
      <StyledMenu
        id={menuId}
        anchorEl={anchorEl}
        keepMounted
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <Button onClick={() => changeLanguage('de')} className={classes.buttonAction}><DeFlag/> de </Button>
        <Button onClick={() => changeLanguage('en')} className={classes.buttonAction}><EnFlag/> en </Button>
        <Button onClick={() => changeLanguage('es')} className={classes.buttonAction}><EsFlag/> es </Button>
        <Button onClick={() => changeLanguage('fr')} className={classes.buttonAction}><FrFlag/> fr </Button>
        <Button onClick={() => changeLanguage('it')} className={classes.buttonAction}><ItFlag/> it </Button>
      </StyledMenu>
    </>
  )
}

export default LanguageSwitcher
