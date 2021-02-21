import {makeStyles} from '@material-ui/core/styles'
import {basierBold, basierRegular} from '../../../utils/Fonts'

export const useStyles = makeStyles((theme) => ({
  ourFocusWrapper: {
    background: '#f4f6f9',
    padding: theme.spacing(6.25, 0),
    boxShadow: `0 3px 67px 0 rgba(0, 0, 0, 0.4)`,
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(6, 0, 0)
    }
  },
  ourFocusContent: {
    [theme.breakpoints.down('sm')]: {
      order: -1,
      paddingBottom: theme.spacing(5)
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(10)
    }
  },
  ourFocusTitleHint: {
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
  ourFocusTitle: {
    fontFamily: basierBold,
    fontSize: theme.typography.pxToRem(30),
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 1.2,
    letterSpacing: 0,
    color: '#20262d',
    margin: theme.spacing(0)
  },
  ourFocusDescription: {
    fontFamily: basierRegular,
    fontSize: theme.typography.pxToRem(20),
    lineHeight: 1.38,
    letterSpacing: 0,
    color: '#516375',
    marginTop: theme.spacing(3)
  },
  ourFocusLink: {
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
  ourFocusChart: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    },
    '& picture': {
      maxWidth: '100%',
      borderRadius: theme.spacing(2.5),
      overflow: 'hidden',
      [theme.breakpoints.down('sm')]: {
        maxWidth: '100vw',
        width: 'auto !important',
        marginRight: theme.spacing(-2),
        marginLeft: theme.spacing(-2)
      }
    }
  }
}))
