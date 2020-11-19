import React from 'react'
import { TextInput, View, StyleSheet, Platform } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import defaultStyles from '../config/styles'

const AppTextInput = ({ icon, ...otherProps }) => {
  return (
    <View style={styles.container}>
      {icon && < MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.iconContainer} />}
      <TextInput style={[styles.textInput, defaultStyles.text]} {...otherProps} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10,
  },
  textInput: {
    width: '90%',
  },
  iconContainer: {
    marginRight: 10,
    marginVertical: 2,
  }
})
export default AppTextInput
