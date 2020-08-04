import React from 'react'
import { View, Image } from 'react-native'
import styles from './brand.styles'
import TitleTextThree from '../StyledComponent/Text/TitleTextThree'

const Brand = ({ img, title }) => {
  return (
    <View style={styles.root}>
      <Image source={img} style={styles.image} />
      <TitleTextThree> {title} </TitleTextThree>
    </View>
  )
}

export default Brand
