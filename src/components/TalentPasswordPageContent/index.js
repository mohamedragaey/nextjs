import React from 'react'
import {useRouter} from 'next/router'
import {GraphQLClient} from 'graphql-hooks'
import {useQuery, useMutation} from 'graphql-hooks'
import {Button, Container, Grid, TextField} from '@material-ui/core'
import TranslateHelper from '../TranslateHelper'
import {useStyles} from './Styles'

const RESET_PASSWORD_MUTATION = `
  mutation resetPassword($input: InputResetPassword!) {
    resetPassword(input: $input)
  }
`

const VALIDATE_PASSWORD_RESET_TOKEN_QUERY = `
  query validatePasswordResetToken($token: String!){
    validatePasswordResetToken(token: $token)
  }
`
const client = new GraphQLClient({url: process.env.ISSUER_API_URL})

const PasswordReset = ({token}) => {
  const classes = useStyles()
  const [newPassword, setNewPassword] = React.useState('')
  const [confirmPassword, setConfirmPassword] = React.useState('')
  const [submitted, setSubmitted] = React.useState(false)

  const [mutatePassword, {error, data}] = useMutation(
    RESET_PASSWORD_MUTATION,
    {
      variables: {
        input: {
          token,
          newPassword,
          confirmNewPassword: confirmPassword
        }
      },
      client
    }
  )

  const submit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    if (newPassword !== confirmPassword) {
      alert('Passwords must match!')
      setSubmitted(false)
    } else {
      mutatePassword().then(() => setSubmitted(false))
    }
  }

  let errorMessage = ''

  if (error) {
    const [graphError] = error.graphQLErrors
    errorMessage = graphError.message
  }

  return (
    <>
      {data && data.resetPassword ?
        <h1 className={classes.passwordFormTitle}>{TranslateHelper().recoverPasswordTitleSuccessful}</h1>
        : <div className={classes.passwordForm}>
          <h1 className={classes.passwordFormTitle}>{TranslateHelper().recoverPasswordTitle}</h1>
          <form onSubmit={(e) => submit(e)}>
            <TextField
              fullWidth
              margin="normal"
              id="newPassword"
              label="New password"
              variant="outlined"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              id="confirmPassword"
              label="Confirm password"
              variant="outlined"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <div className={classes.passwordFormSubmitWrapper}>
              <span>{errorMessage}</span>
              <Button
                type='submit'
                variant='contained'
                color='primary'
                disabled={submitted}
                className={classes.passwordFormSubmit}>
                {TranslateHelper().passwordFormSubmit}
              </Button>
            </div>
          </form>
        </div>}
    </>
  )
}

export const TalentPasswordPageContent = () => {
  const classes = useStyles()
  const [isLoading, setIsLoading] = React.useState(true)
  const router = useRouter()
  const token = router.query.t

  const {error, data} = useQuery(
    VALIDATE_PASSWORD_RESET_TOKEN_QUERY,
    {variables: {token}, client}
  )

  if (isLoading) {
    setIsLoading(false)
  }

  return (
    <section className={classes.passwordFormWrapper}>
      <Container maxWidth='lg' className={classes.fullHeight}>
        <Grid container justify='center' alignItems='center' className={classes.fullHeight}>
          {isLoading && 'Loading....'}
          {!isLoading && !error && data && data.validatePasswordResetToken && <PasswordReset token={token}/>}
          {(error && !isLoading) || (data && !data.validatePasswordResetToken) &&
          <h2>{TranslateHelper().PasswordInvalidToken}</h2>}
        </Grid>
      </Container>
    </section>
  )
}

export default TalentPasswordPageContent
