import React, { Children } from 'react'
import Constants from 'expo-constants'
import { SafeAreaView, StyleSheet, View, Platform } from 'react-native'

const Screen = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={Platform.OS === 'ios' && style}>
        {children}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  }
})
export default Screen
