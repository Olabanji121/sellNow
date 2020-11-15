import React, { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import ListActionDeleteAction from '../components/ListActionDeleteAction'
import ListItem from '../components/ListItem'
import ListItemSeparator from '../components/ListItemSeparator'
import Screen from '../components/Screen'


const initMessages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/57.jpg')
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/57.jpg')
  }
]

const MessagesScreen = () => {

  const [messages, setMessages] = useState(initMessages)

  const [refreshing, Setrefreshing] = useState(false)

  const handleDelete = (msg) => {
    const newMessages = messages.filter(m => m.id !== msg.id)
    setMessages(newMessages);
  }

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({ item }) => <ListItem
          title={item.title}
          subTitle={item.description}
          image={item.image}
          onPress={() => console.log('Message Selected', item)}
          renderRightActions={() => <ListActionDeleteAction onPress={() => handleDelete(item)} />
          }
        />}

        ItemSeparatorComponent={() => <ListItemSeparator />}
        refreshing={refreshing}
        onRefresh={() => setMessages([
          {
            id: 2,
            title: 'T2',
            description: 'D2',
            image: require('../assets/57.jpg')
          }
        ])}

      />
    </Screen>

  )
}

const styles = StyleSheet.create({

})
export default MessagesScreen
