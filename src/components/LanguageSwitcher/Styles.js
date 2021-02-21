import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  actionMenuButton: {
    color: theme.palette.common.white,
    border: `2px solid ${theme.palette.common.white}`,
    borderRadius: theme.spacing(1.5),
    fontSize: theme.typography.pxToRem(16),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    marginLeft: theme.spacing(1),
    '.inverseHeader &': {
      color: '#2b3c4d',
      border: `solid 2px #2b3c4d`,
      '&:hover, &:focus': {
        color: theme.palette.primary.main,
        border: `solid 2px ${theme.palette.primary.main}`
      }
    },
    '.shrink &': {
      color: theme.palette.common.white,
      border: `solid 2px ${theme.palette.common.white}`,
      '&:hover, &:focus': {
        color: theme.palette.primary.light,
        border: `solid 2px ${theme.palette.primary.light}`
      }
    }
  },
  buttonAction: {
    borderRadius: theme.spacing(0),
    border: `none`,
    color: theme.palette.text.primary,
    backgroundColor: 'transparent',
    fontSize: theme.typography.pxToRem(14),
    fontWeight: theme.typography.fontWeightRegular,
    lineHeight: 1.43,
    textAlign: 'center',
    padding: theme.spacing(1.5, 2.5),
    width: '100%',
    justifyContent: 'flex-start',
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
    '& svg': {
      marginRight: theme.spacing(2),
      width: theme.spacing(2.5),
      fontSize: theme.typography.pxToRem(20)
    },
    '&:hover,&:focus': {
      color: theme.palette.primary.main,
      backgroundColor: 'transparent'
    }
  }
}))
