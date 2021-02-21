import {makeStyles} from '@material-ui/core/styles'
import {basierBold} from '../../utils/Fonts'

export const useStyles = makeStyles((theme) => ({
  verifyPageContentWrapper: {
    paddingTop: theme.spacing(14),
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: theme.palette.text.primary,
    fontFamily: basierBold,
    fontSize: theme.typography.pxToRem(24),
    '& .MuiSvgIcon-root': {
      color: theme.palette.primary.main,
      fontSize: theme.typography.pxToRem(40),
      borderRadius: '50%',
      border: `3px solid`,
      padding: theme.spacing(1),
      width: 70,
      height: 70,
      '&.MuiSvgIcon-colorError': {
        color: theme.palette.error.main
      }
    }
  }
}))
