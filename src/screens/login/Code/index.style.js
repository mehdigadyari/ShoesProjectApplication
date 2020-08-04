import { StyleSheet } from 'react-native'
import theme from '../../../theme/theme'

export default StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  ImgLogo: {
    width: 100,
    height: 100,
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
    backgroundColor: theme.palette.bgInput,
    marginTop: 5,
    borderBottomWidth: 0,
    paddingRight: 10,
    paddingLeft: 10,
    borderRadius: 5
  },
  inputStyle: {
    color: theme.palette.primaryText
  },
  inputLabel: {
    paddingRight: 15,
    textAlign: 'center'
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
  },
  codeFiledRoot: { marginBottom: 20, marginTop: 20 },
  cell: {
    width: 45,
    height: 45,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
    backgroundColor: theme.palette.bgInput
  },
  focusCell: {
    borderColor: theme.palette.primary
  }
})
