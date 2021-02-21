import {makeStyles} from '@material-ui/core/styles'
import {basierBold, basierRegular} from '../../../utils/Fonts'

export const useStyles = makeStyles((theme) => ({
  getInTouchWrapper: {
    textAlign: 'center',
    padding: theme.spacing(15, 0),
    background: theme.palette.common.white
  },
  getInTouchTitle: {
    fontFamily: basierBold,
    fontSize: theme.typography.pxToRem(48),
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 1.08,
    letterSpacing: -0.8,
    textAlign: 'center',
    color: '#20262d',
    margin: theme.spacing(0)
  },
  getInTouchDescription: {
    fontFamily: basierRegular,
    fontSize: theme.typography.pxToRem(16),
    lineHeight: 1.38,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#516375',
    margin: theme.spacing(2, 0, 2.75)
  },
  getInTouchButton: {
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
      padding: theme.spacing(2, 5)
    }
  }
}))
