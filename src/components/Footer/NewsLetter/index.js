import React from 'react'
import {useStyles} from './Styles'
import NewsLetterForm from './Form'
import {NewsLetterConsumer, NewsLetterProvider} from '../../../NewsLetterContext'

const NewsLetter = () => {
  const classes = useStyles()

  return (
    <section className={classes.newsLetterWrapper}>
      <NewsLetterProvider>
        <NewsLetterConsumer>
          {({handleNewsLetterSubmit, handleKeyPress, newsLetterFormError, newsLetterFormFailure}) => (
            <NewsLetterForm
              handleKeyPress={handleKeyPress}
              newsLetterFormError={newsLetterFormError}
              newsLetterFormFailure={newsLetterFormFailure}
              onSubmit={handleNewsLetterSubmit}/>
          )}
        </NewsLetterConsumer>
      </NewsLetterProvider>
    </section>
  )
}
export default NewsLetter
