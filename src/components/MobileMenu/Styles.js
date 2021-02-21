import {makeStyles} from '@material-ui/core/styles'
import {basierRegular} from '../../utils/Fonts'

export const useStyles = makeStyles((theme) => ({
  languageSwitcherWrapper: {
    display: 'flex',
    alignItems: 'center'
  },
  menuButton: {
    marginLeft: theme.spacing(2),
    float: 'left',
    color: theme.palette.common.white,
    '& svg': {
      fontSize: theme.typography.pxToRem(32),
      fontWeight: 600
    },
    '&:hover, &:focus': {
      cursor: 'pointer',
      outline: 'none'
    },
    '.inverseHeader &': {
      color: '#2b3c4d',
      '&:hover, &:focus': {
        color: theme.palette.primary.main
      }
    },
    '.shrink &': {
      color: theme.palette.common.white,
      '&:hover, &:focus': {
        color: theme.palette.primary.light
      }
    }
  },
  navigationDrawerWrapper: {
    '& .MuiPaper-root': {
      background: theme.palette.text.dark,
      left: 0,
      right: 0,
      bottom: 0
    }
  },
  navigationDrawer: {
    padding: theme.spacing(2.5, 0),
    height: '100%',
    position: 'relative',
    textAlign: 'center',
    '& nav': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: theme.spacing(2),
      '& a': {
        fontSize: theme.typography.pxToRem(16),
        margin: theme.spacing(0),
        padding: theme.spacing(2.25, 1),
        fontWeight: theme.typography.fontWeightRegular,
        fontFamily: basierRegular
      }
    },
    '& img': {
      width: 55
    }
  },
  menuCloseButton: {
    marginTop: theme.spacing(1) + 'px !important',
    position: 'absolute !important',
    top: 0,
    right: theme.spacing(2),
    color: theme.palette.common.white,
    '& svg': {
      fontSize: theme.typography.pxToRem(42),
      fontWeight: theme.typography.fontWeightRegular

    },
    '&:hover, &:focus': {
      cursor: 'pointer',
      color: theme.palette.primary.light,
      outline: 'none'
    }
  }
}))
