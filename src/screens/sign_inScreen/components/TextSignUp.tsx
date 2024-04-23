import { StyleSheet, Text, Touchable, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '@/theme'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { LoginStackEnum, LoginStackParamList } from '@/navigation/login'



const TextSignUp2 = () => {
  const navigation = useNavigation<NativeStackNavigationProp<LoginStackParamList>>();
  return (
    <View style={styles.container}>
      <Text>Already hava an account? </Text>
      <TouchableOpacity onPress={() =>navigation.navigate(LoginStackEnum.SignInScren)}>
        <Text style={{ color: colors.purple }}>Sign in</Text>
      </TouchableOpacity>
    </View>
  )
}

export default TextSignUp2

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
})