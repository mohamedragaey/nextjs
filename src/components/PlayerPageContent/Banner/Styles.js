import {makeStyles} from '@material-ui/core/styles'
import {basierBold, basierRegular} from '../../../utils/Fonts'

export const useStyles = makeStyles((theme) => ({
  bannerWrapper: {
    position: 'relative',
    overflow: 'hidden',
    '& picture': {
      display: 'flex',
      [theme.breakpoints.down('sm')]: {
        minHeight: 600,
        maxHeight: 830
      }
    },
    '& img': {
      width: '100vw',
      maxWidth: '100%',
      objectFit: 'cover',
      height: '100vh',
      maxHeight: '100vh',
      [theme.breakpoints.down('sm')]: {
        minHeight: 600,
        maxHeight: 830
      }
    }
  },
  bannerCaptionContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  bannerCaption: {
    position: 'absolute',
    top: '50%',
    left: 130,
    zIndex: 4,
    transform: 'translate(0,-50%)',
    [theme.breakpoints.down('sm')]: {
      left: 24
    }
  },
  bannerCaptionTitle: {
    fontFamily: basierBold,
    fontSize: theme.typography.pxToRem(80),
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 1.13,
    letterSpacing: 0,
    color: theme.palette.common.white,
    margin: theme.spacing(0),
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.pxToRem(50)
    }
  },
  bannerCaptionDescription: {
    fontFamily: basierRegular,
    fontSize: theme.typography.pxToRem(20),
    lineHeight: 1.2,
    letterSpacing: 0,
    color: theme.palette.common.white,
    marginTop: theme.spacing(3),
    maxWidth: 420,
    [theme.breakpoints.down('xs')]: {
      marginRight: theme.spacing(3)
    }
  },
  bannerCaptionActions: {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(3),
    flexWrap: 'wrap'
  },
  bannerCaptionActionsButton: {
    '&.MuiButton-root': {
      borderRadius: theme.spacing(2),
      backgroundColor: theme.palette.common.white,
      fontSize: theme.typography.pxToRem(18),
      fontWeight: theme.typography.fontWeightBold,
      lineHeight: 1,
      letterSpacing: 0,
      textAlign: 'center',
      color: theme.palette.text.primary,
      textTransform: 'inherit',
      padding: theme.spacing(2, 5),
      marginRight: theme.spacing(3.5)
    }
  },
  bannerCaptionActionsLink: {
    fontFamily: basierBold,
    fontSize: theme.typography.pxToRem(14),
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 1.71,
    letterSpacing: 0,
    color: '#e4e4e4',
    textDecoration: 'none',
    '& svg': {
      marginLeft: theme.spacing(1.1),
      transition: `all 0.3s ease-in-out`,
      '& g': {
        stroke: '#e4e4e4'
      }
    },
    '&:hover, &:focus': {
      color: theme.palette.primary.light,
      '& svg g': {
        stroke: theme.palette.primary.light
      }
    }
  }
}))
