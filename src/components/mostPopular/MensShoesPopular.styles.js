import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  root: {
    padding: 5
  },
  rootLoader: {
    flexDirection: 'row-reverse',
    marginTop: 10
  },
  loaderView: {
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
  loaderText: {
    flex: 1,
    marginRight: 10,
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  pointLoader: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#102344',
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40
  }
})
export default styles
