import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  socialMediaWrapper: {
    display: 'flex',
    alignItems: 'center',
    '& a': {
      display: 'flex',
      color: theme.palette.common.white,
      padding: theme.spacing(0, 1),
      flexWrap: 'wrap',
      '& .MuiSvgIcon-root': {
        fontSize: theme.typography.pxToRem(24)
      },
      '&:hover,&:focus': {
        color: theme.palette.primary.main
      }
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center'
    }
  }
}))
