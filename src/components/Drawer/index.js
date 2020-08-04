/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useState } from 'react'
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer'
import { View, Image, Linking } from 'react-native'
import Modal from 'react-native-modal'
import { Button } from 'react-native-elements'
import styles from './index.style'
import brandLogo from '../../assets/images/brandLogggo.png'
import faqIcon from '../../assets/images/faq.png'
import supportIcon from '../../assets/images/support.png'
import closeIcon from '../../assets/images/close.png'
import SubtitleTextTwo from '../StyledComponent/Text/SubtitleTextTwo'
import DrawerItemText from '../StyledComponent/Text/DrawerItemText'
import { LoginContext } from '../../contexts/LoginContext'

function getDrawerLabel(focused, color, title, icon) {
  return (
    <View
      style={{
        marginLeft: -32,
        flexDirection: 'row-reverse',
        alignItems: 'center'
      }}
    >
      <Image
        source={icon}
        style={{
          width: 24,
          height: 24,
          marginLeft: 10,
          opacity: focused ? 1 : 0.8
        }}
      />
      <DrawerItemText style={{ color, fontSize: focused ? 16 : 14 }}>
        {title}
      </DrawerItemText>
    </View>
  )
}

const index = (props) => {
  const { logout } = useContext(LoginContext)
  const [addAccountModal, setAddAccountModal] = useState(false)
  return (
    <DrawerContentScrollView style={styles.root} {...props}>
      <View style={styles.topView}>
        <Image source={brandLogo} style={styles.topImg} />
        <SubtitleTextTwo>ShoesShop</SubtitleTextTwo>
      </View>
      <DrawerItemList
        itemStyle={styles.drawerItem}
        inactiveTintColor="#9a9595"
        activeBackgroundColor="transparent"
        {...props}
      />
      <DrawerItem
        style={styles.drawerItem}
        inactiveTintColor="#9a9595"
        label={({ focused, color }) =>
          getDrawerLabel(focused, color, 'سوالات پر تکرار', faqIcon)
        }
        onPress={() => Linking.openURL('https://reactnativedeveloper.ir/')}
      />
      <DrawerItem
        style={styles.drawerItem}
        inactiveTintColor="#9a9595"
        label={({ focused, color }) =>
          getDrawerLabel(focused, color, 'تماس با پشتیبانی', supportIcon)
        }
        onPress={() => Linking.openURL('https://reactnativedeveloper.ir/')}
      />
      <DrawerItem
        style={styles.drawerItem}
        inactiveTintColor="#9a9595"
        label={({ focused, color }) =>
          getDrawerLabel(focused, color, 'خروج', closeIcon)
        }
        onPress={() => setAddAccountModal(true)}
      />
      <Modal
        isVisible={addAccountModal}
        onBackdropPress={() => setAddAccountModal(false)}
        onBackButtonPress={() => setAddAccountModal(false)}
        style={styles.exitModal}
      >
        <View style={styles.ViewModal}>
          <Button
            onPress={logout}
            title="مطمعن؟"
            titleStyle={styles.buttonTitleTwo}
            type="clear"
          />
          <View style={styles.ViewSep} />
          <Button
            onPress={() => setAddAccountModal(false)}
            title="فعلا نه!"
            titleStyle={styles.buttonTitleTwo}
            type="clear"
          />
        </View>
      </Modal>
    </DrawerContentScrollView>
  )
}

export default index
