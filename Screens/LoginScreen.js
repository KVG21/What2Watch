import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { getAuth,onAuthStateChanged,signInWithEmailAndPassword } from '../firebase'
import UnderlineTextbox from '../materialComponents/UnderlineTextbox'
import IconTextbox from '../materialComponents/IconTextbox'
import styles from '../styles/login'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation()


  const handleLogin = () => {
    const auth = getAuth()
      signInWithEmailAndPassword(auth,email, password)
      .then( () => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            navigation.replace("Home")
          }
        })
      })
      .catch(error => alert(error.message))
  }

  const anonymosLogin = () =>   {
    navigation.replace("Home")
  }

  const notUser = () => {
    navigation.navigate("Signup")
  }

  const forgotPassword = () => {
    navigation.navigate("forgotPassword")
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

        <TouchableOpacity
          onPress={forgotPassword}
          style={styles.button}>
          <Text style={styles.buttonText}>Forgot password? Reset via email</Text>
        </TouchableOpacity>
    </View>
  )
}

export default LoginScreen