import { StyleSheet } from 'react-native'
import theme from '../../theme/theme'

const styles = StyleSheet.create({
  root: {
    width: '90%',
    padding: 5,
    backgroundColor: theme.palette.bgColor,
    alignSelf: 'center'
  },
  textStyle: { marginRight: 10 },
  CheckBoxContainerStyle: { backgroundColor: 'transparent', borderWidth: 0 },
  title: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 5,
    marginBottom: 10,
    borderBottomColor: '#455a64',
    borderBottomWidth: 1,
    paddingBottom: 15,
    width: 200,
    alignSelf: 'center',
    color: '#fff'
  }
})
export default styles
