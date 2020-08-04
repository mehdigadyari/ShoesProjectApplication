/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react'
import { ThemeProvider } from 'styled-components/native'
import { StatusBar } from 'react-native'
import theme from './src/theme/theme'
import Navigations from './src/navigation'
import LoginContextProvider from './src/contexts/LoginContext'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor="#131a21" />
      <LoginContextProvider>
        <Navigations />
      </LoginContextProvider>
    </ThemeProvider>
  )
}

export default App
