import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { getAuth,onAuthStateChanged,createUserWithEmailAndPassword } from '../firebase'
import UnderlineTextbox from '../materialComponents/UnderlineTextbox'
import IconTextbox from '../materialComponents/IconTextbox'
import LoginScreen from './LoginScreen'
import styles from '../styles/signup'


const SingupScreen = () => {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const navigation = useNavigation()

const handleSignUp = () => {
  console.log(email, password)
    const auth = getAuth()
      createUserWithEmailAndPassword(auth,email, password)
      .then( () => onAuthStateChanged(auth, (user) => {
        if (user) {
          navigation.replace("Home")
        }
      }))
      .catch(error => alert(error.message))
  }

  const registerUser = () => {
    navigation.navigate("Login")
  }

  return (
    <View
    style={styles.container}
    behavior="padding"
  >
      <UnderlineTextbox
        setEmail = { setEmail }
        email = { email }
        style={styles.underlineTextbox}
      />

      <IconTextbox      
        setPassword = { setPassword }
        password = {password}
        style={styles.iconTextbox}
      />

      <TouchableOpacity
        onPress={handleSignUp}
        style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={registerUser}
        style={styles.buttonOutline}>
        <Text style={styles.buttonOutlineText}>Existing user? Login</Text>
      </TouchableOpacity>
  </View>
  )
}

export default SingupScreen