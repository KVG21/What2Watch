import { View, Text, TouchableOpacity, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import styles from '../../styles/account'
import UnderlineTextbox from '../../materialComponents/UnderlineTextbox'
import {getAuth, sendPasswordResetEmail, deleteUser} from 'firebase/auth'
import Icon from "react-native-vector-icons/Ionicons";

export default function AccountSettingsScreen() {

  const navigation = useNavigation();
  const [email, setEmail] = useState('')
  const auth = getAuth()
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
  <View style={styles.container}>

      <View style={styles.userContainer}>
        <Icon name="person-circle-outline" style={styles.icon}></Icon>
        <Text style={styles.email}>{auth.currentUser?.email}</Text>
      </View>
      <Text style={styles.text}>Creation time: {creationTime}</Text>

    <View style={styles.optionsContainer}>
      <View>
        <Text style={styles.text}>Reset password:</Text>
          <UnderlineTextbox
          setEmail = { setEmail }
          email = { email }
          style={styles.underlineTextbox}/>
        </View>

        <TouchableOpacity
            onPress={updatePassword}
            style={styles.button}>
            <Text style={styles.buttonText}>Send password reset request</Text>
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
  </View>
  )
}
