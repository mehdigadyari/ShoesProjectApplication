import { StyleSheet } from 'react-native'
import theme from '../../theme/theme'

const styles = StyleSheet.create({
  root: {
    height: 220,
    backgroundColor: '#131a21',
    marginTop: 10,
    borderRadius: 5,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#6e7f9daa'
  },

  leftSlider: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'column'
  },
  rightSlider: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'stretch'
  },
  discountView: {
    padding: 5,
    paddingLeft: 15,
    backgroundColor: '#811c6b',
    position: 'absolute',
    right: 0,
    borderBottomLeftRadius: 25,
    borderTopRightRadius: 5
  },
  discountText: {
    color: '#fff',
    fontSize: 12
  },
  btnTitle: {
    fontFamily: theme.fontFamilyNormal,
    fontSize: 12
  },
  btnContainerStyle: {
    position: 'absolute',
    bottom: 5,
    left: 5
  },
  bottomSlider: {
    borderBottomColor: '#2c3a5344',
    borderBottomWidth: 1
  },
  dotSlider: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.92)'
  }
})
export default styles
