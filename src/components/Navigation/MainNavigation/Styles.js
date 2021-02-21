import {makeStyles} from '@material-ui/core/styles'
import {basierBold} from '../../../utils/Fonts'

export const useStyles = makeStyles((theme) => ({
  mainNavigation: {
    '& a': {
      fontSize: theme.typography.pxToRem(16),
      color: theme.palette.common.white,
      padding: theme.spacing(1.75, 3.75),
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      fontWeight: theme.typography.fontWeightBold,
      textTransform: 'capitalize',
      textDecoration: 'none',
      fontFamily: basierBold,
      letterSpacing: -0.3,
      '&.active': {
        color: theme.palette.primary.light
      },
      '&:hover, &:focus': {
        opacity: 0.75,
        color: theme.palette.primary.light,
        backgroundColor: 'transparent'
      }
    },
    '.shrink &': {
      '& a': {
        color: theme.palette.common.white,
        '&.active': {
          color: theme.palette.primary.light
        },
        '&:hover, &:focus': {
          color: theme.palette.primary.light
        }
      }
    },
    '.inverseHeader &': {
      '& a': {
        color: '#2b3c4d',
        '&.active': {
          color: theme.palette.primary.main
        },
        '&:hover, &:focus': {
          color: theme.palette.primary.main
        }
      }
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center'
    }
  }
}))
