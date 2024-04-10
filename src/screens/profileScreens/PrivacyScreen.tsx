import { StyleSheet, Text, View, } from 'react-native'
import React, { useState } from 'react'
import HeaderBar from './component/HeaderBar'
import ButtonSwitch from './component/ButtonSwitch'
import IconRinged from '@/assets/icons/IconRinged'
import IconPrivacy from '@/assets/icons/IconPrivacy'
import { RadioButton } from 'react-native-paper'


const PrivacyScreen = () => {
  const [checked, setChecked] = useState('everyone');
  return (
    <View style={styles.Container}>
      <HeaderBar title='Privacy' />
      <ButtonSwitch title='Your profile is private' iconOn={<IconRinged />} iconOff={<IconPrivacy />} />
      <View style={styles.OptionContainer}>
        <Text style={styles.TextStyle1}>Allow mentions from</Text>
        <View style={styles.LineStyle}></View>
        <View style={styles.TextOptionStyle}>
          <Text style={styles.TextStyle2}>From everyone</Text>
          <RadioButton
            value="everyone"
            status={checked === 'everyone' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('everyone')}
          />
        </View>
        <View style={styles.LineStyle}></View>
        <View style={styles.TextOptionStyle}>
          <Text style={styles.TextStyle2}>Profiles you follow</Text>
          <RadioButton
            value="followed"
            status={checked === 'followed' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('followed')}
          />
        </View>
        <View style={styles.LineStyle}></View>
        <View style={styles.TextOptionStyle}>
          <Text style={styles.TextStyle2}>No one</Text>
          <RadioButton
            value="noone"
            status={checked === 'noone' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('noone')}
          />
        </View>
      </View>
    </View>
  )
}

export default PrivacyScreen

const styles = StyleSheet.create({
  TextStyle2: {
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: '400',
    color: '#2C2B2B',
  },
  TextOptionStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    paddingVertical: 12,
  },
  LineStyle: {
    height: 1,
    backgroundColor: '#F1F1F1',
  },
  TextStyle1: {
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: '700',
    color: '#2C2B2B',
    marginHorizontal: 16,
    paddingVertical: 12,
  },
  OptionContainer: {
    margin: 16,
    marginTop: 26,
    borderRadius: 12,
    paddingVertical: 12,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 5,
  },
  Container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})