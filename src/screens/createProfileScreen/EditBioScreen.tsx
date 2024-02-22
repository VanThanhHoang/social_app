import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderBarEditProfile from '@/component/HeaderBarEditProfile'
import BioCard from '@/component/BioCard'

const EditBioScreen = () => {
  return (
    <View style = {styles.Container}>
      <HeaderBarEditProfile backProfile='Cancel' title='EditBio' done='Done'/>
      <BioCard title='Bio'/>  
    </View>
  )
}

export default EditBioScreen

const styles = StyleSheet.create({
  
  Container:{
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
})