import React from 'react'
import { View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import deleteIcon from '../../assets/images/delete.png'
import ItemText from '../StyledComponent/Text/BodyTextTwo'
import CaptionText from '../StyledComponent/Text/BodyText'
import styles from './cardProduct.style'

const Product = ({ img, desct, price }) => {
  return (
    <View style={styles.cardItem}>
      <View style={styles.cardItemImageView}>
        <Image source={img} style={styles.cardItemImage} />
      </View>
      <View style={styles.cardItemDesc}>
        <View style={styles.cardTitle}>
          <ItemText> {desct} </ItemText>
        </View>
        <View style={styles.priceView}>
          <CaptionText>{price}</CaptionText>
          <TouchableOpacity>
            <Image source={deleteIcon} style={styles.deleteIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Product
