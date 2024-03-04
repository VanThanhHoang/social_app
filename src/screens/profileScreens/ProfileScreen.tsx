import { ScrollView, Animated, StyleSheet, View } from 'react-native';
import React, { useRef } from 'react';
import HeaderProfile from './component/HeaderProfile';
import ProfileUser from './component/ProfileUser';
import TopTabProfile from './component/TopTabProfile';

const ProfileScreen = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const translateY = scrollY.interpolate({
    inputRange: [0, 450],
    outputRange: [0, -450],
    extrapolate: 'clamp',
  });

  // Giả sử chiều cao của HeaderProfile là 60
  const headerHeight = 50;

  return (
    <View style={styles.container}>
      <View style={[styles.headerContainer, {height: headerHeight}]}>
        <HeaderProfile nameTitle="Profile" iconTick={true} />
      </View>
      <Animated.View style={{flex: 1, transform: [{ translateY }], marginTop: headerHeight }}>
        <View style={styles.profileUserContainer}>
          <ProfileUser />
        </View>
        <TopTabProfile scrollY={scrollY} />
      </Animated.View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileUserContainer: {
    zIndex: 2, // Ensure the profile user stays above the tabs when scrolling
  },
  headerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 3, // Ensure the header stays above everything
  },
});