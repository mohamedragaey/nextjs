import React from 'react'
import {GraphQLClient} from 'graphql-hooks'
import {useRouter} from 'next/router'
import {useMutation} from 'graphql-hooks'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Close from '@material-ui/icons/Close'
import Check from '@material-ui/icons/Check'
import TranslateHelper from '../TranslateHelper'
import {useStyles} from './Styles'

const client = new GraphQLClient({url: process.env.ISSUER_API_URL})

const VERIFY_EMAIL_MUTATION = `mutation verifyEmail($token: String!) {
      verifyEmail(token: $token)
    }`

let mutationCalled = false

export const VerifyTalentPageContent = () => {
  const classes = useStyles()
  const router = useRouter()
  const token = router.query.token
  const [errorMessage, setErrorMessage] = React.useState('')

  const [mutateFn, {error, data}] = useMutation(
    VERIFY_EMAIL_MUTATION,
    {
      variables: {
        token
      },
      client
    }
  )
  React.useEffect(() => {
    if (!!token) {
      if (!mutationCalled) {
        mutationCalled = true
        mutateFn()
      }
    }
    if (error) {
      setErrorMessage(error.graphQLErrors[0].message)
    }

  }, [token, error])

  return (
    <section className={classes.verifyPageContentWrapper}>
      <Container maxWidth="xl">
        <Grid container justify='center' alignItems='center'>
          <Grid item xs={12} md={6}>
            {errorMessage && <>
              <Close color='error'/>
              <p>{errorMessage}</p>
            </>}
            {data && data.verifyEmail && <>
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

export default VerifyTalentPageContent
