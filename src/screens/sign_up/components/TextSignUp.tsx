import { StyleSheet, Text, Touchable, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '@/theme'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { LoginStackEnum, LoginStackParamList } from '@/navigation/login'

const TextSignUp = () => {
  const navigation = useNavigation<NativeStackNavigationProp<LoginStackParamList>>();
  return (
    <View style={styles.container}>
      <Text>Don't have an account? </Text>
      <TouchableOpacity onPress={() =>navigation.navigate(LoginStackEnum.SignUpScreen)}>
        <Text style={{ color: colors.purple }}>Sign up</Text>
      </TouchableOpacity>
    </View>
  )
}

export default TextSignUp

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
})