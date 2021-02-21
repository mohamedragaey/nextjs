import {makeStyles} from '@material-ui/core/styles'
import {basierBold, basierRegular} from '../../../utils/Fonts'

export const useStyles = makeStyles((theme) => ({
  ourFormulaWrapper: {
    background: '#151719',
    padding: theme.spacing(10, 0),
    boxShadow: `0 3px 67px 0 rgba(0, 0, 0, 0.4)`,
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(6, 0)
    }
  },
  ourFormulaGridContainer: {
    position: 'relative',
    justifyContent: 'flex-end'
  },
  ourFormulaContent: {
    [theme.breakpoints.up('lg')]: {
      flex: '0 0 auto'
    },
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing(5)
    }
  },
  ourFormulaTitleHint: {
    fontFamily: basierBold,
    fontSize: theme.typography.pxToRem(12),
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 0.92,
    letterSpacing: 0,
    color: '#4fb783',
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(1.25),
    textTransform: 'uppercase'
  },
  ourFormulaTitle: {
    fontFamily: basierBold,
    fontSize: theme.typography.pxToRem(30),
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 1.2,
    letterSpacing: 0,
    color: theme.palette.common.white,
    margin: theme.spacing(0)
  },
  ourFormulaDescription: {
    fontFamily: basierRegular,
    fontSize: theme.typography.pxToRem(20),
    lineHeight: 1.38,
    letterSpacing: 0,
    color: '#e4e4e4',
    marginTop: theme.spacing(3),
    maxWidth: 400
  },
  ourFormulaLink: {
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
  ourFormulaChart: {}
}))
