import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderBarEditBio from '@/component/HeaderBarEditBio'
import BioCard from '@/component/BioCard'

const EditBioScreen = () => {
  return (
    <View style = {styles.Container}>
      <HeaderBarEditBio backProfile='Cancel' title='EditBio' done='Done'/>
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