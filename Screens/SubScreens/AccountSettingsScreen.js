import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import styles from '../../styles/homescreen'
import IconTextbox from '../../materialComponents/IconTextbox'
import { getAuth, updatePassword, reauthenticateWithCredential, EmailAuthProvider} from '../../firebase'

export default function AccountSettingsScreen() {
  const navigation = useNavigation();
  const auth = getAuth();
  const  newPassword = changePassword();

  const reauthenticateWithCredential = (currentPassword, newPassword) => {
    const user = getAuth().currentUser;
    const cred = EmailAuthProvider.credential(user.email, currentPassword);
    reauthenticateWithCredential(user, cred);
    return user.reauthenticateWithCredential(cred);
}

const changePassword = (currentPassword, newPassword) => {
  this.reauthenticateWithCredential(currentPassword).then(() => {
    const user = getAuth().currentUser;
    user.updatePassword(newPassword).then(() => {
    console.log("Password updated");
    }).catch(error => alert(error.message))
  })}

  return (
    <View style={styles.container}
    behavior="padding">
      <TextInput
          placeholder="Password"
          value={updatePassword}
          onChangeText={text => newPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      <TouchableOpacity
        onPress={updatePassword}
        style={styles.button}>
        <Text style={styles.buttonText}>update Password</Text>
      </TouchableOpacity>
    </View>
  )
}
