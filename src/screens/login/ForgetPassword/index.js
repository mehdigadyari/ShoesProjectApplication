import React from 'react'
import { Image, View } from 'react-native'
import { Input, Button } from 'react-native-elements'
import BgView from '../../../components/StyledComponent/BgView'
import Styles from './index.style'
import loggin from '../../../assets/images/loggin.png'
import BodyText from '../../../components/StyledComponent/Text/BodyText'

const index = ({ navigation }) => {
  return (
    <BgView style={Styles.root}>
      <Image source={loggin} style={Styles.ImgLogo} />
      <View style={Styles.inputView}>
        <BodyText style={Styles.inputLabel}>تلفن همراه</BodyText>
        <Input
          keyboardType="number-pad"
          labelStyle={Styles.inputLabel}
          inputContainerStyle={Styles.inputContainerStyle}
          containerStyle={Styles.containerStyle}
        />
      </View>
      <View style={Styles.buttonView}>
        <Button
          onPress={() => navigation.navigate('Code')}
          title="تایید"
          type="outline"
          titleStyle={Styles.buttonTitle}
        />
      </View>
      <View style={Styles.buttonViewTwo}>
        <Button
          onPress={() => navigation.goBack()}
          title="باز گشت به صفحه ورود"
          type="clear"
          titleStyle={Styles.buttonTitleTwo}
        />
      </View>
    </BgView>
  )
}

export default index
