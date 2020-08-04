import React from 'react'
import { Image, View } from 'react-native'
import BgView from '../../components/StyledComponent/BgView'
import BodyText from '../../components/StyledComponent/Text/SubtitleTextTwo'
import styles from './index.style'
import loadingImage from '../../assets/images/loading.gif'

const Index = () => {
  return (
    <BgView style={styles.root}>
      <View style={styles.imageAnim}>
        <Image source={loadingImage} style={styles.textLogo} />
      </View>
      <BodyText>Gadyari Company</BodyText>
    </BgView>
  )
}

export default Index
