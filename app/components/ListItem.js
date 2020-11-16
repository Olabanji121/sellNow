import React from 'react'
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native'
import AppText from './AppText'
import colors from '../config/color'
import Swipeable from 'react-native-gesture-handler/Swipeable'


const ListItem = ({ title, subTitle, image, IconComponent, onPress, renderRightActions }) => {
  return (
    <Swipeable
      renderRightActions={renderRightActions}
    >
      <TouchableHighlight
        onPress={onPress}
        underlayColor={colors.light}
      >
        <View style={styles.container}>
          {IconComponent}
          {image && <Image source={image} style={styles.image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>
              {title}
            </AppText>
            {subTitle && <AppText style={styles.subTitle}>
              {subTitle}
            </AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
  },

  detailsContainer: {
    marginLeft: 10,
    justifyContent: 'center'
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
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
