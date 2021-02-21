import {makeStyles} from '@material-ui/core/styles'
import {basierBold, basierRegular} from '../../../utils/Fonts'

export const useStyles = makeStyles((theme) => ({
  credTeamWrapper: {
    background: theme.palette.common.white,
    padding: theme.spacing(14, 0, 6),
    boxShadow: `0 3px 67px 0 rgba(137, 156, 197, 0.4)`,
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(6, 0)
    }
  },
  credTeamTitleHint: {
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
  credTeamTitle: {
    fontFamily: basierBold,
    fontSize: theme.typography.pxToRem(30),
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 1.2,
    letterSpacing: 0,
    color: '#20262d',
    margin: theme.spacing(0)
  },
  credTeamDescription: {
    fontFamily: basierRegular,
    fontSize: theme.typography.pxToRem(16),
    lineHeight: 1.38,
    letterSpacing: 0,
    color: '#516375',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
  },
  credTeamListWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    }
  }
}))
