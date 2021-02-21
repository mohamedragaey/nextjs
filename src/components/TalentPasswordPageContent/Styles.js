import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  passwordFormWrapper: {
    height: '100%',
    padding: theme.spacing(21, 0, 15.75),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(10, 0, 5)
    }
  },
  passwordFormTitle: {
    textAlign: 'center',
    textTransform: 'capitalize'
  },
  passwordForm: {
    display: 'flex',
    flexDirection: 'column'
  },
  passwordFormSubmitWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(2)
  },
  passwordFormSubmit: {
    '&.MuiButton-root': {
      color: theme.palette.common.white,
      padding: theme.spacing(1, 5)
    }
  },
  fullHeight: {
    height: '100%'
  }
}))
