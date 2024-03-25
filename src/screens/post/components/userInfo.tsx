import {Image, StyleSheet, Text, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCertificate} from '@fortawesome/free-solid-svg-icons';
import {colors} from '@/theme';
import React from 'react';

const user = {
  name: 'Travis Scott',
  avatar:
    'https://s3-alpha-sig.figma.com/img/b374/4087/3a814e032fd5306e0a3963ed08cc2bfb?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=muDb~relMxIg9yPvINIc5h2giZLvb6FzLOyhaQUsHF-MqcnZ-DlU3IX2l5-2eP6VbYZtF~1P8cw~CLXZnruZVZJF21hvZJapbbW4vd7IcGeRxAXEiWk1rciLThA8cWbOT9NCjNC54hNNBjHcc9YXkw7AWEAFLjGiVNDCVt9A20tLf6a2sRpa6zEobkThAMi82~lg4~OzI~6G1D2Jea16RC-iTOv1j6EYLkFR5356q~Un0Ahamz9Ej1K6F4yxhLhIzDIE3XXsGCfSWE8HEwjy5P6DFS~XwW9FizloJaW7fn450GW8moeD5fwpyLw8-9cdn8zY8Q5ugbh5Ouvv47V1Qw__',
};

const UserInfo = () => {
  return (
    <View style={styles.userInfo}>
      <Image source={{uri: user.avatar}} style={styles.avatar} />
      <Text style={styles.usernameText}>{user.name}</Text>
      <FontAwesomeIcon
        icon={faCertificate}
        color={colors.certificationColor}
        size={16}
      />
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
});
