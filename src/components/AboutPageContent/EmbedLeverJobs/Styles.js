import {makeStyles} from '@material-ui/core/styles'
import {basierBold} from '../../../utils/Fonts'

export const useStyles = makeStyles((theme) => ({
  embedLeverJobsWrapper: {
    textAlign: 'center',
    padding: theme.spacing(14, 0),
    backgroundColor: theme.palette.common.black,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(11, 0)
    },
    '& #lever-jobs-container ul': {
      '& .lever-team-title': {
        textAlign: 'left',
        color: theme.palette.common.white
      },
      '& li.lever-job': {
        padding: theme.spacing(1),
        transition: 'all 0.3s ease-in-out'
      },
      '& .lever-job-title': {
        color: theme.palette.common.white,
        textDecoration: 'none',
        flex: '1 0 auto',
        '&:hover': {
          color: theme.palette.primary.main
        }
      },
      '& .lever-job-tag': {
        flex: '0 0 auto',
        color: theme.palette.common.white
      }
    }
  },
  embedLeverJobsTitle: {
    fontFamily: basierBold,
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 1,
    textAlign: 'center',
    color: theme.palette.common.white,
    margin: theme.spacing(0),
    marginBottom: theme.spacing(0)
  },
  embedLeverJobsSectionTitle: {
    fontFamily: basierBold,
    fontSize: theme.typography.pxToRem(30),
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 1.2,
    letterSpacing: 0,
    color: theme.palette.common.white,
    marginTop: theme.spacing(0)
  }
}))
