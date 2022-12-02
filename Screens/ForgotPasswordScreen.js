import { View, Text, TouchableOpacity, TextInput, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import UnderlineTextbox from '../materialComponents/UnderlineTextbox'
import styles from '../styles/login'
import {getAuth, sendPasswordResetEmail} from '../firebase'


const ForgotPasswordScreen = () => {

    const navigation = useNavigation();
    const [email, setEmail] = useState('')
    const auth = getAuth()

    const updatePassword = () => {
        sendPasswordResetEmail(getAuth(), email)
        .then(() => {
          alert("Password reset email sent")
        }).catch(error => alert(error.message))
      }

    const backLogin = () => {
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
        </View>
  )
}

export default ForgotPasswordScreen 

