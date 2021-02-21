import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  footerWrapper: {
    background: '#151719',
    color: theme.palette.common.white,
    padding: theme.spacing(6, 0),
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      padding: theme.spacing(2, 0)
    }
  },
  footerCopyRights: {
    textAlign: 'left',
    paddingTop: theme.spacing(2),
    fontSize: theme.typography.pxToRem(12),
    opacity: 0.78,
    '& a': {
      color: theme.palette.common.white,
      padding: theme.spacing(0, 1),
      textDecoration: 'none'
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      position: 'relative',
      paddingTop: theme.spacing(3),
      marginTop: theme.spacing(3),
      '&:after': {
        content: '""',
        height: 2,
        width: 150,
        left: 0,
        right: 0,
        top: 0,
        margin: 'auto',
        position: 'absolute',
        background: theme.palette.common.white
      }
    }
  },
  flexBaseAuto: {
    [theme.breakpoints.up('md')]: {
      flexBasis: 'auto',
      padding: '0 !important'
    }
  }
}))
