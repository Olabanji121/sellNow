import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import AppButton from '../components/AppButton'

const WelcomeScreen = () => {
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.background}
      source={require('../assets/background.jpg')}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text style={styles.tagLine}>Sell What You Dont Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title='Login' />
        <AppButton title='Register' color='secondary' />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // position: 'relative'
  },
  buttonContainer: {
    width: '100%',
    padding: 20,
  },
  regButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#4ecdc4',
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center'
  },
  logo: {
    width: 100,
    height: 100,
  },
  tagLine: {
    fontSize: 20,
    fontWeight: '600',
    paddingVertical: 20,
  }
})

export default WelcomeScreen
