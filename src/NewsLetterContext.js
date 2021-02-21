import React, {createContext} from 'react'

const NewsLetterContext = createContext({})

const NewsLetterProvider = ({children}) => {
  const [loading, setLoading] = React.useState(false)
  const [newsLetterFormError, setNewsLetterFormError] = React.useState(false)
  const [newsLetterFormFailure, setNewsLetterFormFailure] = React.useState(false)

  const handleNewsLetterSubmit = (values, formActions) => {
    formActions.setSubmitting(true)
    setTimeout(() => {
      console.log('NewsLetter submitted', values)
      setNewsLetterFormError(false)
      setNewsLetterFormFailure(false)
      formActions.setSubmitting(false)
    }, 3000)
  }

  const handleKeyPress = (e) => {
    if (e.which === 13) {
      handleNewsLetterSubmit()
    }
  }
  return (
    <NewsLetterContext.Provider value={{
      loading,
      setLoading,
      newsLetterFormError,
      newsLetterFormFailure,
      handleKeyPress,
      handleNewsLetterSubmit
    }}>
      {children}
    </NewsLetterContext.Provider>
  )
}

const NewsLetterConsumer = NewsLetterContext.Consumer

export {NewsLetterProvider, NewsLetterConsumer}
