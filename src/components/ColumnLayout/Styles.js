import {makeStyles} from '@material-ui/core/styles'
import {basierBold, basierRegular} from '../../utils/Fonts'

export const useStyles = makeStyles((theme) => ({
  columnLayoutWrapper: {
    '& picture': {
      height: 100,
      display: 'flex !important',
      alignItems: 'flex-end'
    },
    '&.inverted': {
      [theme.breakpoints.up('md')]: {
        paddingRight: theme.spacing(6.5)
      },
      '& picture': {
        height: 90
      },
      '& $columnLayoutTitle': {
        color: theme.palette.common.white,
        fontSize: theme.typography.pxToRem(16)
      },
      '& $columnLayoutDescription': {
        color: theme.palette.common.white,
        fontSize: theme.typography.pxToRem(14)
      }
    },
    '&.small': {
      [theme.breakpoints.up('md')]: {
        paddingRight: theme.spacing(0)
      },
      '& picture': {
        height: 90
      },
      '& $columnLayoutTitle': {
        fontSize: theme.typography.pxToRem(16)
      },
      '& $columnLayoutDescription': {
        fontSize: theme.typography.pxToRem(14)
      }
    },
    [theme.breakpoints.up('md')]: {
      paddingRight: theme.spacing(6.5)
    },
    [theme.breakpoints.up('lg')]: {
      paddingRight: theme.spacing(8.5)
    }
  },
  columnLayoutTitle: {
    fontFamily: basierBold,
    fontSize: theme.typography.pxToRem(22),
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 1.18,
    letterSpacing: 0,
    color: '#20262d',
    marginTop: theme.spacing(2.2),
    margin: theme.spacing(0)
  },
  columnLayoutDescription: {
    fontFamily: basierRegular,
    fontSize: theme.typography.pxToRem(14),
    lineHeight: 1.43,
    letterSpacing: 0,
    color: '#516375',
    marginTop: theme.spacing(1.2),
    marginBottom: theme.spacing(0)
  }
}))
