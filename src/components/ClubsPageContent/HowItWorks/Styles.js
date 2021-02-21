import {makeStyles} from '@material-ui/core/styles'
import {basierBold, basierRegular} from '../../../utils/Fonts'

export const useStyles = makeStyles((theme) => ({
  clubsHowItWorksWrapper: {
    background: theme.palette.common.white,
    padding: theme.spacing(14, 0),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(6, 0)
    }
  },
  clubsHowItWorksTitleHint: {
    fontFamily: basierBold,
    fontSize: theme.typography.pxToRem(12),
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 0.92,
    letterSpacing: 0,
    color: '#4fb783',
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(1.5)
  },
  clubsHowItWorksTitle: {
    fontFamily: basierBold,
    fontSize: theme.typography.pxToRem(30),
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 1.2,
    letterSpacing: 0,
    color: '#20262d',
    margin: theme.spacing(0)
  },
  clubsHowItWorksDescription: {
    fontFamily: basierRegular,
    fontSize: theme.typography.pxToRem(16),
    lineHeight: 1.38,
    letterSpacing: 0,
    color: '#516375',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(0)
    }
  },
  clubsHowItWorksLink: {
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
    marginTop: theme.spacing(4.5),
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
}))
