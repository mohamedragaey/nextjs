import {makeStyles} from '@material-ui/core/styles'
import {basierBold, basierRegular} from '../../../utils/Fonts'

export const useStyles = makeStyles((theme) => ({
  theProblemWrapper: {
    background: '#f4f6f9',
    padding: theme.spacing(14, 0),
    boxShadow: `inset 0 0 20px 0px #e6e6e6`,
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(6, 0, 2)
    }
  },
  theProblemContent: {
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing(5)
    },
    [theme.breakpoints.up('sm')]: {
      paddingRight: theme.spacing(5)
    }
  },
  theProblemTitleHint: {
    fontFamily: basierBold,
    fontSize: theme.typography.pxToRem(12),
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 0.92,
    letterSpacing: 0,
    color: '#4fb783',
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(2.5)
  },
  theProblemTitle: {
    fontFamily: basierBold,
    fontSize: theme.typography.pxToRem(30),
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 1.2,
    letterSpacing: 0,
    color: '#20262d',
    margin: theme.spacing(0)
  },
  theProblemDescription: {
    fontFamily: basierRegular,
    fontSize: theme.typography.pxToRem(16),
    lineHeight: 1.38,
    letterSpacing: 0,
    color: '#516375',
    marginTop: theme.spacing(3),
    maxWidth: 418
  },
  theProblemLink: {
    '&.MuiButton-text': {
      textTransform: 'initial',
      padding: theme.spacing(0),
      fontFamily: basierBold,
      fontSize: theme.typography.pxToRem(14),
      fontWeight: theme.typography.fontWeightBold,
      lineHeight: 1.71,
      letterSpacing: 0,
      color: '#516375',
      display: 'inline-flex',
      textDecoration: 'none',
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
    }
  },
  theProblemChartWrapper: {
    maxWidth: '100%',
    '& svg': {
      maxWidth: '100%',
      height: '100%'
    }
  }
}))
