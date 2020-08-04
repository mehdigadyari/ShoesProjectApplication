import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ProfileScreen from '../screens/Main/Profile'

const Stack = createStackNavigator()

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="profile" component={ProfileScreen} />
    </Stack.Navigator>
  )
}

export default ProfileStackNavigator
