import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


interface HeaderForgotProps {
  title: string,
  title2: string
}
const HeaderForgot:React.FC<HeaderForgotProps> = ({...props}) => {
  return (
    <View>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.title2}>{props.title2}</Text>
    </View>
  )
}

export default HeaderForgot

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: '700',
        color: '#000',
        marginTop: 24,
    },
    title2: {
        fontSize: 15,
        color: '#7E7E7E',
        marginTop: 8,
    },
})