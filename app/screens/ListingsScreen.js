import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import Card from '../components/Card'

import Screen from '../components/Screen'
import color from '../config/color'

const listings = [
  {
    id: 1,
    title: 'Red Jacket for sale',
    price: 100,
    image: require('../assets/jacket.jpg')
  },
  {
    id: 2,
    title: 'Couch in great condition',
    price: 1000,
    image: require('../assets/couch.jpeg')
  }
]

const ListingsScreen = () => {

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={listings => listings.id.toString()}
        renderItem={({ item }) =>
          <Card
            title={item.title}
            subTitle={'$' + item.price}
            image={item.image}

          />

        }
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: color.light
  }
})

export default ListingsScreen
