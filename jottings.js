import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, Button, Alert, Platform, StatusBar } from 'react-native';

export default function App() {
  // let x =1;
  // console.log('App executed');

  return (
    <SafeAreaView style={[styles.container, containStyle]}>
      <Text numberOfLines={5} onPress={() => console.log('Text clicked')}>Hello World Testing </Text>
      {/* <Image source={ require("./assets/icon.png")}/>   */}
      <TouchableHighlight onPress={() => console.log('image Tapped')}>
        <Image
          // blurRadius={6}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300"
          }} />
      </TouchableHighlight>
      <Button
        color='orange'
        title="Click Me"
        // onPress={() => Alert.alert('My Title', 'My Message', [
        //   { text: 'Yes', onPress: ()=> console.log('Yes')},
        //   {text: 'No', onPress: ()=>  console.log('No')},
        // ])} />
        onPress={() => Alert.prompt("My Title", 'My Message', text => console.log(text))} />
    </SafeAreaView>
  );
}

const containStyle = { backgroundColor: '#FFF', }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
