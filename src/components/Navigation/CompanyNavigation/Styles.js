import {makeStyles} from '@material-ui/core/styles'
import {basierBold} from '../../../utils/Fonts'

export const useStyles = makeStyles((theme) => ({
  companyNavigation: {
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
      letterSpacing: -0.3,
      fontFamily: basierBold,
      '&.active': {
        color: theme.palette.primary.light
      },
      '&:hover, &:focus': {
        opacity: 0.75,
        color: theme.palette.primary.light,
        backgroundColor: 'transparent'
      }
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      textAlign: 'center',
      alignItems: 'center'
    }
  }
}))
