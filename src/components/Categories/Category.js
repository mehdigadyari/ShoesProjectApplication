import React from 'react'
import { View, Image } from 'react-native'
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import styles from './index.style'
import BodyText from '../StyledComponent/Text/BodyText'

const Category = ({ title, image }) => {
  const navigation = useNavigation()
  return (
    <View style={styles.CategoryRoot}>
      <Image source={image} style={styles.CategoryImage} />
      <BodyText style={styles.CategoryTitle}> {title} </BodyText>
      <View style={styles.buttonView}>
        <Button
          title="مشاهده کفش ها"
          type="clear"
          titleStyle={styles.buttonTitle}
          onPress={() => navigation.navigate('search')}
        />
      </View>
    </View>
  )
}

export default Category
