/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { View, Animated } from 'react-native'

const Index = ({ type, width, height }) => {
  const LeftLoader = new Animated.Value(0)

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(LeftLoader, {
          toValue: width,
          duration: 400,
          useNativeDriver: false
        })
      ])
    ).start()
  }, [])
  return (
    <View
      style={{
        width,
        height,
        borderRadius: type === 'circle' ? width : 0,
        overflow: 'hidden',
        margin: 10,
        backgroundColor: '#rgba(50,53,134,0.28)'
      }}
    >
      <Animated.View
        style={{
          width: 0.2 * width,
          height: '100%',
          backgroundColor: '#rgba(50,53,134,0.28)',
          left: LeftLoader
        }}
      />
    </View>
  )
}

export default React.memo(Index)
