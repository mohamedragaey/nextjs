import {makeStyles} from '@material-ui/core/styles'
import {basierBold} from '../../utils/Fonts'

export const useStyles = makeStyles((theme) => ({
  getInTouchButtonWrapper: {},
  getInTouchButton: {
    '&.MuiButton-root': {
      borderRadius: theme.spacing(1.5),
      border: `solid 2px ${theme.palette.common.white}`,
      opacity: 0.9,
      fontFamily: basierBold,
      fontSize: theme.typography.pxToRem(16),
      fontWeight: theme.typography.fontWeightBold,
      letterSpacing: -0.3,
      textAlign: 'center',
      color: theme.palette.common.white,
      textTransform: 'capitalize',
      padding: theme.spacing(1.6, 2.25),
      lineHeight: 1
    },
    '.shrink &': {
      '&.MuiButton-root': {
        color: theme.palette.common.white,
        border: `solid 2px ${theme.palette.common.white}`,
        '&:hover, &:focus': {
          color: theme.palette.primary.light,
          border: `solid 2px ${theme.palette.primary.light}`
        }
      }
    },
    '.inverseHeader &': {
      '&.MuiButton-root': {
        color: '#2b3c4d',
        border: `solid 2px #2b3c4d`,
        '&:hover, &:focus': {
          color: theme.palette.primary.main,
          border: `solid 2px ${theme.palette.primary.main}`
        }
      }
    }
  }
}))
