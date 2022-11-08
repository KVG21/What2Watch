import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

function UnderlineTextbox(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TextInput
        placeholder="email"
        placeholderTextColor="grey"
        style={styles.inputStyle}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center"
  },
  inputStyle: {
    color: "white",
    paddingRight: 5,
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    paddingTop: 16,
    paddingBottom: 8
  }
});

export default UnderlineTextbox;
