import React from 'react'
import { Image, View } from 'react-native'
import { Input, Button } from 'react-native-elements'
import BgView from '../../../components/StyledComponent/BgView'
import Styles from './index.style'
import Register from '../../../assets/images/unhealthy.png'
import BodyText from '../../../components/StyledComponent/Text/BodyText'

const index = ({ navigation }) => {
  return (
    <BgView style={Styles.root}>
      <Image source={Register} style={Styles.ImgLogo} />
      <View style={Styles.inputView}>
        <BodyText style={Styles.inputLabel}>تلفن همراه</BodyText>
        <Input
          keyboardType="number-pad"
          labelStyle={Styles.inputLabel}
          inputContainerStyle={Styles.inputContainerStyle}
          containerStyle={Styles.containerStyle}
        />
      </View>
      <View style={Styles.inputView}>
        <BodyText style={Styles.inputLabel}>نام و نام خانوادگی</BodyText>
        <Input
          labelStyle={Styles.inputLabel}
          inputContainerStyle={Styles.inputContainerStyle}
          containerStyle={Styles.containerStyle}
        />
      </View>
      <View style={Styles.inputView}>
        <BodyText style={Styles.inputLabel}>رمز عبور</BodyText>
        <Input
          secureTextEntry
          labelStyle={Styles.inputLabel}
          inputContainerStyle={Styles.inputContainerStyle}
          containerStyle={Styles.containerStyle}
        />
      </View>
      <View style={Styles.inputView}>
        <BodyText style={Styles.inputLabel}>تکرار رمز عبور</BodyText>
        <Input
          secureTextEntry
          labelStyle={Styles.inputLabel}
          inputContainerStyle={Styles.inputContainerStyle}
          containerStyle={Styles.containerStyle}
        />
      </View>
      <View style={Styles.buttonView}>
        <Button
          onPress={() => navigation.navigate('Code')}
          title="ثبت نام"
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
