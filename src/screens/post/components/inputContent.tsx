import { colors } from "@/theme";
import { StyleSheet, TextInput } from "react-native";
import React from "react";

const InputContent = () => {
  return <TextInput
    cursorColor={colors.primaryColor}
    multiline={true}
    placeholderTextColor={colors.neutralWhite}
    placeholder={"Write your thought..."}
    style={styles.inputContent} />;
};

export default InputContent;

const styles = StyleSheet.create({
  inputContent: {
    fontSize: 16,
    fontWeight: "400",
    color: colors.neutralBlack,
    paddingVertical: 16
  }
});
