import { StyleSheet } from 'react-native'
import theme from '../../theme/theme'

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#131a21',
    // backgroundColor: '#C5CAE9',
    padding: 7
  },
  topView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 100,
    borderBottomColor: '#ffffff33',
    borderBottomWidth: 1,
    marginBottom: 7
  },
  topImg: {
    width: 80,
    height: 80
  },
  drawerItem: {
    flexDirection: 'row-reverse',
    borderBottomColor: '#ffffff22',
    borderBottomWidth: 1
  },
  exitModal: {
    width: '80%',
    justifyContent: 'center',
    padding: 5,
    marginLeft: 45,
    alignItems: 'center'
  },
  ViewModal: {
    width: '100%',
    height: 100,
    backgroundColor: '#131a21',
    borderRadius: 5,
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    padding: 5,
    alignItems: 'center'
  },
  ViewSep: {
    width: 2,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 5
  },
  buttonTitleTwo: {
    fontFamily: theme.fontFamilyNormal,
    fontSize: 15,
    textAlign: 'right',
    width: '50%'
    // color: '#5e6871'
  }
})

export default styles
