import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Card from './app/components/Card'
import ListingDetails from './app/screens/ListingDetails';
import MessagesScreen from './app/screens/MessagesScreen';
import Icon from './app/components/Icon';
import Screen from './app/components/Screen';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';



// const categories = [
//   { label: 'Furniture', value: 1 },
//   { label: 'Clothings', value: 2 },
//   { label: 'Cameras', value: 3 },
// ]
export default function App() {
  // const [category, setCategory] = useState(categories[0])
  return (
    <LoginScreen />
    // <Screen>
    //   <AppPicker placeholder='Category' icon='apps' items={categories} selectedItem={category} onSelectItem={(item) => setCategory(item)} />
    //   <AppTextInput placeholder='Email' icon='email' />
    // </Screen>
  );
}

