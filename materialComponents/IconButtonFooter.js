import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function IconButtonsFooter({style, setScreen}) {
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity onPress = {() => setScreen(1) }>
        <MaterialCommunityIconsIcon
          name="video-vintage"
          style={styles.icon1}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>

        <TouchableOpacity onPress = {() => setScreen(2)}>
            <MaterialCommunityIconsIcon
            name="television"
            style={styles.activeIcon}
            ></MaterialCommunityIconsIcon>
        </TouchableOpacity>

        <TouchableOpacity onPress =  {() => setScreen(3)}>
            <MaterialCommunityIconsIcon
            name="star-face"
            style={styles.icon3}
            ></MaterialCommunityIconsIcon>
        </TouchableOpacity>

        <TouchableOpacity onPress = {() => setScreen(4)}>
            <MaterialCommunityIconsIcon
            name="account"
            style={styles.icon4}
            ></MaterialCommunityIconsIcon>
        </TouchableOpacity>
        
      <TouchableOpacity onPress = {() => setScreen(5)}>
        <MaterialCommunityIconsIcon
          name="door"
          style={styles.icon4}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(94,53,177,1)",
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: -2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    elevation: 3
  },
  buttonWrapper1: {
    flex: 1,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center"
  },
  icon1: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24,
    opacity: 0.8
  },
  buttonWrapper2: {
    flex: 1,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center"
  },
  activeIcon: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24
  },
  buttonWrapper3: {
    flex: 1,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center"
  },
  icon3: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24,
    opacity: 0.8
  },
  buttonWrapper4: {
    flex: 1,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center"
  },
  icon4: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24,
    opacity: 0.8
  }
});

export default IconButtonsFooter;