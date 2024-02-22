import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Modal1 from './components/Modal'
import Header from './components/Header'
import BtnS from './components/BottomSheet'


const HomeScreen = () => {
  return (
    <View  >
        <Modal1 />
        <Header />
        
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})