import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { signInAnonymously } from 'firebase/auth'
import { getAuth,onAuthStateChanged,signInWithEmailAndPassword} from '../firebase'
import UnderlineTextbox from '../materialComponents/UnderlineTextbox'
import IconTextbox from '../materialComponents/IconTextbox'
import styles from '../styles/login'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation()


  const handleLogin = () => { // handle login
    const auth = getAuth()
      signInWithEmailAndPassword(auth,email, password) // send email and password and auth to firebase
      .then( () => {
        onAuthStateChanged(auth, (user) => { // if auth comes back with different state we continue
          if (user) { // if user found 
            navigation.replace("Home") //navigate to homescreen
          }
        })
      })
      .catch(error => alert(error.message))
  }

  const anonymosLogin = () =>   { // anonymously login
    const auth = getAuth();
    signInAnonymously(auth)
      .then(() => {
        onAuthStateChanged(auth, (user) => {
          if(user) {
            navigation.replace("Home")
          }
        })
        
      })
  .catch();
  }

  const notUser = () => { // navigate to regiseration screen
    navigation.navigate("Signup")
  }

  const forgotPassword = () => { // navigate to forgotPassword screen
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

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleLogin}
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