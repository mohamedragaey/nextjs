import {makeStyles} from '@material-ui/core/styles'
import {basierBold, basierRegular} from '../../../utils/Fonts'

export const useStyles = makeStyles((theme) => ({
  introWrapper: {
    background: theme.palette.common.white,
    padding: theme.spacing(21, 0, 15.75),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(10, 0, 6)
    }
  },
  introContent: {
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing(5)
    },
    [theme.breakpoints.up('md')]: {
      paddingRight: theme.spacing(11.25)
    }
  },
  introTitle: {
    fontFamily: basierBold,
    fontSize: theme.typography.pxToRem(48),
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 1.08,
    letterSpacing: -0.8,
    color: '#20262d',
    margin: theme.spacing(0)
  },
  introDescription: {
    fontFamily: basierRegular,
    fontSize: theme.typography.pxToRem(20),
    lineHeight: 1.2,
    color: '#516375',
    marginTop: theme.spacing(3)
  },
  introLink: {
    '&.MuiButton-text': {
      textTransform: 'initial',
      fontFamily: basierBold,
      fontSize: theme.typography.pxToRem(18),
      fontWeight: theme.typography.fontWeightBold,
      lineHeight: 1,
      letterSpacing: 0,
      color: theme.palette.common.white,
      display: 'inline-flex',
      textDecoration: 'none',
      background: '#151719',
      border: `solid 1px #f8f8f8`,
      borderRadius: theme.spacing(2),
      padding: theme.spacing(2.25, 5.775),
      boxShadow: `0 1px 8px 0 #e4e4e4`,
      '&:hover, &:focus': {
        color: theme.palette.primary.light
      }
    }
  },
  introChart: {}
}))
