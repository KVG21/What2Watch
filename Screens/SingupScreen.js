import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { auth } from '../firebase'
import UnderlineTextbox from '../materialComponents/UnderlineTextbox'
import IconTextbox from '../materialComponents/IconTextbox'
import LoginScreen from './LoginScreen'
import styles from '../styles/signup'


const SingupScreen = () => {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const navigation = useNavigation()

useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged(user => {
    if (user) {
      navigation.replace("Home")
    }
  })

  return unsubscribe
}, [])

const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
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
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.underlineTextbox}
      />

      <IconTextbox
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        style={styles.iconTextbox}
        secureTextEntry
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
