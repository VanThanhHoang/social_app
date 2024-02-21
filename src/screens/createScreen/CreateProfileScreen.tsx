import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import ProfileCard from '@/component/ProfileCard'
import Botton from '@/component/ButtonBottom'
import ButtonBottom from '@/component/ButtonBottom'

const CreateProfileScreen = () => {
  return (
    <View style = {styles.CreateProfileContainer}>
      <View style={{flex: 1}}>
        <TouchableOpacity style = {styles.SkipContainer}>
          <Text style = {styles.SkipTitle}>Skip</Text>
          <FontAwesomeIcon icon={ faChevronRight } size={ 15 } color="#000" />
        </TouchableOpacity>
        <View style = {styles.TitleProfileContainer}>
          <Text style = {styles.TitleProfile}>Profile</Text>
          <Text style = {styles.TitleProfileCustomize}>Customize your VNPIC profile.</Text>
        </View>
        <ProfileCard/>
        </View>
        <ButtonBottom title='Next'/>
    </View>
  )
}

export default CreateProfileScreen

const styles = StyleSheet.create({
  TitleProfileCustomize:{
    fontSize: 18,
    fontFamily: 'Roboto',
    fontWeight: '400',
    color:'#767676',
    marginTop: 12,
  },
  TitleProfile:{
    fontSize: 32,
    fontFamily: 'Roboto',
    fontWeight: '700',
    marginTop: 151,
    color:'#5E4EA0',
  },
  TitleProfileContainer:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  SkipTitle:{
    fontSize: 18,
    fontFamily: 'Roboto',
    color: '#000',
    fontWeight: '400',
    marginRight: 8,
  },
  SkipContainer:{
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  CreateProfileContainer:{
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
    justifyContent: 'space-between',
  }
})