import { StyleSheet } from 'react-native'
import theme from '../../../theme/theme'

export default StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  ImgLogo: {
    width: 200,
    height: 200,
    marginBottom: 15
  },
  inputView: {
    width: '80%'
    // marginTop: 15
  },
  buttonView: {
    width: '80%',
    marginTop: 30,
    padding: 10
  },
  buttonViewTwo: {
    width: '80%',
    padding: 10,
    paddingBottom: 0,
    paddingTop: 0
  },
  inputContainerStyle: {
    backgroundColor: theme.palette.bgColorMain,
    marginTop: 5,
    borderBottomWidth: 0,
    paddingRight: 10,
    paddingLeft: 10,
    borderRadius: 5
  },
  inputStyle: {
    color: theme.palette.primary
  },
  inputLabel: {
    paddingRight: 15
  },
  containerStyle: {
    height: 50
  },
  buttonTitle: {
    fontFamily: theme.fontFamilyNormal,
    fontSize: 17
  },
  buttonTitleTwo: {
    fontFamily: theme.fontFamilyNormal,
    fontSize: 15,
    textAlign: 'right',
    width: '100%'
    // color: '#5e6871'
  }
})
