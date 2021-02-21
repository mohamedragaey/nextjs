import {makeStyles} from '@material-ui/core/styles'
import {basierBold} from '../../../utils/Fonts'

export const useStyles = makeStyles((theme) => ({
  connectedWithTheBestWrapper: {
    padding: theme.spacing(6, 0),
    backgroundColor: '#f4f6f9',
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(6, 0, 2)
    }
  },
  connectedWithTheBestTitleHint: {
    fontFamily: basierBold,
    fontSize: theme.typography.pxToRem(12),
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 0.92,
    letterSpacing: 0,
    color: '#4fb783',
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(1.5),
    textTransform: 'uppercase'
  },
  connectedWithTheBestTitle: {
    fontFamily: basierBold,
    fontSize: theme.typography.pxToRem(30),
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 1.2,
    letterSpacing: 0,
    color: '#20262d',
    margin: theme.spacing(0),
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.pxToRem(20)
    }
  },
  connectedWithTheBestClients: {
    marginTop: theme.spacing(3.5),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    '& .lazy-load-image-background.blur.lazy-load-image-loaded': {
      flex: '0 0 auto',
      [theme.breakpoints.down('xs')]: {
        width: '50% !important',
        margin: theme.spacing(1, 'auto'),
        textAlign: 'center'
      },
      '&:not(:last-of-type) > img': {
        marginRight: theme.spacing(0),
        height: 'inherit',
        objectFit: 'contain'
      }
    }
  }
}))
