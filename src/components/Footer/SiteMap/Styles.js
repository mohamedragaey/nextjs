import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  siteMapWrapper: {
    display: 'flex',
    justifyContent: 'center'
  },
  siteMapColumn: {
    '& nav': {
      display: 'flex',
      flexWrap: 'wrap'
    },
    [theme.breakpoints.down('xs')]: {
      paddingBottom: theme.spacing(4)
    }
  },
  siteMapColumnTitle: {
    textAlign: 'left',
    margin: 0,
    paddingBottom: theme.spacing(1),
    fontSize: theme.typography.pxToRem(20),
    position: 'relative',
    '&:after': {
      content: '""',
      height: 4,
      width: 25,
      position: 'absolute',
      bottom: 0,
      left: 0,
      background: theme.palette.common.white
    }
  }
}))
