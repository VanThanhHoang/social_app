import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Toast from 'react-native-toast-message';



const toastConfig = {
  success: (props: any) => (
    <View style={styles.CustumToast}>
      <Text style={{ color: 'black',fontSize:14,fontWeight:"400",marginStart:10 }}>{props.text1}</Text>
    </View>
  ),
};
const Toast = () => {
  return (
    <Toast />
  )
}

export default Toast

const styles = StyleSheet.create({})