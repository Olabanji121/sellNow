import React from 'react';
import { View } from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Card from './app/components/Card'
import ListingDetails from './app/screens/ListingDetails';
import MessagesScreen from './app/screens/MessagesScreen';

export default function App() {

  return (
    <MessagesScreen />
    // <ViewImageScreen />
    // <View style={{
    //   backgroundColor: '#f8f4f4',
    //   // padding: 20,
    //   paddingTop: 100,
    //   flex: 1,
    //   // justifyContent: 'flex-end',
    //   // alignItems: 'center',
    // }}>
    //   {/* <Card
    //     title='Red jacket for sale'
    //     subTitle='$100'
    //     image={require('./app/assets/jacket.jpg')}
    //   /> */}
    //   {/* <ListingDetails /> */}


    // </View>
  );
}

