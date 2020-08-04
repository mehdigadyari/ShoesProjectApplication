import React, { useState, useEffect } from 'react'
import { View, FlatList } from 'react-native'
import Header from './Header'
import Brand from './Brand'
import adidas from '../../assets/images/add1.png'

const Index = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    setData([
      { id: 1, title: 'آدیداس', img: adidas },
      { id: 2, title: 'نایکی', img: adidas },
      { id: 3, title: 'پوما', img: adidas },
      { id: 4, title: 'تن تاک', img: adidas },
      { id: 5, title: 'ایرانی', img: adidas }
    ])
  }, [])
  return (
    <View>
      <Header />

      <FlatList
        data={data}
        renderItem={({ item }) => <Brand title={item.title} img={item.img} />}
        horizontal
        inverted
        keyExtractor={(item) => `${item.id}`}
      />
    </View>
  )
}

export default Index
