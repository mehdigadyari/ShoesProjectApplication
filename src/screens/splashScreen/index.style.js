import { StyleSheet } from 'react-native'
import theme from '../../theme/theme'

export default StyleSheet.create({
  root: {
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#131a21'
  },
  textLogo: {
    marginTop: '50%'
  },
  imageAnim: {
    borderBottomColor: theme.palette.primary,
    borderBottomWidth: 2
  }
})
