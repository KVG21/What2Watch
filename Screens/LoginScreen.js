import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { getAuth,onAuthStateChanged,signInWithEmailAndPassword } from '../firebase'
import UnderlineTextbox from '../materialComponents/UnderlineTextbox'
import IconTextbox from '../materialComponents/IconTextbox'
import styles from '../styles/login'
import Toast from 'react-native-toast-message';

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

  const showToast = () => {
    Toast.show({
      position: 'top',
      text1: 'Login was succesful',
      visibilityTime: 5000,
    });
  }

  return (
    <View
      style={styles.container}
      behavior="padding"
    >
      <Toast />

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

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={ () => {handleLogin(); showToast()}}
          style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={notUser}
          style={styles.button}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={anonymosLogin}
          style={styles.button}>
          <Text style={styles.buttonText}>Login without account</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={forgotPassword}
          style={styles.button}>
          <Text style={styles.buttonText}>Forgot password?</Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}

export default LoginScreen