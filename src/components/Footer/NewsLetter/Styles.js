import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  newsLetterWrapper: {},
  formWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    maxWidth: 247,
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%'
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      marginBottom: theme.spacing(2)
    },
    '& .MuiInputLabel-formControl': {
      top: -25
    },
    '& .MuiInputLabel-outlined.MuiInputLabel-marginDense': {
      transform: 'translate(14px,12px) scale(1)'
    },
    '& .MuiFormControl-marginDense': {
      marginTop: theme.spacing(4)
    },
    '& .MuiOutlinedInput-root': {
      borderRadius: theme.spacing(1.5),
      backgroundColor: '#151719',
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.primary.main
      }
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'solid 2px #42464a',
      transition: 'all 0.3s ease-in-out'
    },
    '& .MuiOutlinedInput-inputMarginDense': {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      color: theme.palette.common.white
    },
    '& .MuiAlert-root': {
      width: '100%',
      marginBottom: theme.spacing(3),
      borderRadius: theme.spacing(0.5),
      boxShadow: '0 8px 16px -4px rgba(0, 0, 0, 0.16)',
      fontSize: theme.typography.pxToRem(14),
      lineHeight: 1.43
    },
    '& .MuiIconButton-root': {
      color: theme.palette.common.white,
      paddingRight: theme.spacing(0)
    }
  },
  formInputLabel: {
    display: 'flex',
    alignItems: 'center',
    transform: 'translate(0,0) scale(1)',
    color: theme.palette.common.white,
    fontSize: theme.typography.fontSize
  }
}))
