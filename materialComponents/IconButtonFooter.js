import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Dimensions, Text } from "react-native";
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

      <View style = { styles.footerButton}>
        <TouchableOpacity onPress = {() => setScreen(1) }>
          <Icon
            name="film-outline"
            style={styles.icon}
          ></Icon>
          <Text style={styles.text}>Movies</Text>
        </TouchableOpacity>
      </View>

      <View style = { styles.footerButton}>
        <TouchableOpacity onPress = {() => setScreen(2)}>
            <Icon
            name="tv-outline"
            style={styles.icon}
            ></Icon>
          <Text style={styles.text}>Series</Text>
        </TouchableOpacity>
      </View>

      {isAnonymous ? (<>
      <View style = { styles.footerButton}>
        <TouchableOpacity onPress =  {() => setScreen(3)}>
            <Icon
            name="star"
            style={styles.icon}
            ></Icon>
            <Text style={styles.text}>For you</Text>
        </TouchableOpacity>
      </View>  

      <View style = { styles.footerButton}>
        <TouchableOpacity onPress = {() => setScreen(4)}>
            <Icon
            name="person"
            style={styles.icon}
            ></Icon>
        <Text style={styles.text}>Profile</Text>            
        </TouchableOpacity>
      </View>
      </>) : (<>

      <View style = { styles.footerButton}>
        <TouchableOpacity onPress={() => handleSignOut()}>
            <View style={styles.profileCont}>
                <Icon
                    name='log-out-outline'
                    style={styles.icon}
                ></Icon>
                <Text style={styles.text}>Log out</Text>
                </View>
        </TouchableOpacity>
      </View>
     </>)} 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
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
  text:{
    color:'white',
    fontSize:10,
  },
  footerButton:{
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default IconButtonsFooter;