import React, { useState, useRef } from 'react'
import { View, Image, Animated } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import SubtitleTextTwo from '../StyledComponent/Text/SubtitleTextTwo'
import ItemText from '../StyledComponent/Text/BodyTextTwo'
import cartIcon from '../../assets/images/shoppingCart.png'
import Product from './Product'
import styles from './cardProduct.style'
import s1Img from '../../assets/images/s1.png'
import s2Img from '../../assets/images/s2.png'
import s3Img from '../../assets/images/s3.png'

const Cart = () => {
  const [open, setOpen] = useState(false)
  const fadeAnim = useRef(new Animated.Value(0)).current
  const fadeToggle = () => {
    if (open) {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true
      }).start()
    } else {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true
      }).start()
    }
    setOpen(!open)
  }

  return (
    <View style={styles.root}>
      <TouchableOpacity style={styles.root} onPress={fadeToggle}>
        <Image source={cartIcon} style={styles.cartIcon} />
        <View style={styles.badgeView}>
          <SubtitleTextTwo style={styles.badgeText}>2</SubtitleTextTwo>
        </View>
      </TouchableOpacity>
      <Animated.View style={[styles.cardContent, { opacity: fadeAnim }]}>
        <Product img={s1Img} desct="کفش نایکی" price="500,000" />
        <Product img={s2Img} desct="کفش نایکی" price="500,000" />
        <Product img={s3Img} desct="کفش نایکی" price="500,000" />

        <View style={styles.cardBottom}>
          <ItemText>قیمت کل:</ItemText>
          <ItemText style={styles.titleText}>100,000</ItemText>
        </View>
        <View style={styles.cardBottomButtonView}>
          <TouchableOpacity style={styles.cardBottomButton}>
            <ItemText style={styles.ButtonText}>نمایش سبد خرید</ItemText>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  )
}

export default Cart
