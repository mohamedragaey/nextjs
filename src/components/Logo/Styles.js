import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  logo: {
    display: 'inline-block',
    '& a': {
      display: 'flex',
      flex: '0 0 auto',
      width: 46,
      height: 46
    }
  }
}))
