import React from 'react'
import {useRouter} from 'next/router'
import {useMutation} from 'graphql-hooks'
import Grid from '@material-ui/core/Grid'
import Check from '@material-ui/icons/Check'
import Close from '@material-ui/icons/Close'
import Container from '@material-ui/core/Container'
import TranslateHelper from '../TranslateHelper'
import {useStyles} from './Styles'

const VERIFY_EMAIL_MUTATION = `mutation verifyUserEmail($token: String!) {
      verifyUserEmail(token: $token)
    }`

const VerifyPageContent = () => {
  const classes = useStyles()
  const [isLoading, setIsLoading] = React.useState(true)
  const [errorMessage, setErrorMessage] = React.useState('')
  const router = useRouter()
  const token = router.query.token

  React.useEffect(() => {
    if (isLoading && token) {
      mutateFn().then((result) => {
        setErrorMessage(result.error.graphQLErrors[0].message)
        setIsLoading(loading)
      })
    }
    if (!isLoading && error) {
      setErrorMessage(error.graphQLErrors[0].message)
    }
  }, [token])

  const [mutateFn, {loading, error, data}] = useMutation(
    VERIFY_EMAIL_MUTATION,
    {
      variables: {
        token
      }
    }
  )

  return (
    <section className={classes.verifyPageContentWrapper}>
      <Container maxWidth="xl">
        <Grid container justify='center' alignItems='center'>
          <Grid item xs={12} md={6}>
            {errorMessage && <>
              <Close color='error'/>
              <p>{errorMessage}</p>
            </>}
            {data && data.verifyUserEmail && <>
              <Check/>
              <p>{TranslateHelper().VerifyPageContentSuccessMessage}</p>
            </>}
            {!token && <p>Page not found</p>}
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default VerifyPageContent
