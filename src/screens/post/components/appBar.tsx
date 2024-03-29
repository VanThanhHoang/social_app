import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '@/theme';

const AppBar = () => {
  return (
    <View style={styles.appBar}>
      <TouchableOpacity>
        <Text style={styles.cancelForeground}>Cancel</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.postBackground}>
        <Text style={styles.postForeground}>Post</Text>
      </TouchableOpacity>
    </View>
  );
};
export default AppBar;

const styles = StyleSheet.create({
  appBar: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    marginBottom: 20,
  },
  cancelForeground: {
    color: colors.black,
    fontSize: 18,
    fontWeight: '400',
  },
  postForeground: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '600',
  },
  postBackground: {
    backgroundColor: colors.primaryColor,
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
});
