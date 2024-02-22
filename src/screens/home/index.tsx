import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Modal1 from './components/Modal'
import Header from './components/Header'

const HomeScreen = () => {
  return (
    <View>
        <Modal1 />
        <Header />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})