import {makeStyles} from '@material-ui/core/styles'
import {basierBold, basierRegular} from '../../../../utils/Fonts'

export const useStyles = makeStyles((theme) => ({
  teamMemberWrapper: {
    marginBottom: theme.spacing(3),
    padding: theme.spacing(0, 1.5),
    '& .lazy-load-image-background.lazy-load-image-loaded': {
      display: 'flex !important',
      alignItems: 'flex-end',
      maxWidth: '100%',
      overflow: 'hidden',
      borderRadius: theme.spacing(1.5)
    },
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(8)
    }
  },
  teamMemberImage: {
    height: 200,
    objectFit: 'cover'
  },
  teamMemberTitle: {
    fontFamily: basierBold,
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 1.18,
    letterSpacing: 0,
    color: '#20262d',
    margin: theme.spacing(0),
    marginTop: theme.spacing(1.5)
  },
  teamMemberDescription: {
    fontFamily: basierRegular,
    fontSize: theme.typography.pxToRem(16),
    lineHeight: 1.38,
    color: '#516375',
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(1.5)
  },
  teamMemberIcons: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
    '& .lazy-load-image-background.blur': {
      marginRight: theme.spacing(1.5)
    }
  }
}))
