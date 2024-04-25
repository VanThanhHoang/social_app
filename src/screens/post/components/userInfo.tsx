import {Image, StyleSheet, Text, View} from 'react-native';
import {colors} from '@/theme';
import React from 'react';
import {icons} from '@/assets';

const user = {
  name: 'Travis Scott',
  avatar:
    'https://firebasestorage.googleapis.com/v0/b/vnpic-6613b.appspot.com/o/files%2FScreenshot%202024-04-16%20203641.png2024-4-246%3A47%3A43?alt=media&token=77508402-6e87-4312-87e5-b4c9e8fcebe5',
};

const UserInfo = () => {
  return (
    <View style={styles.userInfo}>
      <Image source={{uri: user.avatar}} style={styles.avatar} />
      <Text style={styles.usernameText}>{user.name}</Text>
      <Image source={icons.tick} style={styles.tick} />
    </View>
  );
};
export default UserInfo;

const styles = StyleSheet.create({
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  usernameText: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 12,
    marginRight: 8,
    color: colors.neutralBlack,
  },
  tick: {
    width: 16,
    height: 16,
  },
});
