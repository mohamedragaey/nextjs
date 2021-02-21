import {makeStyles} from '@material-ui/core/styles'
import {basierBold, basierRegular} from '../../../utils/Fonts'

export const useStyles = makeStyles((theme) => ({
  weAreInYourCornerWrapper: {
    background: '#f4f6f9',
    padding: theme.spacing(14, 0),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(6, 0)
    }
  },
  weAreInYourCornerContent: {
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing(5)
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(5)
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: theme.spacing(15)
    }
  },
  weAreInYourCornerTitleHint: {
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
  weAreInYourCornerTitle: {
    fontFamily: basierBold,
    fontSize: theme.typography.pxToRem(30),
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 1.2,
    letterSpacing: 0,
    color: '#20262d',
    margin: theme.spacing(0)
  },
  weAreInYourCornerDescription: {
    fontFamily: basierRegular,
    fontSize: theme.typography.pxToRem(20),
    lineHeight: 1.38,
    letterSpacing: 0,
    color: '#516375',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
  },
  weAreInYourCornerLink: {
    fontFamily: basierBold,
    fontSize: theme.typography.pxToRem(14),
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 1.71,
    letterSpacing: 0,
    color: '#516375',
    textDecoration: 'none',
    marginTop: theme.spacing(0),
    '& svg': {
      marginLeft: theme.spacing(1.1),
      transition: `all 0.3s ease-in-out`
    },
    '&:hover, &:focus': {
      color: theme.palette.primary.main,
      '& svg g': {
        stroke: theme.palette.primary.main
      }
    }
  },
  weAreInYourCornerColumnWrapper: {
    [theme.breakpoints.up('md')]: {
      paddingRight: theme.spacing(6)
    }
  },
  weAreInYourCornerChart: {
    [theme.breakpoints.down('sm')]: {
      order: 1
    }
  }
}))
