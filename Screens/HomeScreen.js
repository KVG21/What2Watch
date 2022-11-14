import { async } from '@firebase/util'
import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { getAuth, signOut, firestore, MOVIES, SERIES, onSnapshot,query,collection } from '../firebase'

const HomeScreen = () => {

  const [movies, setMovies] = useState([]) // array for movies
 
  useEffect(() => {
    const q = query(collection(firestore,MOVIES)) // query with route to movies in database

    const queryAllMovies = onSnapshot(q,(querySnapshot) => { //function to query all movies
      const tempArray = []

      querySnapshot.forEach((doc) => { // create objects of data
        const moviesObject = {
          id: doc.id,
          Photo: doc.data().Photo,
          Description : doc.data().description,
          Director: doc.data().Director,
          Genre : doc.data().Genre,
          PgR : doc.data().pgR,
          Rating : doc.data().rating,
          Stars : doc.data().stars,
          Time : doc.data().time,
          Title : doc.data().title,
          Trailer : doc.data().trailer
        }
        tempArray.push(moviesObject) // push object into temporary array
      })
      setMovies(tempArray) // push temporary array into movies array
    })
    return () => {
      queryAllMovies() // run queryAllMovies function
    }
  }, [])

  //navigation
  const navigation = useNavigation()
  const handleSignOut = () => {
    const auth = getAuth()
      signOut(auth)
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

 

  console.log(movies)

  return (
    <View style={styles.container}>
      
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
   button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})