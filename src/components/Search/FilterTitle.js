import React, { useState } from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import filterIcon from '../../assets/images/filter.png'
import sortIcon from '../../assets/images/sort.png'
import TitleTextTwo from '../StyledComponent/Text/BodyText'
import styles from './FilterTitle.styles'
import SortModal from './SortModal'

export default function FilterTitle() {
  const [sortModalOpen, setSortModalOpen] = useState(false)
  return (
    <View style={styles.root}>
      <TouchableOpacity style={styles.itemFilter}>
        <Image source={filterIcon} style={styles.filterIcon} />
        <TitleTextTwo>فیلتر کردن</TitleTextTwo>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.itemSort}
        onPress={() => setSortModalOpen(true)}
      >
        <Image source={sortIcon} style={styles.filterIcon} />
        <TitleTextTwo>مرتب سازی</TitleTextTwo>
      </TouchableOpacity>
      <SortModal open={sortModalOpen} setOpen={setSortModalOpen} />
    </View>
  )
}
