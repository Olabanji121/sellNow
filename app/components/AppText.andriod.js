import React from 'react'
import { Text, StyleSheet } from 'react-native'

const AppText = ({ children, style }) => {
  return (
    <Text style={[styles.text, style]}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    color: 'tomato',
    fontSize: 32,
    fontFamily: 'Roboto',
  }
})

export default AppText;