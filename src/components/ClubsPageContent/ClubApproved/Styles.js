import {makeStyles} from '@material-ui/core/styles'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {basierBold, basierRegular} from '../../../utils/Fonts'

export const useStyles = makeStyles((theme) => ({
  ClubApprovedSliderWrapper: {
    boxShadow: `0 3px 67px 0 rgba(0, 0, 0, 0.4)`,
    backgroundColor: '#00af72',
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(7)
    },
    '& picture': {
      margin: 'auto',
      maxWidth: 461,
      display: 'block',
      [theme.breakpoints.down('sm')]: {
        marginTop: -200,
        marginBottom: -200
      }
    }
  },
  ClubApprovedSlider: {
    '& .slick-prev,& .slick-next': {
      zIndex: 10,
      color: theme.palette.common.white,
      fontSize: theme.typography.pxToRem(48),
      opacity: 0.24
    },
    '& .slick-prev': {
      left: 0
    },
    '& .slick-next': {
      right: 0
    }
  },
  ClubApprovedSliderContentWrapper: {
    display: 'flex !important'
  },
  ClubApprovedSliderContent: {
    [theme.breakpoints.up('md')]: {
      flex: '0 0 auto'
    },
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing(7)
    }
  },
  ClubApprovedSliderItemTitle: {
    fontFamily: basierBold,
    fontSize: theme.typography.pxToRem(30),
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 1.2,
    letterSpacing: 0,
    color: theme.palette.common.white,
    margin: 0
  },
  ClubApprovedSliderItemQuote: {
    fontFamily: basierRegular,
    fontSize: theme.typography.pxToRem(16),
    letterSpacing: 0,
    color: theme.palette.common.white,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    maxWidth: 427
  },
  ClubApprovedSliderItemName: {
    fontFamily: basierRegular,
    fontSize: theme.typography.pxToRem(16),
    lineHeight: 1.2,
    letterSpacing: 0,
    color: theme.palette.common.white,
    margin: 0
  },
  ClubApprovedSliderImageWrapper: {
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(0)
    },
    [theme.breakpoints.up('md')]: {
      flex: '0 0 auto',
      marginLeft: theme.spacing(17)
    }
  }
}))
