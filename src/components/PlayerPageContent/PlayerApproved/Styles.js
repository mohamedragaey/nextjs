import {makeStyles} from '@material-ui/core/styles'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {basierBold, basierRegular} from '../../../utils/Fonts'


export const useStyles = makeStyles((theme) => ({
  PlayerApprovedSliderWrapper: {
    boxShadow: `0 3px 67px 0 rgba(0, 0, 0, 0.4)`,
    backgroundColor: '#151719',
    paddingTop: theme.spacing(7)
  },
  PlayerApprovedSlider: {
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
  PlayerApprovedSliderContent: {
    display: 'flex !important'
  },
  PlayerApprovedSliderItemTitle: {
    fontFamily: basierBold,
    fontSize: theme.typography.pxToRem(30),
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 1.2,
    letterSpacing: 0,
    color: theme.palette.common.white,
    margin: 0
  },
  PlayerApprovedSliderItemQuote: {
    fontFamily: basierRegular,
    fontSize: theme.typography.pxToRem(16),
    letterSpacing: 0,
    color: theme.palette.common.white,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
  },
  PlayerApprovedSliderItemName: {
    fontFamily: basierRegular,
    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 1.2,
    letterSpacing: 0,
    color: theme.palette.common.white,
    margin: 0
  }
}))
