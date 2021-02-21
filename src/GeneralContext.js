import React, {createContext} from 'react'

const GeneralContext = createContext({})

const GeneralProvider = ({children}) => {
  const [loading, setLoading] = React.useState(false)
  const [mobileMenuState, setMobileMenuState] = React.useState(false)

  const toggleMobileMenuDrawer = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    setMobileMenuState(!mobileMenuState)
  }

  return (
    <GeneralContext.Provider value={{
      loading,
      setLoading,
      mobileMenuState,
      setMobileMenuState,
      toggleMobileMenuDrawer
    }}>
      {children}
    </GeneralContext.Provider>
  )
}
const GeneralConsumer = GeneralContext.Consumer

export {GeneralProvider, GeneralConsumer}
