import {makeStyles} from '@material-ui/core/styles'
import {fade} from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  header: {
    background: 'transparent',
    position: 'fixed',
    transition: 'all 0.5s ease-in-out',
    '&.inverseHeader': {},
    '&.shrink': {
      transition: 'all 0.5s ease-in-out',
      background: theme.palette.common.black,
      '& $headerToolbar': {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1)
      }
    }
  },
  headerToolbar: {
    padding: theme.spacing(0),
    minHeight: theme.spacing(0),
    paddingTop: theme.spacing(5.75),
    paddingBottom: theme.spacing(1),
    transition: 'all 0.5s ease-in-out',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0),
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    }
  },
  headerMobileLogoWrapper: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%'
    }
  }
}))
