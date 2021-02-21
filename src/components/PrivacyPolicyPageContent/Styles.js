import {makeStyles} from '@material-ui/core/styles'
import {basierBold} from '../../utils/Fonts'

export const useStyles = makeStyles((theme) => ({
  privacyPolicyPageContentWrapper: {
    padding: theme.spacing(21, 0, 15.75),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(10, 0, 5)
    },
    '& ol': {
      paddingLeft: theme.spacing(3),
      '& ul': {
        listStyle: 'disc'
      },
      '& ol': {
        listStyle: 'lower-alpha',
        [theme.breakpoints.down('xs')]: {
          padding: theme.spacing(0)
        }
      }
    },
    '& .MuiTableContainer-root': {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4)
    }
  },
  privacyPolicyPageContentTitle: {
    fontFamily: basierBold,
    fontSize: theme.typography.pxToRem(40),
    marginTop: theme.spacing(0)
  },
  privacyPolicySection: {
    paddingBottom: theme.spacing(1)
  },
  sectionTitle: {}
}))
