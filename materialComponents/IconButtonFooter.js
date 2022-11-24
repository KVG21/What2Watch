import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function IconButtonsFooter({style, setScreen}) {
  return (
    <View style={[styles.container, style]}>
      
      <TouchableOpacity onPress = {() => setScreen(1) }>
        <MaterialCommunityIconsIcon
          name="video-vintage"
          style={styles.icon}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>

        <TouchableOpacity onPress = {() => setScreen(2)}>
            <MaterialCommunityIconsIcon
            name="television"
            style={styles.icon}
            ></MaterialCommunityIconsIcon>
        </TouchableOpacity>

        <TouchableOpacity onPress =  {() => setScreen(3)}>
            <MaterialCommunityIconsIcon
            name="star-face"
            style={styles.icon}
            ></MaterialCommunityIconsIcon>
        </TouchableOpacity>

        <TouchableOpacity onPress = {() => setScreen(4)}>
            <MaterialCommunityIconsIcon
            name="account"
            style={styles.icon}
            ></MaterialCommunityIconsIcon>
        </TouchableOpacity>
        
      <TouchableOpacity onPress = {() => setScreen(5)}>
        <MaterialCommunityIconsIcon
          name="door"
          style={styles.icon}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 380,
    height:60,
    backgroundColor: "rgba(94,53,177,1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  icon: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 32,
    opacity: 0.8,
  },
});

export default IconButtonsFooter;