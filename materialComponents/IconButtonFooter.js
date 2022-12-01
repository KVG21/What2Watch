import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Alert } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {getAuth, signOut} from '../firebase'
import { useNavigation } from "@react-navigation/native";


function IconButtonsFooter({style, setScreen, isAnonymous}) {

  const navigation = useNavigation()
  const handleSignOut = () => {
    const auth = getAuth()
      signOut(auth)
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  return (
    <View style={[styles.container, style]}>
      
      <TouchableOpacity onPress = {() => setScreen(1) }>
        <Icon
          name="film-outline"
          style={styles.icon}
        ></Icon>
      </TouchableOpacity>

        <TouchableOpacity onPress = {() => setScreen(2)}>
            <Icon
            name="tv-outline"
            style={styles.icon}
            ></Icon>
        </TouchableOpacity>
      {isAnonymous ? (<>
        <TouchableOpacity onPress =  {() => setScreen(3)}>
            <Icon
            name="star"
            style={styles.icon}
            ></Icon>
        </TouchableOpacity>

        <TouchableOpacity onPress = {() => setScreen(4)}>
            <Icon
            name="person"
            style={styles.icon}
            ></Icon>
        </TouchableOpacity>
      </>) : (<>
        <TouchableOpacity onPress={() => handleSignOut()}>
            <View style={styles.profileCont}>
                <Icon
                    name='log-out-outline'
                    style={styles.icon}
                ></Icon>
                </View>
        </TouchableOpacity>
     </>)} 
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