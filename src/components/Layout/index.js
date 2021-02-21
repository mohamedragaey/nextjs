import React from 'react'
import {create} from 'jss'
import dynamic from 'next/dynamic'
import CssBaseline from '@material-ui/core/CssBaseline'
import {jssPreset, StylesProvider} from '@material-ui/styles'
import {createGenerateClassName, ThemeProvider} from '@material-ui/core/styles'
import {ListingProvider} from '../../ListingContext'
import {useStyles} from './Styles'
import theme from '../../theme'

const Header = dynamic(import('../Header'))
const Footer = dynamic(import('../Footer'))
const ScrollToTop = dynamic(import('../../utils/ScrollToTop'))
const ScrollTop = dynamic(import('../ScrollTop/ScrollTop'))

const generateClassName = createGenerateClassName({
  productionPrefix: 'myClasses-'
})

const Layout = ({children}) => {
  const classes = useStyles()
  const [key, setKey] = React.useState(0)
  const jss = create({plugins: [...jssPreset().plugins]})

  React.useEffect(() => {
    setKey(1)
  }, [])

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <StylesProvider jss={jss} key={key} generateClassName={generateClassName}>
      <ThemeProvider theme={theme}>
        <ListingProvider>
          <div className={classes.pageWrapper}>
            <CssBaseline/>
            <ScrollToTop/>
            <Header/>
            <main className={classes.content}>
              {children}
            </main>
            <Footer/>
            <ScrollTop scrollStepInPx="50" delayInMs="0"/>
          </div>
        </ListingProvider>
      </ThemeProvider>
    </StylesProvider>
  )
}

export default Layout
