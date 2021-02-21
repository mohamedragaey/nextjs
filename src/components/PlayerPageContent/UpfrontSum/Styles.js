import {makeStyles} from '@material-ui/core/styles'
import {basierBold, basierRegular} from '../../../utils/Fonts'

export const useStyles = makeStyles((theme) => ({
  upfrontSumWrapper: {
    zIndex: 1,
    background: '#151719',
    padding: theme.spacing(0, 0),
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    boxShadow: `0 3px 67px 0 rgba(0, 0, 0, 0.4)`,
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      paddingTop: theme.spacing(6)
    },
    [theme.breakpoints.up('md')]: {
      minHeight: 450
    },
    [theme.breakpoints.up('lg')]: {
      minHeight: 580
    }
  },
  upfrontSumContent: {
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing(5)
    },
    [theme.breakpoints.up('sm')]: {
      paddingRight: theme.spacing(10)
    }
  },
  upfrontSumTitleHint: {
    fontFamily: basierBold,
    fontSize: theme.typography.pxToRem(12),
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 0.92,
    letterSpacing: 0,
    color: '#4fb783',
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(1.5),
    textTransform: 'uppercase'
  },
  upfrontSumTitle: {
    fontFamily: basierBold,
    fontSize: theme.typography.pxToRem(30),
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 1.2,
    letterSpacing: 0,
    color: theme.palette.common.white,
    margin: theme.spacing(0)
  },
  upfrontSumDescription: {
    fontFamily: basierRegular,
    fontSize: theme.typography.pxToRem(16),
    lineHeight: 1.38,
    letterSpacing: 0,
    color: '#e4e4e4',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    maxWidth: 427
  },
  upfrontSumLink: {
    '&.MuiButton-text': {
      textTransform: 'initial',
      padding: theme.spacing(0),
      fontFamily: basierBold,
      fontSize: theme.typography.pxToRem(14),
      fontWeight: theme.typography.fontWeightBold,
      lineHeight: 1.71,
      letterSpacing: 0,
      color: '#e4e4e4',
      display: 'inline-flex',
      textDecoration: 'none',
      '& svg': {
        marginLeft: theme.spacing(1.1),
        transition: `all 0.3s ease-in-out`,
        '& g': {
          stroke: '#e4e4e4'
        }
      },
      '&:hover, &:focus': {
        color: theme.palette.primary.main,
        '& svg g': {
          stroke: theme.palette.primary.main
        }
      }
    }
  },
  upfrontSumChart: {
    [theme.breakpoints.down('sm')]: {
      flex: '1 1 auto',
      display: 'flex',
      justifyContent: 'center'
    },
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      right: 0,
      top: '50%',
      transform: 'translate(0,-50%)',
      maxWidth: 480
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: 640
    },
    [theme.breakpoints.up('xl')]: {
      maxWidth: 690
    }
  }
}))
