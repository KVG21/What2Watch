import React, { useState } from "react";
import { StyleSheet, View, TextInput, Pressable } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

function IconTextbox({style, setPassword, password}) {
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [rightIcon, setRightIcon] = useState('eye');

    const handlePasswordVisibility = () => {
        if (rightIcon === 'eye') {
            setRightIcon('eye-off');
            setPasswordVisibility(!passwordVisibility);
        } else if (rightIcon === 'eye-off'){
            setRightIcon('eye');
            setPasswordVisibility(!passwordVisibility);

        }
    }

  return (
    <View style={[styles.container, style]}>
      <TextInput placeholder="password" value = {password} placeholderTextColor="grey" style={styles.inputStyle} secureTextEntry={passwordVisibility} onChangeText={text => setPassword(text)}></TextInput>
      <Pressable onPress={handlePasswordVisibility}>
        <MaterialCommunityIcons name={rightIcon} size={24} color="#616161" />
      </Pressable>
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
    paddingRight: 16,
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    paddingTop: 14,
    paddingBottom: 8,
    left: 0,
    width: 343,
    top: 0,
    height: 42
  },
  iconStyle: {
    color: "#616161",
    fontSize: 24,
    paddingRight: 8
  }
});

export default IconTextbox;
