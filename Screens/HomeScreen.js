import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../styles/homescreen'
import IconButtonsFooter from '../materialComponents/IconButtonFooter'
import MovieScreen from './SubScreens/MovieScreen'
import SeriesScreen from './SubScreens/SeriesScreen'
import Profile from './SubScreens/Profile'
import Recommendations from './SubScreens/Recommendations'
import { getAuth } from 'firebase/auth'

export default function HomeScreen() {

  const [screen, setScreen] = useState(1) // screen navigation
  const [isAnonymous, setIsAnoymoys ] = useState(true);
  const auth = getAuth()

  

  useEffect(() => {
      if(auth.currentUser === null) {
        setIsAnoymoys(false)
      }
  })
 
  const handleFooterPress = () => { // switch screens when footericon is pressed
    if(screen === 1) {
      return ( <MovieScreen/> )
    } else if(screen === 2) {
      return ( <SeriesScreen/> )
    } else if(screen === 3) {
      return ( <Recommendations/> )
    } else if(screen === 4) { 
      return (<Profile/>)
    }
  }
  
  return (
    <SafeAreaView style={styles.container}>   
        {handleFooterPress()}
        <IconButtonsFooter setScreen = {setScreen} isAnonymous = {isAnonymous}/>
    </SafeAreaView>
  )
}
