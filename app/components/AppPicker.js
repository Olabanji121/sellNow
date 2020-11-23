import React from 'react'
import { TextInput, View, StyleSheet, Platform } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import defaultStyles from '../config/styles'
import AppText from './AppText'

const AppPicker = ({ icon, placeholder, ...otherProps }) => {
  return (
    <View style={styles.container}>
      {icon && < MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.iconContainer} />}
      <AppText style={[styles.text, { color: defaultStyles.colors.black }]}>
        {placeholder}
      </AppText>
      < MaterialCommunityIcons name='chevron-down' size={20} color={defaultStyles.colors.medium} />
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
  },
  text: {
    flex: 1,
  }
})
export default AppPicker
