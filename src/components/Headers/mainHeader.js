import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './mainHeader.style'
import menuIcon from '../../assets/images/menu.png'
import BodyText from '../StyledComponent/Text/BodyText'
import Cart from './Cart'

const MainHeader = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.root}>
      <View style={styles.rightMenu}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Image source={menuIcon} style={styles.menuIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.centerMenu}>
        <BodyText>ShoesShop</BodyText>
      </View>
      <View style={styles.leftMenu}>
        <Cart />
      </View>
    </View>
  )
}

export default MainHeader
