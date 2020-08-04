import React from 'react'
import { View } from 'react-native'
import styles from './MensShoesPopular.styles'
import Loader from '../loader'

const PopularLoader = () => {
  return (
    <View style={styles.rootLoader}>
      <View>
        <View style={styles.loaderView}>
          <Loader width={70} height={70} type="circle" />
          <View style={styles.loaderText}>
            <Loader width={70} height={20} type="rect" />
            <Loader width={70} height={20} type="rect" />
          </View>
          <View style={styles.pointLoader}>
            <Loader width={35} height={35} type="circle" />
          </View>
        </View>
        <View style={styles.loaderView}>
          <Loader width={70} height={70} type="circle" />
          <View style={styles.loaderText}>
            <Loader width={70} height={20} type="rect" />
            <Loader width={70} height={20} type="rect" />
          </View>
          <View style={styles.pointLoader}>
            <Loader width={35} height={35} type="circle" />
          </View>
        </View>
      </View>

      <View>
        <View style={styles.loaderView}>
          <Loader width={70} height={70} type="circle" />
          <View style={styles.loaderText}>
            <Loader width={70} height={20} type="rect" />
            <Loader width={70} height={20} type="rect" />
          </View>
          <View style={styles.pointLoader}>
            <Loader width={35} height={35} type="circle" />
          </View>
        </View>
        <View style={styles.loaderView}>
          <Loader width={70} height={70} type="circle" />
          <View style={styles.loaderText}>
            <Loader width={70} height={20} type="rect" />
            <Loader width={70} height={20} type="rect" />
          </View>
          <View style={styles.pointLoader}>
            <Loader width={35} height={35} type="circle" />
          </View>
        </View>
      </View>
    </View>
  )
}

export default PopularLoader
