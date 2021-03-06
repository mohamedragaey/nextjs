import {makeStyles} from '@material-ui/core/styles'
import {basierBold, basierRegular} from '../../../utils/Fonts'

export const useStyles = makeStyles((theme) => ({
  fCAApprovedAdvisorsWrapper: {
    background: '#f4f6f9',
    padding: theme.spacing(14, 0),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(6, 0)
    }
  },
  fCAApprovedAdvisorsContent: {
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
  fCAApprovedAdvisorsTitleHint: {
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
  fCAApprovedAdvisorsTitle: {
    fontFamily: basierBold,
    fontSize: theme.typography.pxToRem(30),
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 1.2,
    letterSpacing: 0,
    color: '#20262d',
    margin: theme.spacing(0)
  },
  fCAApprovedAdvisorsDescription: {
    fontFamily: basierRegular,
    fontSize: theme.typography.pxToRem(16),
    lineHeight: 1.38,
    letterSpacing: 0,
    color: '#516375',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
  },
  fCAApprovedAdvisorsLink: {
    '&.MuiButton-text': {
      textTransform: 'initial',
      display: 'inline-flex',
      alignItems: 'center',
      borderRadius: theme.spacing(2),
      backgroundColor: '#151719',
      fontFamily: basierBold,
      fontSize: theme.typography.pxToRem(14),
      fontWeight: theme.typography.fontWeightBold,
      lineHeight: 1.29,
      letterSpacing: 0,
      textAlign: 'center',
      color: theme.palette.common.white,
      padding: theme.spacing(1, 2.5),
      textDecoration: 'none',
      marginTop: theme.spacing(0),
      zIndex: 1,
      position: 'relative',
      '& svg': {
        marginLeft: theme.spacing(1.25),
        transition: `all 0.3s ease-in-out`,
        '& g': {
          stroke: theme.palette.common.white
        }
      },
      '&:hover,&:focus': {
        color: theme.palette.primary.light,
        '& svg g': {
          stroke: theme.palette.primary.light
        }
      }
    }
  },
  fCAApprovedAdvisorsColumnWrapper: {
    [theme.breakpoints.up('md')]: {
      paddingRight: theme.spacing(6)
    }
  },
  fCAApprovedAdvisorsColumnLink: {
    fontFamily: basierBold,
    fontSize: theme.typography.pxToRem(14),
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 1.71,
    letterSpacing: 0,
    color: theme.palette.primary.medium,
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    marginTop: theme.spacing(2),
    '& svg': {
      marginLeft: theme.spacing(1.1),
      transition: `all 0.3s ease-in-out`,
      '& g': {
        stroke: theme.palette.primary.medium
      }
    },
    '&:hover,&:focus': {
      color: theme.palette.primary.main,
      '& svg g': {
        stroke: theme.palette.primary.main
      }
    }
  },
  fCAApprovedAdvisorsColumnButton: {
    '&.MuiButton-text': {
      textTransform: 'initial',
      padding: theme.spacing(0),
      fontFamily: basierBold,
      fontSize: theme.typography.pxToRem(14),
      fontWeight: theme.typography.fontWeightBold,
      lineHeight: 1.71,
      letterSpacing: 0,
      color: theme.palette.primary.medium,
      display: 'inline-flex',
      textDecoration: 'none',
      marginTop: theme.spacing(2),
      '& svg': {
        marginLeft: theme.spacing(1.1),
        transition: `all 0.3s ease-in-out`,
        '& g': {
          stroke: theme.palette.primary.medium
        }
      },
      '&:hover,&:focus': {
        color: theme.palette.primary.main,
        '& svg g': {
          stroke: theme.palette.primary.main
        }
      }
    }
  },
  fCAApprovedAdvisorsChart: {
    '& img': {
      [theme.breakpoints.up('lg')]: {
        width: 800
      }
    },
    [theme.breakpoints.down('sm')]: {
      order: 1
    }
  }
}))
