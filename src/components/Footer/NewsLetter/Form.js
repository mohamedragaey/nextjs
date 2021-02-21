import React from 'react'
import {useFormik} from 'formik'
import {Alert} from '@material-ui/lab'
import {Email} from '@material-ui/icons'
import {FormControl, IconButton, InputAdornment, InputLabel, TextField} from '@material-ui/core'
import {newsLetterFormValidation} from '../../../utils/validationSchema'
import TranslateHelper from '../../TranslateHelper'
import {useStyles} from './Styles'

const NewsLetterForm = ({handleKeyPress, onSubmit, newsLetterFormFailure, newsLetterFormError}) => {
  const classes = useStyles()

  const newsLetterForm = useFormik({
    initialValues: {
      email: '',
      reCaptcha: ''
    },
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: true,
    validationSchema: newsLetterFormValidation,
    onSubmit: ((values, actions) => {
      onSubmit(values, actions)
    })
  })

  return (
    <form onSubmit={newsLetterForm.handleSubmit} noValidate autoComplete="off" className={classes.formWrapper}>
      {!!newsLetterFormFailure &&
      <Alert severity="error" variant='filled'>
        {!!newsLetterFormError && newsLetterFormError}
      </Alert>}
      <FormControl fullWidth>
        <InputLabel htmlFor="email" className={classes.formInputLabel}>
          {TranslateHelper().FieldsLabelsYourEmail}
        </InputLabel>
        <TextField
          required
          fullWidth
          margin="dense"
          type="email"
          name='email'
          id='email'
          variant="outlined"
          placeholder={TranslateHelper().FieldsPlaceholderYourEmail}
          onKeyPressCapture={handleKeyPress}
          onChange={newsLetterForm.handleChange}
          onBlur={newsLetterForm.handleBlur}
          value={newsLetterForm.values.email}
          helperText={newsLetterForm.errors.email && newsLetterForm.touched.email && newsLetterForm.errors.email}
          error={newsLetterForm.errors.email && newsLetterForm.touched.email !== undefined}
          InputProps={{ // <-- This is where the toggle button is added.
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label={TranslateHelper().FieldsPlaceholderYourEmail}
                  onClick={() => onSubmit(newsLetterForm.values, newsLetterForm)}
                >
                  <Email/>
                </IconButton>
              </InputAdornment>
            ),
            autoComplete: 'new-password',
            form: {
              autoComplete: 'off'
            }
          }}
        />
      </FormControl>
    </form>
  )
}
export default NewsLetterForm
