import { StyleSheet } from 'react-native'
import theme from '../../theme/theme'

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: '100%'
  },
  cartIcon: {
    width: 40,
    height: 40
  },
  badgeView: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 24,
    height: 24,
    position: 'absolute',
    borderRadius: 18,
    top: 3,
    right: 2
  },
  badgeText: {
    color: '#fff'
  },
  cardContent: {
    padding: 10,
    width: 260,
    backgroundColor: '#0D47A1',
    position: 'absolute',
    top: 60,
    left: 0,
    borderRadius: 5
    // borderBottomRightRadius: 5,
    // borderBottomLeftRadius: 5,
    // zIndex: 2000
  },
  titleText: {
    color: '#fff',
    fontSize: 16
  },
  cardBottom: {
    width: '100%',
    height: 40,
    flexDirection: 'row-reverse',
    borderBottomColor: '#ffffff22',
    borderBottomWidth: 1,
    justifyContent: 'space-between'
  },
  cardBottomButton: {
    width: '100%',
    padding: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#2979ff',
    borderWidth: 1
  },
  cardBottomButtonView: {
    width: '100%',
    padding: 5
  },
  ButtonText: {
    fontFamily: theme.fontFamilyNormal
  },
  cardItem: {
    width: '100%',
    height: 70,
    flexDirection: 'row-reverse',
    borderBottomColor: '#ffffff22',
    borderBottomWidth: 1
    // marginBottom: 10
  },
  cardItemImageView: {
    width: 80,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardItemImage: {
    width: 80,
    height: 80
  },
  cardItemDesc: {
    flex: 1,
    flexDirection: 'column',
    paddingRight: 20,
    paddingLeft: 5
  },
  priceView: {
    width: '100%',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cardTitle: { flex: 1 },
  deleteIcon: {
    width: 20,
    height: 20
  }
})
export default styles
