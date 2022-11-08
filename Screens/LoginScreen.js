import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { auth } from '../firebase'
import SingupScreen from './SingupScreen'
import UnderlineTextbox from '../materialComponents/UnderlineTextbox'
import IconTextbox from '../materialComponents/IconTextbox'

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "rgba(20,20,20,1)"
  },
  underlineTextbox: {
    height: 45,
    width: 300,
  },
  iconTextbox: {
    marginTop:22,
    height:45,
    width:300,
  },
  button: {
    width: 150,
    height: 59,
    backgroundColor: "rgba(94,53,177,1)",
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:22,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  buttonOutline: {
    width: 150,
    height: 59,
    backgroundColor: "rgba(20,20,20,1)",
    borderWidth: 2,
    borderColor: "rgba(94,53,177,1)",
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 22,
  },
  buttonOutlineText: {
    color: "white",
  },
})