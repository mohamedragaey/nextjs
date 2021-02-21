import {makeStyles} from '@material-ui/core/styles'
import {basierBold, basierRegular} from '../../../utils/Fonts'

export const useStyles = makeStyles((theme) => ({
  clubsWeAreOnYourSideWrapper: {
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
  clubsWeAreOnYourSideContent: {
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing(5)
    },
    [theme.breakpoints.between('md', 'md')]: {
      paddingLeft: theme.spacing(12)
    }
  },
  clubsWeAreOnYourSideTitleHint: {
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
  clubsWeAreOnYourSideTitle: {
    fontFamily: basierBold,
    fontSize: theme.typography.pxToRem(30),
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 1.2,
    letterSpacing: 0,
    color: theme.palette.common.white,
    margin: theme.spacing(0)
  },
  clubsWeAreOnYourSideDescription: {
    fontFamily: basierRegular,
    fontSize: theme.typography.pxToRem(20),
    lineHeight: 1.38,
    letterSpacing: 0,
    color: '#e4e4e4',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      width: 427
    }
  },
  clubsWeAreOnYourSideLink: {
    fontFamily: basierBold,
    fontSize: theme.typography.pxToRem(14),
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 1.71,
    letterSpacing: 0,
    color: '#e4e4e4',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    '& svg': {
      marginLeft: theme.spacing(1.1),
      transition: `all 0.3s ease-in-out`,
      '& g': {
        stroke: theme.palette.common.white
      }
    },
    '&:hover,&:focus': {
      color: theme.palette.primary.main,
      '& svg g': {
        stroke: theme.palette.primary.main
      }
    }
  },
  clubsWeAreOnYourSideChart: {
    [theme.breakpoints.down('sm')]: {
      flex: '1 1 auto',
      display: 'flex',
      justifyContent: 'center'
    },
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      left: 0,
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
