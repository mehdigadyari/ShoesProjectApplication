import { StyleSheet } from 'react-native'
import theme from '../../theme/theme'

const styles = StyleSheet.create({
  root: {
    padding: 10
  },
  CategoryRoot: {
    height: 100,
    backgroundColor: '#131a21',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#3d495caa',
    flexDirection: 'row-reverse',
    alignItems: 'center'
  },
  CategoryImage: {
    width: 80,
    height: 80,
    marginRight: 15
  },
  CategoryTitle: {
    marginRight: 15
  },
  buttonView: {
    position: 'absolute',
    right: 5,
    bottom: 5
  },
  buttonTitle: {
    fontFamily: theme.fontFamilyNormal,
    fontSize: 14,
    color: theme.palette.secondary
  }
})

export default styles
