import React from 'react'
import * as yup from 'yup'
import TranslateHelper from '../components/TranslateHelper'

export const newsLetterFormValidation = yup.object().shape({
  email: yup.string().email(TranslateHelper().validationSchemaValidEmail),
  reCaptcha: yup.string().trim().required(TranslateHelper().validationSchemaReCaptcha)
})
