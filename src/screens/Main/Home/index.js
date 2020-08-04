import React from 'react'
import Slider from '../../../components/slider'
import Brands from '../../../components/Brands'
import Categories from '../../../components/Categories'
import MensShoesPopular from '../../../components/mostPopular/MensShoesPopular'
import WomenShoesPopular from '../../../components/mostPopular/WomenShoesPopular'
import KidsShoesPopular from '../../../components/mostPopular/KidsShoesPopular'
import BgScroolViewMain from '../../../components/StyledComponent/BgScroolViewMain'
// const styles = StyleSheet.create({
//   scrollMain: {
//     marginBottom: 15
//   }
// })

const index = () => {
  return (
    <BgScroolViewMain>
      <Slider />
      <Categories />
      <Brands />
      <MensShoesPopular />
      <WomenShoesPopular />
      <KidsShoesPopular />
    </BgScroolViewMain>
  )
}

export default index
