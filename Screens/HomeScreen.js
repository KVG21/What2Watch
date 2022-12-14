import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../styles/homescreen'
import IconButtonsFooter from '../materialComponents/IconButtonFooter'
import MovieScreen from './SubScreens/MovieScreen'
import SeriesScreen from './SubScreens/SeriesScreen'
import Profile from './SubScreens/Profile'
import Recommendations from './SubScreens/Recommendations'
import { getAuth } from 'firebase/auth'
import {firestore, MOVIES,SERIES,FAVOURITES,where, onSnapshot,query,collection } from '../firebase'

export default function HomeScreen() {

  const [screen, setScreen] = useState(1) // screen navigation
  const [movies, setMovies] = useState([]) // array for movies
  const [series, setSeries] = useState([]) // array for series
  const [favourite, setFavourite] = useState([]) // array for favouriteList
  const [displayForMovies, setDisplayForMovies] = useState([]) // array for DisplayForForMovies
  const [displayForSeries, setDisplayForSeries] = useState([]) // array for DisplayForForSeries
  const [isAnonymous, setIsAnoymoys ] = useState(true);
  const auth = getAuth()

  
    useEffect(() => {
      if(auth.currentUser.isAnonymous === true) {
        setIsAnoymoys(false)
      }
    })
      
  
 
  useEffect(() => {
    const q = query(collection(firestore,MOVIES)) // query with route to movies in database
    const queryAllMovies = onSnapshot(q,(querySnapshot) => { //function to query all movies
      const tempArray = []
      querySnapshot.forEach((doc) => { // create objects of data
        const moviesObject = {
          id: doc.id,
          Photo: doc.data().Photo,
          Description : doc.data().description,
          Director: doc.data().director,
          Genre : doc.data().genre,
          PgR : doc.data().pgR,
          Rating : doc.data().rating,
          Stars : doc.data().stars,
          Time : doc.data().time,
          Title : doc.data().title,
          Trailer : toEmbed(doc.data().trailer)
        }
        tempArray.push(moviesObject) // push object into temporary array
      })
      setMovies(tempArray) // push temporary array into movies array
      setDisplayForMovies(tempArray) // set DisplayFor for movies
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
          Genre : doc.data().genre,
          PgR : doc.data().pgR,
          Rating : doc.data().rating,
          Stars : doc.data().stars,
          Time : doc.data().time,
          Title : doc.data().title,
          Trailer : toEmbed(doc.data().trailer)
        }
        tempArray.push(seriesObject) // push object into temporary array
      })
      setSeries(tempArray) // push temporary array into series array
      setDisplayForSeries(tempArray) // set DisplayFor for series
    })
    return () => {
      queryAllSeries() // run queryAllseries function
    }
  }, [])

  useEffect(() => {
    if (auth.currentUser !== null){
    const q = query(collection(firestore,FAVOURITES), where('uid','==', auth.currentUser.uid)) // query with route to favorites in database
    const gueryMyFav = onSnapshot(q,(querySnapshot) => { //function to query all favourites
      const tempArray = []
      querySnapshot.forEach((doc) => { // create objects of data
        const favouritesObject = {
          id: doc.id,
          Photo: doc.data().Photo,
          Description : doc.data().Description,
          Director: doc.data().Director,
          Genre : doc.data().Genre,
          PgR : doc.data().PgR,
          Rating : doc.data().Rating,
          Stars : doc.data().Stars,
          Time : doc.data().Time,
          Title : doc.data().Title,
          Episodes : doc.data().Episodes,
          Trailer : doc.data().Trailer
        }
        tempArray.push(favouritesObject) // push object into temporary array
      })
      setFavourite(tempArray) // push temporary array into favourites array
    })
    return () => {
    gueryMyFav() // run gueryMyFav function

    }}
  }, []);

  const toEmbed = (value) => { // take the trailer and covert it into a embedded
    const url = value
    const eurl = url.split('watch?v=') // replace 'watch)v=' with 'embed/'
    const embed = eurl.join('embed/')
    return embed
  }

  const handleFooterPress = () => { // switch screens when something is pressed in IconButtonsFooter
    if(screen === 1) { 
      return ( <MovieScreen movies = {movies} setDisplayForMovies = {setDisplayForMovies} displayForMovies = {displayForMovies} isAnonymous = {isAnonymous}/> )
    } else if(screen === 2) {
      return ( <SeriesScreen series = {series} setDisplayForSeries = {setDisplayForSeries} displayForSeries = {displayForSeries} isAnonymous = {isAnonymous}/> )
    } else if(screen === 3) {
      return ( <Recommendations movies = {movies} series = {series} favourite = {favourite}/> )
    } else if(screen === 4) { 
      return (<Profile favourite = {favourite}/>)
    }
  }
  
  return (
    <SafeAreaView style={styles.container}>   
        {handleFooterPress()}
        <IconButtonsFooter setScreen = {setScreen} isAnonymous = {isAnonymous}/>
    </SafeAreaView>
  )
}
