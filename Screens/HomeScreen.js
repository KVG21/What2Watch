import { async } from '@firebase/util'
import { useNavigation } from '@react-navigation/core'

import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getAuth, signOut, firestore, MOVIES, SERIES, onSnapshot,query,collection } from '../firebase'
import styles from '../styles/homescreen'


const HomeScreen = () => {

  const [movies, setMovies] = useState([]) // array for movies and series
  const [series, setSeries] = useState([])
 
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

  useEffect(() => {
    const q = query(collection(firestore,SERIES)) // query with route to series in database
    const queryAllSeries = onSnapshot(q,(querySnapshot) => {
      const tempArray = []
      querySnapshot.forEach((doc) => { // create objects of data
        const seriesObject = {
          id: doc.id,
          Photo: doc.data().Photo,
          Description : doc.data().description,
          Episodes: doc.data().episodes,
          Genre : doc.data().Genre,
          PgR : doc.data().pgR,
          Rating : doc.data().rating,
          Stars : doc.data().stars,
          Time : doc.data().time,
          Title : doc.data().title,
          Trailer : doc.data().trailer
        }
        tempArray.push(seriesObject) // push object into temporary array
      })
      setSeries(tempArray) // push temporary array into movies array
    })
    return () => {
      queryAllSeries() // run queryAllMovies function
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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {
          movies.map((movie) => (
          <View>
          <Image source={{ uri: movie.Photo}} style={{ width: 150, height: 150}}></Image>  
          </View>
          ))
        }  
        
        {
          series.map((serie) => (
          <View>
          <Image source={{ uri: serie.Photo}} style={{ width: 150, height: 150}}></Image>
          </View>
          ))
        }  
        </ScrollView>    
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default HomeScreen
