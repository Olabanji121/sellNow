import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import AppText from './AppText'
import colors from '../config/color'
import color from '../config/color'

const ListItem = ({ title, subTitle, image }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View>
        <AppText style={styles.title}>
          {title}
        </AppText>
        <AppText style={styles.subTitle}>
          {subTitle}
        </AppText>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.black,
  },
  subTitle: {
    fontSize: 20,
    color: colors.medium,
    fontWeight: '500',
    marginVertical: 2,
  }

})
export default ListItem
