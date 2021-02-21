import React from 'react'
import {useRouter} from 'next/router'
import en from './../translations/en'
import fr from './../translations/fr'
import de from './../translations/de'
import es from './../translations/es'
import it from './../translations/it'

const TranslateHelper = () => {
  const router = useRouter()
  const {locale} = router
  const t = locale === 'en' ? en : locale === 'fr' ? fr : locale === 'es' ? es : locale === 'de' ? de : it
  return (t)
}

export default TranslateHelper
