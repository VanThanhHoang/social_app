import { ScrollView, Animated, StyleSheet, View } from 'react-native';
import React, { useRef } from 'react';
import HeaderProfile from '../profileScreens/component/HeaderProfile';
import ProfileUserSearch from './component/ProfileUserSearch';
import TopTabProfile from '../profileScreens/component/TopTabProfile';
import { useTranslation } from 'react-i18next';
import { useRoute } from '@react-navigation/native';
import { SearchStackParamList, SearchStackNames } from '@/navigation/SearchNavigator/config';
import { RouteProp } from '@react-navigation/native';

type UserProfileDetailRouteProp = RouteProp<SearchStackParamList, SearchStackNames.UserProfileDetail>;
const UserProfileDetail = () => {
    const route = useRoute<UserProfileDetailRouteProp>();
  const { userId } = route.params;
  const { userName } = route.params;
  console.log('userId: ', userId);
  console.log('userName: ', userName);
  const {t} = useTranslation();
  const scrollY = useRef(new Animated.Value(0)).current;
  const translateY = scrollY.interpolate({
    inputRange: [0, 550],
    outputRange: [0, -373],
    extrapolate: 'clamp',
  });

  // Giả sử chiều cao của HeaderProfile là 60
  const headerHeight = 50;

  return (
    <View style={styles.container}>
      <View style={[styles.headerContainer]}>
        <HeaderProfile    nameTitle={userName} iconTick={true} />
      </View>
      <View style={{flex:1,}}>
        <Animated.View style={{ transform: [{ translateY }], marginTop: headerHeight }}>
          <View style={styles.profileUserContainer}>
            <ProfileUserSearch userId={userId} />
          </View>
          <View style={{ height: "100%" }}>
            <TopTabProfile scrollY={scrollY} />
          </View>
        </Animated.View>
      </View>
    </View>
  );
};
export default UserProfileDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileUserContainer: {
   // Ensure the profile user stays above the tabs when scrolling
  },
  headerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 3, // Ensure the header stays above everything
  },
});