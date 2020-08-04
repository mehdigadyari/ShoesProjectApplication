import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: 60,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    backgroundColor: '#263238',
    borderBottomColor: '#37474f',
    borderBottomWidth: 1
  },
  filterIcon: {
    width: 20,
    height: 20
  },
  itemFilter: {
    flexDirection: 'row-reverse',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftColor: '#3d4241',
    borderLeftWidth: 1
  },
  itemSort: {
    flexDirection: 'row-reverse',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftColor: '#3d4241',
    borderRightWidth: 1
  }
})
export default styles
