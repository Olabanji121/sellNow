import React from 'react'
import ListItem from '../components/ListItem'
import Screen from '../components/Screen'
import { StyleSheet, View } from 'react-native'
import { FlatList } from 'react-native'
import color from '../config/color'
import Icon from '../components/Icon'
import ListItemSeparator from '../components/ListItemSeparator'

const menuItems = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: color.primary
    }
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: color.secondary
    }
  }
]


const AccountScreen = () => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title='Kelly Jones'
          subTitle='kellyjones@gmail.com'
          image={require('../assets/57.jpg')}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={menuItem => menuItem.title}
          renderItem={({ item }) =>
            <ListItem
              title={item.title}
              IconComponent={
                <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />
              }
            />
          }
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <View style={styles.container}>
        <ListItem
          title='Logout'
          IconComponent={
            <Icon name='logout' backgroundColor='#ffe66d' />
          }
        />
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    backgroundColor: color.white
  },
  screen: {
    backgroundColor: color.light
  }
})
export default AccountScreen
