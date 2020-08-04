import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'
import styles from './Header.styles'
import TitleTextThree from '../StyledComponent/Text/TitleTextThree'

const Header = ({ title }) => {
  return (
    <View style={styles.root}>
      <TitleTextThree style={styles.title}>{title}</TitleTextThree>
      <Button title="نمایش همه" type="clear" titleStyle={styles.buttonTitle} />
    </View>
  )
}

export default Header
