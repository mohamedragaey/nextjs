import {makeStyles} from '@material-ui/core/styles'
import {basierBold} from '../../../utils/Fonts'

export const useStyles = makeStyles((theme) => ({
  ourKeyValuesWrapper: {
    background: '#151719',
    boxShadow: `0 3px 67px 0 rgba(137, 156, 197, 0.4)`,
    padding: theme.spacing(14, 0),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(6, 0)
    }
  },
  ourKeyValuesTitleHint: {
    fontFamily: basierBold,
    fontSize: theme.typography.pxToRem(12),
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 0.92,
    letterSpacing: 0,
    color: '#4effbf',
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(1.5),
    textTransform: 'uppercase'
  },
  ourKeyValuesTitle: {
    fontFamily: basierBold,
    fontSize: theme.typography.pxToRem(30),
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 1.2,
    letterSpacing: 0,
    color: theme.palette.common.white,
    margin: theme.spacing(0)
  }
}))
