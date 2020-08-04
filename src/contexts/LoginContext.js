import React, { createContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'

const LoginContext = createContext({
  isLoggedIn: false,
  loading: true,
  // eslint-disable-next-line no-unused-vars
  login: (token) => {},
  logout: () => {}
})
export { LoginContext }

const LoginContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      AsyncStorage.getItem('token', (error, result) => {
        if (error || result === null || result.length === 0) {
          setIsLoggedIn(false)
        } else {
          setIsLoggedIn(true)
        }
        setLoading(false)
      })
    }, 500)
  }, [])

  const login = (token) => {
    AsyncStorage.setItem('token', token, (error) => {
      if (!error) {
        setIsLoggedIn(true)
      }
    })
  }
  const logout = () => {
    AsyncStorage.clear((error) => {
      if (!error) {
        setIsLoggedIn(false)
      }
    })
  }
  return (
    <LoginContext.Provider
      value={{
        isLoggedIn,
        loading,
        login,
        logout
      }}
    >
      {children}
    </LoginContext.Provider>
  )
}

export default LoginContextProvider
