import React from 'react'
import {
  createStackNavigator,
  CardStyleInterpolators
} from '@react-navigation/stack'
import SignInScreen from '../screens/login/SignIn'
import SignUpScreen from '../screens/login/SignUp'
import CodeScreen from '../screens/login/Code'
import ForgetPasswordScreen from '../screens/login/ForgetPassword'

const Stack = createStackNavigator()

const LoginNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }}>
      <Stack.Screen name="SignIn" component={SignInScreen} />

      <Stack.Screen name="SignUp" component={SignUpScreen} />

      <Stack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureDirection: 'horizontal'
        }}
        name="ForgetPassword"
        component={ForgetPasswordScreen}
      />
      <Stack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureDirection: 'horizontal-inverted'
        }}
        name="Code"
        component={CodeScreen}
      />
    </Stack.Navigator>
  )
}

export default LoginNavigator
