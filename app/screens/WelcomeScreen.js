import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'

const WelcomeScreen = () => {
  return (
    <ImageBackground style={styles.background} source={require('../assets/background.jpg')}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text>Sell What You Dont Need</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.regButton}></View>
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
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#fc5c65',
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
  }
})

export default WelcomeScreen
