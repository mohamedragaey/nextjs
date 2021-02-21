import {makeStyles} from '@material-ui/core/styles'
import {basierBold, basierRegular} from '../../../utils/Fonts'

export const useStyles = makeStyles((theme) => ({
  clubsBannerWrapper: {
    position: 'relative',
    overflow: 'hidden',
    '& picture': {
      display: 'flex !important'
    },
    '& img': {
      width: '100vw',
      maxWidth: '100%',
      objectFit: 'cover',
      height: '100vh',
      maxHeight: 830,
      [theme.breakpoints.down('sm')]: {
        minHeight: 885,
        maxHeight: 'none',
        height: 'auto'
      }
    }
  },
  clubsBannerCaptionContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  clubsBannerCaption: {
    position: 'absolute',
    top: '50%',
    left: 130,
    zIndex: 4,
    transform: 'translate(0,-50%)',
    [theme.breakpoints.down('sm')]: {
      left: 24,
      top: 124,
      transform: 'translate(0,0)'
    }
  },
  clubsBannerCaptionTitle: {
    fontFamily: basierBold,
    fontSize: theme.typography.pxToRem(80),
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 1.13,
    letterSpacing: 0,
    color: theme.palette.common.white,
    margin: theme.spacing(0),
    [theme.breakpoints.down('md')]: {
      fontSize: theme.typography.pxToRem(50)
    }
  },
  clubsBannerCaptionDescription: {
    fontFamily: basierRegular,
    fontSize: theme.typography.pxToRem(20),
    lineHeight: 1.2,
    letterSpacing: 0,
    color: theme.palette.common.white,
    marginTop: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      marginRight: theme.spacing(3)
    }
  },
  clubsBannerCaptionActions: {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(3),
    flexWrap: 'wrap'
  },
  clubsBannerCaptionActionsButton: {
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
      marginRight: theme.spacing(3.5),
      [theme.breakpoints.down('md')]: {
        padding: theme.spacing(2.125, 2.875),
        marginRight: theme.spacing(2)
      }
    }
  },
  clubsBannerCaptionActionsButtonOutlined: {
    '&.MuiButton-root': {
      borderRadius: theme.spacing(2),
      backgroundColor: 'transparent',
      fontSize: theme.typography.pxToRem(18),
      fontWeight: theme.typography.fontWeightBold,
      lineHeight: 1,
      letterSpacing: 0,
      textAlign: 'center',
      color: theme.palette.common.white,
      borderColor: theme.palette.common.white,
      textTransform: 'inherit',
      padding: theme.spacing(2, 5),
      marginRight: theme.spacing(3.5),
      [theme.breakpoints.down('md')]: {
        padding: theme.spacing(2.125, 2.875),
        marginRight: theme.spacing(0)
      }
    }
  }
}))
