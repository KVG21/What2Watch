import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import styles from '../../styles/homescreen'
import IconTextbox from '../../materialComponents/IconTextbox'
import UnderlineTextbox from '../../materialComponents/UnderlineTextbox'
import * as firebase from '../../firebase'
import {getAuth, sendPasswordResetEmail} from '../../firebase'

export default function AccountSettingsScreen() {

  const navigation = useNavigation();
  const [email, setEmail] = useState('')

  const updatePassword = () => {
    const auth = getAuth()
    sendPasswordResetEmail(getAuth(), email)
    .then(() => {
      alert("Password reset email sent")
    }).catch(error => alert(error.message))
  }


  return (
    <View style={styles.container}
    behavior="padding">
        <UnderlineTextbox
        setEmail = { setEmail }
        email = { email }
        style={styles.underlineTextbox}
      />
        <TouchableOpacity
          onPress={updatePassword}
          style={styles.button}>
          <Text style={styles.buttonText}>Reset via email</Text>
        </TouchableOpacity>
</View>

  )
}
