import {makeStyles} from '@material-ui/core/styles'
import {basierBold, basierRegular} from '../../utils/Fonts'

export const useStyles = makeStyles((theme) => ({
  animatedIconWrapper: {
    height: 100,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    '& > div': {
      marginLeft: '0 !important'
    },
    '.small &': {
      height: 90
    }
  }
}))
