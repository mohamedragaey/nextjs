import {makeStyles} from '@material-ui/core/styles'
import {basierBold} from '../../../../utils/Fonts'

export const useStyles = makeStyles((theme) => ({
  fCAApprovedAdvisorsChartWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    position: 'relative',
    justifyContent: 'center',
    '&:before': {
      top: 140,
      left: 180,
      right: 180,
      bottom: 100,
      content: '""',
      position: 'absolute',
      borderRadius: theme.spacing(4.5),
      border: `3px solid ${theme.palette.grey[200]}`
    }
  },
  advisorItemWrapper: {
    zIndex: 1,
    width: 230,
    position: 'relative',
    borderRadius: theme.spacing(2),
    border: `1px solid ${theme.palette.grey[200]}`,
    background: theme.palette.common.white,
    boxShadow: `0px 0px 8px 0px ${theme.palette.grey[200]}`,
    margin: theme.spacing(2),
    paddingTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column'
  },
  advisorItemRow: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  advisorItemOrder: {
    position: 'absolute',
    top: 4,
    right: 8,
    color: theme.palette.grey[200],
    fontSize: theme.typography.pxToRem(28),
    fontFamily: basierBold,
    fontWeight: theme.typography.fontWeightBold
  },
  advisorItemList: {
    flex: '1 1 auto',
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    '& li': {
      listStyle: 'none',
      position: 'relative',
      paddingLeft: theme.spacing(2),
      color: '#516375',
      '&:before': {
        top: '50%',
        left: 0,
        width: 3,
        height: 3,
        transform: 'translate(-50%,0)',
        content: '""',
        position: 'absolute',
        borderRadius: '50%',
        backgroundColor: theme.palette.text.primary
      }
    }
  },
  advisorItemTitle: {
    padding: theme.spacing(3, 2),
    backgroundColor: theme.palette.text.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
    fontFamily: basierBold,
    fontWeight: theme.typography.fontWeightBold,
    borderBottomRightRadius: theme.spacing(2),
    borderBottomLeftRadius: theme.spacing(2),
    '&.featured': {
      backgroundColor: theme.palette.primary.mainLight
    }
  }
}))
