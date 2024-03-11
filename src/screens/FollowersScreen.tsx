import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';

const FollowersScreen = () => {
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.headerIcon} onPress={handleBack}>
          <FontAwesomeIcon icon={faChevronLeft} />
          <Text style={styles.textBack}>Back</Text>
        </TouchableOpacity>
        <View style={styles.headerName}>
          <Text>Travis scott</Text>
        </View>
      </View>
    </View>
  );
};

export default FollowersScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '100%',
    paddingHorizontal: 16,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 24,
    justifyContent: 'flex-start',
  },
  headerIcon: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerName: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 96,
  },
  textBack: {
    marginHorizontal: 5,
  },
});
