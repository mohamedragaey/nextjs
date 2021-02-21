import {makeStyles} from '@material-ui/core/styles'
import {basierBold, basierRegular} from '../../../utils/Fonts'

export const useStyles = makeStyles((theme) => ({
  connectedWithTheBestWrapper: {
    padding: theme.spacing(6, 0),
    boxShadow: `0 3px 67px 0 rgba(0, 0, 0, 0.4)`,
    backgroundColor: '#151719',
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(6, 0, 4)
    }
  },
  connectedWithTheBestTitle: {
    fontFamily: basierBold,
    fontSize: theme.typography.pxToRem(30),
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 1.2,
    letterSpacing: 0,
    color: theme.palette.common.white,
    margin: theme.spacing(0),
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.pxToRem(20)
    }
  },
  connectedWithTheBestDescription: {
    fontFamily: basierRegular,
    fontSize: theme.typography.pxToRem(20),
    lineHeight: 1.2,
    letterSpacing: 0,
    color: theme.palette.common.white,
    margin: theme.spacing(1.5, 0)
  },
  connectedWithTheBestClients: {
    marginTop: theme.spacing(5.75),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    '& .lazy-load-image-background.blur.lazy-load-image-loaded': {
      [theme.breakpoints.down('xs')]: {
        marginBottom: theme.spacing(2),
        '&:nth-child(3)': {
          order: 0
        },
        '&:nth-child(2)': {
          order: 1
        },
        '&:nth-child(4)': {
          order: 1
        },
        '&:nth-child(5)': {
          order: 1
        }
      },
      '&:not(:last-of-type) > img': {
        marginRight: theme.spacing(3)
      }
    }
  }
}))
