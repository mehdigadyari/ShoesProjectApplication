import React from 'react'
import {
  createStackNavigator,
  CardStyleInterpolators
} from '@react-navigation/stack'
import HomeScreen from '../screens/Main/Home'
import SearchScreen from '../screens/Main/Search'
import BgViewMain from '../components/StyledComponent/BgViewMain'
import Header from '../components/Headers/mainHeader'

const Stack = createStackNavigator()

const HomeStackNavigator = () => {
  return (
    <BgViewMain>
      <Header />
      <Stack.Navigator screenOptions={{ header: () => null }}>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            gestureDirection: 'horizontal'
          }}
          name="search"
          component={SearchScreen}
        />
      </Stack.Navigator>
    </BgViewMain>
  )
}

export default HomeStackNavigator
