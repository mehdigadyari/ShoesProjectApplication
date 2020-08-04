import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { View, Image } from 'react-native'
import HomeStack from './HomeStackNavigator'
import ProfileStack from './ProfileStackNavigator'
import DrawerContent from '../components/Drawer'
import DrawerItemText from '../components/StyledComponent/Text/DrawerItemText'
import activeHomeIcon from '../assets/images/activeHome.png'
import activeProfileIcon from '../assets/images/activeProfile.png'

const Drawer = createDrawerNavigator()

function getDrawerLabel(focused, color, title, icon) {
  return (
    <View
      style={{
        marginLeft: -32,
        flexDirection: 'row-reverse',
        alignItems: 'center'
      }}
    >
      <Image
        source={icon}
        style={{
          width: 24,
          height: 24,
          marginLeft: 10,
          opacity: focused ? 1 : 0.8
        }}
      />
      <DrawerItemText style={{ color, fontSize: focused ? 16 : 14 }}>
        {title}
      </DrawerItemText>
    </View>
  )
}

const MainNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      drawerType="slide"
      drawerPosition="right"
      statusBarAnimation="slide"
    >
      <Drawer.Screen
        options={{
          drawerLabel: ({ focused, color }) =>
            getDrawerLabel(focused, color, 'صفحه اصلی', activeHomeIcon)
        }}
        name="homeStack"
        component={HomeStack}
      />
      <Drawer.Screen
        options={{
          drawerLabel: ({ focused, color }) =>
            getDrawerLabel(focused, color, 'پروفایل کاربری', activeProfileIcon)
        }}
        name="profileStack"
        component={ProfileStack}
      />
    </Drawer.Navigator>
  )
}

export default MainNavigator
