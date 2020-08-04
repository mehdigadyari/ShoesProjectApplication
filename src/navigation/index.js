/* eslint-disable no-nested-ternary */
import 'react-native-gesture-handler'
import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import LoginNavigator from './LoginNavigator'
import MainNavigator from './MainNavigator'
import { LoginContext } from '../contexts/LoginContext'
import SplashScreen from '../screens/splashScreen'

const Index = () => {
  const { isLoggedIn, loading } = useContext(LoginContext)
  return (
    <NavigationContainer>
      {loading ? (
        <SplashScreen />
      ) : isLoggedIn ? (
        <MainNavigator />
      ) : (
        <LoginNavigator />
      )}
    </NavigationContainer>
  )
}

export default Index
