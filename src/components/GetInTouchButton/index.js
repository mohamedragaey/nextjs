import React from 'react'
import {Button} from '@material-ui/core'
import LanguageSwitcher from '../LanguageSwitcher'
import TranslateHelper from '../TranslateHelper'
import {useStyles} from './Styles'

const GetInTouchButton = () => {
  const classes = useStyles()

  return (
    <div className={classes.getInTouchButtonWrapper}>
      <Button color='default' variant='outlined'
              className={classes.getInTouchButton}
              onClick={() => Intercom('showNewMessage')}
      >
        {TranslateHelper().HeaderButtonGetInTouch}
      </Button>
      <LanguageSwitcher/>
    </div>
  )
}
export default GetInTouchButton
