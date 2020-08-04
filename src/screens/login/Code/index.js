/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { Image, View, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-elements'
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell
} from 'react-native-confirmation-code-field'
import BgView from '../../../components/StyledComponent/BgView'
import Styles from './index.style'
import codeCheck from '../../../assets/images/codeCheck.png'
import BodyText from '../../../components/StyledComponent/Text/BodyText'
import BodyTextTwo from '../../../components/StyledComponent/Text/BodyTextTwo'
import TitleTextTwo from '../../../components/StyledComponent/Text/TitleTextTwo'

const CELL_COUNT = 5
const Index = ({ navigation }) => {
  const [value, setValue] = useState('')
  const [counter, setCounter] = useState(120)
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT })
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue
  })
  // eslint-disable-next-line no-unused-vars
  let timer
  useEffect(() => {
    timer = setInterval(() => {
      setCounter((oldCounter) => {
        if (oldCounter === 0) {
          return oldCounter
        }
        return oldCounter - 1
      })
    }, 1000)
  }, [])

  return (
    <BgView style={Styles.root}>
      <Image source={codeCheck} style={Styles.ImgLogo} />
      <View style={Styles.inputView}>
        <BodyText style={Styles.inputLabel}>
          کد ارسالی به تلفن همراهتان را وارد کنید
        </BodyText>
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={Styles.codeFiledRoot}
          keyboardType="number-pad"
          renderCell={({ index, symbol, isFocused }) => (
            <TitleTextTwo
              key={index}
              style={[Styles.cell, isFocused && Styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}
            >
              {symbol || (isFocused ? <Cursor /> : null)}
            </TitleTextTwo>
          )}
        />
        {counter === 0 ? (
          <TouchableOpacity onPress={() => setCounter(10)}>
            <BodyTextTwo style={Styles.inputLabel}>ارسال مجدد کد</BodyTextTwo>
          </TouchableOpacity>
        ) : (
          <BodyTextTwo style={Styles.inputLabel}>
            {counter} ثانیه تا پایان اعتبار کد
          </BodyTextTwo>
        )}
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

export default Index
