import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'
import styles from './header.styles'
import TitleTextThree from '../StyledComponent/Text/TitleTextThree'

const Header = () => {
  return (
    <View style={styles.root}>
      <TitleTextThree style={styles.title}>برندها</TitleTextThree>
      <Button title="نمایش همه" type="clear" titleStyle={styles.buttonTitle} />
    </View>
  )
}

export default Header
