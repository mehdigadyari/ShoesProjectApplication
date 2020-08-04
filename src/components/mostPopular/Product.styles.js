import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  root: {
    width: 240,
    height: 120,
    backgroundColor: '#131a21',
    marginBottom: 10,
    borderRadius: 5,
    borderColor: '#363a41',
    borderWidth: 1,
    marginRight: 10,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    padding: 10
  },
  image: {
    width: 80,
    height: 80
  },
  leftView: {
    flex: 1,
    marginRight: 10,
    flexDirection: 'column'
  },
  pointView: {
    position: 'absolute',
    top: 1,
    right: 1,
    backgroundColor: '#102344',
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40
  }
})
export default styles
