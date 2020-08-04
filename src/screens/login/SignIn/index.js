/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext } from 'react'
import { Image, View } from 'react-native'
import { Input, Button } from 'react-native-elements'
import Styles from './index.style'
import brandLogo from '../../../assets/images/brandLogggo.png'
import BgView from '../../../components/StyledComponent/BgView'
import BodyText from '../../../components/StyledComponent/Text/BodyText'
import { LoginContext } from '../../../contexts/LoginContext'

const index = ({ navigation }) => {
  const { login } = useContext(LoginContext)
  const SignIn = () => {
    login('123fbdfvbdtdb')
  }
  return (
    <BgView style={Styles.root}>
      <Image source={brandLogo} style={Styles.ImgLogo} />
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
        <BodyText style={Styles.inputLabel}>رمز عبور</BodyText>
        <Input
          secureTextEntry
          labelStyle={Styles.inputLabel}
          inputContainerStyle={Styles.inputContainerStyle}
          containerStyle={Styles.containerStyle}
        />
      </View>
      <View style={Styles.buttonView}>
        <Button
          onPress={SignIn}
          title="ورود"
          type="outline"
          titleStyle={Styles.buttonTitle}
        />
      </View>
      <View style={Styles.buttonViewTwo}>
        <Button
          onPress={() => navigation.navigate('SignUp')}
          title="ثبت نام نکرده اید؟"
          type="clear"
          titleStyle={Styles.buttonTitleTwo}
        />
      </View>
      <View style={Styles.buttonViewTwo}>
        <Button
          onPress={() => navigation.navigate('ForgetPassword')}
          title="رمز عبور خود را فراموش کرده اید؟"
          type="clear"
          titleStyle={Styles.buttonTitleTwo}
        />
      </View>
    </BgView>
  )
}

export default index
