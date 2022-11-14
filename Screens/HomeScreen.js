import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { getAuth, signOut } from '../firebase'
import styles from '../styles/homescreen'

const HomeScreen = () => {
  const navigation = useNavigation()
  const handleSignOut = () => {
    const auth = getAuth()
      signOut(auth)
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }


  return (
    <View style={styles.container}>
      <Text>Email: {getAuth().currentUser?.email}</Text>
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen
