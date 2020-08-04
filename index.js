/**
 * @format
 */

import { AppRegistry, I18nManager, YellowBox } from 'react-native'
import App from './App'
import { name as appName } from './app.json'

YellowBox.ignoreWarnings([
  'Calling `getNode()` on the ref of an Animated component is no longer necessary. You can now directly use the ref instead. This method will be removed in a future release.'
])

I18nManager.allowRTL(false)
AppRegistry.registerComponent(appName, () => App)
