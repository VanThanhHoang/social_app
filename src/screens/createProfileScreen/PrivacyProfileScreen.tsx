import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import HeaderBarEditProfile from '@/component/HeaderBarEditProfile'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import PrivacyComponent from '@/component/PrivacyComponent';
import PlantIcon from '@/assets/icons/PlantIcon'
import PrivateIcon from '@/assets/icons/PrivateIcon';
import ButtonBottom from '@/component/ButtonBottom';
const PrivacyProfileScreen = () => {
  const [selectedPrivacyOption, setSelectedPrivacyOption] = useState('Public Profile');
  const handleNext = () => {
    Alert.alert('Thằng thành ngu ngốc')
  }
  return (
    <View style={styles.Container}>
      <View>
        <HeaderBarEditProfile 
                back='Back'
                IconBackComponent={<FontAwesomeIcon icon={faChevronLeft} size={15} color="#000" style={{ marginRight: 8 }} />}/>
        <View style={styles.TitleProfileContainer}>
          <Text
            style={styles.TitleProfile}>Privacy</Text>
          <Text style={styles.TitleProfileCustomize}>Your privacy on VNPIC can be different</Text>
        </View>
        <TouchableOpacity onPress={() => setSelectedPrivacyOption('Public Profile')}>
          <PrivacyComponent 
            TitleStatus='Public Profile' 
            TitleDetail='Anyone on Verses can see, share and interact with your content.' 
            borderColor={selectedPrivacyOption === 'Public Profile' ? '#5E4EA0' : '#C8C8C8'}
            IconComponent={<PlantIcon />}
            isSelected={selectedPrivacyOption === 'Public Profile'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedPrivacyOption('Private Profile')}>
          <PrivacyComponent 
          TitleStatus='Private Profile' 
          TitleDetail='Only your approve followers can see and interact with your content.' 
          borderColor={selectedPrivacyOption === 'Private Profile' ? '#5E4EA0' : '#C8C8C8'}
          IconComponent={<PrivateIcon />}
          isSelected={selectedPrivacyOption === 'Private Profile'} />
        </TouchableOpacity>
      </View>
      <ButtonBottom onPress={handleNext} title='Next' />
    </View>
  )
}

export default PrivacyProfileScreen

const styles = StyleSheet.create({
  TitleProfileCustomize: {
    fontSize: 18,
    fontFamily: 'Roboto',
    fontWeight: '400',
    color: '#767676',
    marginTop: 12,
    marginBottom: 82,
  },
  TitleProfile: {
    fontSize: 32,
    fontFamily: 'Roboto',
    fontWeight: '700',
    marginTop: 104,
    color: '#5E4EA0',
  },
  TitleProfileContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  BackContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    justifyContent: 'space-between',
  },
})