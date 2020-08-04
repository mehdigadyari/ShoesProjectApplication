import React, { useState, useEffect } from 'react'
import { View, FlatList } from 'react-native'
import Header from './Header'
import Product from './Product'
import styles from './MensShoesPopular.styles'
import S1 from '../../assets/images/s1.png'
import PopularLoader from './PopularLoader'

const MensShoesPopular = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [newData, setNewData] = useState([])
  useEffect(() => {
    setTimeout(() => {
      setData([
        { id: 1, title: 'کفش اول', image: S1, price: '700,000', point: 4.9 },
        { id: 2, title: 'کفش اول', image: S1, price: '700,000', point: 4.9 },
        { id: 3, title: 'کفش اول', image: S1, price: '700,000', point: 4.9 },
        { id: 4, title: 'کفش اول', image: S1, price: '700,000', point: 4.9 },
        { id: 5, title: 'کفش اول', image: S1, price: '700,000', point: 4.9 }
      ])
      setLoading(false)
    }, 5000)
  }, [])
  useEffect(() => {
    const nd = []
    while (data.length > 0) {
      const d = data.splice(0, 2)
      nd.push(d)
    }
    setNewData(nd)
  }, [data])

  return (
    <>
      <Header title="محبوب ترین های مردانه" />
      {loading ? (
        <PopularLoader />
      ) : (
        <FlatList
          style={styles.root}
          data={newData}
          renderItem={({ item }) => (
            <View>
              {item.map((product) => {
                return (
                  <Product
                    id={product.id}
                    title={product.title}
                    image={product.image}
                    price={product.price}
                    point={product.point}
                    key={product.id}
                  />
                )
              })}
            </View>
          )}
          keyExtractor={(item, index) => `${index}`}
          horizontal
          inverted
        />
      )}
    </>
  )
}

export default MensShoesPopular
