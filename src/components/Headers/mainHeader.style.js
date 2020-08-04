import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: 70,
    backgroundColor: '#131a21',
    elevation: 1,
    flexDirection: 'row-reverse'
  },
  rightMenu: {
    width: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  centerMenu: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  leftMenu: {
    width: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuIcon: {
    width: 40,
    height: 40
  }
})
export default styles
