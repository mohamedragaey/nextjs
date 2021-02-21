import {makeStyles} from '@material-ui/core/styles'
import {basierBold} from '../../utils/Fonts'

export const useStyles = makeStyles((theme) => ({
  interestedInJoiningWrapper: {
    textAlign: 'center',
    padding: theme.spacing(14, 0),
    boxShadow: `0 3px 67px 0 rgba(137, 156, 197, 0.4)`,
    backgroundColor: theme.palette.common.white,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(6, 0)
    }
  },
  interestedInJoiningTitle: {
    fontFamily: basierBold,
    fontSize: theme.typography.pxToRem(30),
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 1.2,
    textAlign: 'center',
    color: '#20262d',
    margin: theme.spacing(0),
    marginBottom: theme.spacing(3)
  },
  interestedInJoiningButton: {
    '&.MuiButton-root': {
      borderRadius: 16,
      backgroundColor: '#1a1b1e',
      boxShadow: `0 1px 8px 0 #e4e4e4`,
      border: `1px solid #f8f8f8`,
      fontFamily: basierBold,
      fontSize: theme.typography.pxToRem(18),
      fontWeight: theme.typography.fontWeightBold,
      lineHeight: 1,
      letterSpacing: 0,
      textAlign: 'center',
      color: theme.palette.common.white,
      textTransform: 'inherit',
      padding: theme.spacing(2, 5.75)
    }
  }
}))
