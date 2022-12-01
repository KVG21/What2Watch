import { View, Text, TouchableOpacity, TextInput, FlatList, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import styles from '../../styles/homescreen'
import UnderlineTextbox from '../../materialComponents/UnderlineTextbox'
import {getAuth, sendPasswordResetEmail, deleteUser} from 'firebase/auth'

export default function AccountSettingsScreen() {

  const navigation = useNavigation();
  const [email, setEmail] = useState('')
  const auth = getAuth()
  const uid = uid;
  let creationTime = auth.currentUser.metadata.creationTime


  const updatePassword = () => {
    sendPasswordResetEmail(getAuth(), email)
    .then(() => {
      alert("Password reset email sent")
    }).catch(error => alert(error.message))
  }

  const handleDeleteUser = () => {
    const user = auth.currentUser
      deleteUser(user).then(() => {
        navigation.replace("Signup")
      }).catch(error => alert(error.message))
    }

  return (
    <View style={styles.container}
    behavior="padding">
      <TouchableOpacity
          style={styles.button}>
          <Text style={styles.buttonText}>{auth.currentUser?.email}</Text>
          <Text style={styles.buttonText}>Creation time: {creationTime}</Text>
        </TouchableOpacity>

        <UnderlineTextbox
        setEmail = { setEmail }
        email = { email }
        style={styles.underlineTextbox}/>
        <TouchableOpacity
          onPress={updatePassword}
          style={styles.button}>
          <Text style={styles.buttonText}>Reset via email</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={() => Alert.alert(
          'Alert',
          'Are you sure?',
          [
            {text: 'Cancel', onPress: () => console.log('Canceled')},
            {text: 'Delete account', onPress: handleDeleteUser},
          ],
          { cancelable: false }
          )}
          style={styles.button}>
          <Text style={styles.buttonText}>Delete Account</Text>
        </TouchableOpacity>
</View>

  )
}
