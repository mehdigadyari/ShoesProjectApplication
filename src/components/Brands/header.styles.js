import { StyleSheet } from 'react-native'
import theme from '../../theme/theme'

const styles = StyleSheet.create({
  root: {
    padding: 4,
    justifyContent: 'space-between',
    flexDirection: 'row-reverse'
  },
  buttonTitle: {
    fontFamily: theme.fontFamilyNormal,
    fontSize: 16
  },
  title: {
    borderBottomColor: theme.palette.primary,
    borderBottomWidth: 1
  }
})
export default styles
