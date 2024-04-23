import { colors } from '@/theme';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Footer = () => {
  const [timeLeft, setTimeLeft] = useState(60);
  const [isWaiting, setIsWaiting] = useState(true);

  useEffect(() => {
    // Nếu không còn thời gian chờ, không làm gì cả
    if (!isWaiting) return;

    // Nếu thời gian còn lại là 0, cho phép gửi lại và dừng đếm ngược
    if (timeLeft === 0) {
      setIsWaiting(false);
      return;
    }

    // Giảm thời gian còn lại sau mỗi giây
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // Dọn dẹp
    return () => clearInterval(intervalId);
  }, [timeLeft, isWaiting]);

  const handleResendClick = () => {
    setTimeLeft(60);
    setIsWaiting(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Didn't receive email?</Text>
      {isWaiting ? (
        <Text style={styles.text2}>You can resend code in <Text style={styles.time}>{timeLeft}</Text> s</Text>
      ) : (
        <TouchableOpacity onPress={handleResendClick}>
          <Text style={styles.resendText}>Resend again</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
    text: {
        color: colors.black,
        fontWeight:"500"
    },
    text2: {
        color: colors.black,
        fontWeight:"500"
    },
    time: {
        color: colors.purple,
    },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  resendText: {
    color: 'blue',
    marginTop: 10,
  },
});