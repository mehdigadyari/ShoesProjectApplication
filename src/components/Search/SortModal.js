import React, { useState } from 'react'
import { View } from 'react-native'
import Modal from 'react-native-modal'
import { CheckBox } from 'react-native-elements'
import styles from './SortModal.styles'
import BodyText from '../StyledComponent/Text/BodyText'

export default function SortModal({ open, setOpen }) {
  const [activeItem, setActiveItem] = useState(1)
  return (
    <Modal
      isVisible={open}
      onBackButtonPress={() => setOpen(false)}
      onBackdropPress={() => setOpen(false)}
      animationIn="rubberBand"
      animationOut="pulse"
    >
      <View style={styles.root}>
        <BodyText style={styles.title}>مرتب سازی بر اساس</BodyText>
        <CheckBox
          title={<BodyText style={styles.textStyle}>ارزان ترین ها</BodyText>}
          checked={activeItem === 0}
          onPress={() => setActiveItem(0)}
          right
          iconRight
          containerStyle={styles.CheckBoxContainerStyle}
        />
        <CheckBox
          title={<BodyText style={styles.textStyle}>گران ترین ها</BodyText>}
          checked={activeItem === 1}
          onPress={() => setActiveItem(1)}
          right
          iconRight
          containerStyle={styles.CheckBoxContainerStyle}
        />
        <CheckBox
          title={<BodyText style={styles.textStyle}>محبوب ترین ها</BodyText>}
          checked={activeItem === 2}
          onPress={() => setActiveItem(2)}
          right
          iconRight
          containerStyle={styles.CheckBoxContainerStyle}
        />
        <CheckBox
          title={<BodyText style={styles.textStyle}>جدید ترین ها</BodyText>}
          checked={activeItem === 3}
          onPress={() => setActiveItem(3)}
          right
          iconRight
          containerStyle={styles.CheckBoxContainerStyle}
        />
      </View>
    </Modal>
  )
}
