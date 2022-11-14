import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { auth } from '../firebase'
import SingupScreen from './SingupScreen'
import UnderlineTextbox from '../materialComponents/UnderlineTextbox'
import IconTextbox from '../materialComponents/IconTextbox'
import styles from '../styles/login'

const LoginScreen = () => {
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

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message))
  }
  const anonymosLogin = () =>   {

    navigation.replace("Home")
  }

  const notUser = () => {
    navigation.navigate("Signup")
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
          secureTextEntry={true}
        />

        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={notUser}
          style={styles.buttonOutline}>
          <Text style={styles.buttonOutlineText}>Not a user? Signup</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={anonymosLogin}
          style={styles.button}>
          <Text style={styles.buttonText}>Anonymous Login</Text>
        </TouchableOpacity>

    </View>
  )
}

export default LoginScreen
