import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Toast from 'react-native-toast-message';
import { colors } from '@/theme';



const toastConfig = {
  success: (props: any) => (
    <View style={styles.CustumToast}>
      <Text style={{ color: 'black',fontSize:14,fontWeight:"400",marginStart:10 }}>{props.text1}</Text>
    </View>
  ),
};
const CustumToast = () => {
  return (
    <Toast />
  )
}

export default CustumToast

const styles = StyleSheet.create({
  CustumToast: {
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 8,
    width: 356,
    height: 70,
    borderLeftColor: colors.purple,
    borderLeftWidth: 4,
    justifyContent: 'center',
  },
})