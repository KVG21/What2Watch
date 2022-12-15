import { View, Text, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import UnderlineTextbox from '../materialComponents/UnderlineTextbox'
import styles from '../styles/login'
import {getAuth, sendPasswordResetEmail} from '../firebase'


const ForgotPasswordScreen = () => {

    const navigation = useNavigation();
    const [email, setEmail] = useState('') // email parameter

    const updatePassword = () => { // update password via sending user an email
        sendPasswordResetEmail(getAuth(), email)
        .then(() => {
          alert("Password reset email sent")
        }).catch() 
      }

    const backLogin = () => { // navigate back to login
        navigation.navigate("Login")
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
          <TouchableOpacity
            onPress={backLogin}
            style={styles.button}>
            <Text style={styles.buttonText}>Go back</Text>
          </TouchableOpacity>
        </View>
  )
}

export default ForgotPasswordScreen 

