import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface ButtonBottomProps {
  title: string
}

const ButtonBottom: React.FC<ButtonBottomProps> = ({title}) =>{
  return (
    <View>
      <TouchableOpacity style = {styles.Container}>
        <Text style ={styles.TitleStyle}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ButtonBottom

const styles = StyleSheet.create({
  TitleStyle:{
    fontSize: 18,
    fontFamily: 'Roboto',
    fontWeight: '500',
    color: '#FFFFFF',
  },
  Container:{
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: '#5E4EA0',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
})