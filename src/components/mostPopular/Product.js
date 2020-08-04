import React from 'react'
import { View, Image } from 'react-native'
import styles from './Product.styles'
import BodyText from '../StyledComponent/Text/BodyText'
import BodyTextTwo from '../StyledComponent/Text/BodyTextTwo'

const Product = ({ title, image, price, point }) => {
  return (
    <View style={styles.root}>
      <Image source={image} style={styles.image} />
      <View style={styles.leftView}>
        <BodyText>{title} </BodyText>
        <BodyTextTwo>{price} تومان</BodyTextTwo>
      </View>
      <View style={styles.pointView}>
        <BodyText>{point} </BodyText>
      </View>
    </View>
  )
}

export default Product
