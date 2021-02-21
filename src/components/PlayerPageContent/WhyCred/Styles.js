import {makeStyles} from '@material-ui/core/styles'
import {basierBold} from '../../../utils/Fonts'

export const useStyles = makeStyles((theme) => ({
  whyCredWrapper: {
    background: '#f4f6f9',
    padding: theme.spacing(20, 0, 15),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(6, 0)
    }
  },
  whyCredTitleHint: {
    fontFamily: basierBold,
    fontSize: theme.typography.pxToRem(12),
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 0.92,
    letterSpacing: 0,
    color: '#4fb783',
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(1.5)
  },
  whyCredTitle: {
    fontFamily: basierBold,
    fontSize: theme.typography.pxToRem(30),
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 1.2,
    letterSpacing: 0,
    color: '#20262d',
    margin: theme.spacing(0)
  },
  whyCredColumnWrapper: {
    [theme.breakpoints.up('md')]: {
      paddingRight: theme.spacing(10)
    }
  },
  whyCredLink: {
    '&.MuiButton-text': {
      textTransform: 'initial',
      display: 'inline-flex',
      alignItems: 'center',
      borderRadius: theme.spacing(2),
      backgroundColor: '#151719',
      fontFamily: basierBold,
      fontSize: theme.typography.pxToRem(14),
      fontWeight: theme.typography.fontWeightBold,
      lineHeight: 1.29,
      letterSpacing: 0,
      textAlign: 'center',
      color: theme.palette.common.white,
      padding: theme.spacing(1, 2.5),
      textDecoration: 'none',
      marginTop: theme.spacing(4.5),
      '& svg': {
        marginLeft: theme.spacing(1.25),
        transition: `all 0.3s ease-in-out`,
        '& g': {
          stroke: theme.palette.common.white
        }
      },
      '&:hover,&:focus': {
        color: theme.palette.primary.light,
        '& svg g': {
          stroke: theme.palette.primary.light
        }
      }
    }
  }
}))
