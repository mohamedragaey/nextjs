/**
 * General Styles For The Layout
 * @type {function(*): {}}
 */
import {fade, makeStyles} from '@material-ui/core'
import {EnglishFont} from '../../utils/Fonts'

export const useStyles = makeStyles((theme) => ({
  '@global': {
    html: {height: '100%'},
    body: {
      height: '100%',
      backgroundColor: '#fcfcfa',
      whiteSpace: 'pre-line'
    },
    '#root': {
      height: '100%',
      whiteSpace: 'pre-line'
    },
    '#__next': {
      height: '100%'
    },
    'a': {
      transition: 'all 0.3s ease-in-out',
      '&:hover, &:focus': {
        color: theme.palette.action.hover
      }
    },
    'button': {
      fontFamily: EnglishFont,
      cursor: 'pointer',
      transition: 'all 0.3s ease-in-out',
      outline: 'none !important'
    },
    'img': {
      maxWidth: '100%',
      height: 'auto',
      display: 'inline-block'
    },
    'h1, h2, h3, h4, h5, h6': {
      fontFamily: EnglishFont,
      fontWeight: 'bold'
    },
    '.grecaptcha-badge': {
      visibility: 'hidden'
    },
    '.MuiDrawer-paper': {
      backgroundColor: theme.palette.common.black
    },
    '.MuiBackdrop-root': {
      backgroundColor: fade(theme.palette.common.black, 0.32),
      backdropFilter: 'blur(2px)'
    },
    '.MuiPaginationItem-page.Mui-selected': {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.main,
      '&:hover,&.Mui-focusVisible': {
        backgroundColor: theme.palette.primary.main
      }
    },
    '.MuiPaginationItem-page:hover': {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.main
    },
    '.MuiAutocomplete-option[data-focus="true"]': {
      color: theme.palette.common.white
    },
    '.lazy-load-image-background.blur': {
      filter: `blur(15px)`
    },
    '.lazy-load-image-background.blur.lazy-load-image-loaded': {
      filter: `blur(0)`,
      transition: `filter .3s`
    },
    '.lazy-load-image-background.blur > img': {
      opacity: 0
    },
    '.lazy-load-image-background.blur.lazy-load-image-loaded > img': {
      opacity: 1,
      transition: `opacity .3s`
    }
  },
  pageWrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  content: {
    flex: '1 1 auto',
    paddingTop: theme.spacing(0)
  }
}))
