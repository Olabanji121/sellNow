import React from 'react';
import { StyleSheet, View, SafeAreaView, Dimensions } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'

export default function App() {
  console.log(useDimensions());
  const { landscape } = useDeviceOrientation();

  return (
    <SafeAreaView style={[styles.container, containStyle]}>
      <View style={{
        backgroundColor: 'dodgerblue',
        width: '100%',
        height: landscape ? '100%' : '30%',

      }}>

      </View>

    </SafeAreaView>
  );
}

const containStyle = { backgroundColor: '#FFF', }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
