import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderBarEditBio from '@/screens/createProfileScreen/component/HeaderBarEditBio'
import BioCard from './component/BioCard'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { LoginStackParamList } from '@/navigation/login'

const EditLinkScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<LoginStackParamList>>();
    const goBack = () => {
        navigation.goBack();
    }
  return (
    <View style = {styles.Container}>
      <HeaderBarEditBio backProfile='Cancel' title='EditLink' done='Done' onPress={goBack}/>
      <BioCard title='Link' placeholder='Write a Link...'/>  
    </View>
  )
}

export default EditLinkScreen

const styles = StyleSheet.create({
  
  Container:{
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
})