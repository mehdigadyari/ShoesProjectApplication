import React, { useState } from 'react'
import { View, Image, Dimensions } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { Button } from 'react-native-elements'
import styles from './slider.style'
import s1Img from '../../assets/images/s1.png'
import s2Img from '../../assets/images/s2.png'
import s3Img from '../../assets/images/s3.png'
import BodyText from '../StyledComponent/Text/TitleTextTwo'
import TitleText from '../StyledComponent/Text/BodyText'
import SubtitleText from '../StyledComponent/Text/SubtitleText'

const Index = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const data = [
    {
      id: 1,
      title: 'کفش اول',
      subTitle: 'ویژه فصل تابستان',
      image: s2Img,
      price: '30,000',
      discount: 35
    },
    {
      id: 2,
      title: 'کفش دوم',
      subTitle: 'ویژه فصل زمستان',
      image: s3Img,
      price: '50,000',
      discount: 15
    },
    {
      id: 3,
      title: 'کفش سوم',
      subTitle: 'ویژه فصل تابستان',
      image: s1Img,
      price: '800,000',
      discount: 18
    }
  ]

  const renderItem = ({ item }) => {
    return (
      <View style={styles.root}>
        <View style={styles.leftSlider}>
          <BodyText>{item.title}</BodyText>
          <TitleText>{item.subTitle}</TitleText>
          <SubtitleText>{item.price}</SubtitleText>
          <Button
            title="مشاهده جزئیات"
            type="outline"
            titleStyle={styles.btnTitle}
            containerStyle={styles.btnContainerStyle}
          />
        </View>
        <View style={styles.rightSlider}>
          <Image source={item.image} style={styles.image} />
        </View>
        <View style={styles.discountView}>
          <BodyText style={styles.discountText}>
            {item.discount}% تخفیف
          </BodyText>
        </View>
      </View>
    )
  }

  return (
    <View>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width - 40}
        loop
        autoplay
        onBeforeSnapToItem={(index) => {
          setActiveIndex(index)
        }}
        //   layout="stack"
      />

      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeIndex}
        containerStyle={styles.bottomSlider}
        dotStyle={styles.dotSlider}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  )
}

export default Index
