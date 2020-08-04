import React from 'react'
import { View } from 'react-native'
import Category from './Category'
import styles from './index.style'
import S1 from '../../assets/images/s1.png'
import S2 from '../../assets/images/s2.png'
import S3 from '../../assets/images/s3.png'

const Index = () => {
  const Categories = [
    { id: 1, title: 'کفش مردانه', image: S1 },
    { id: 2, title: 'کفش زنانه', image: S2 },
    { id: 3, title: 'کفش بچگانه', image: S3 }
  ]
  return (
    <View style={styles.root}>
      {Categories.map((item) => (
        <Category key={item.id} title={item.title} image={item.image} />
      ))}
    </View>
  )
}

export default Index
