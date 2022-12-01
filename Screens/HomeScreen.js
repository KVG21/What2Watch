import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../styles/homescreen'
import IconButtonsFooter from '../materialComponents/IconButtonFooter'
import MovieScreen from './SubScreens/MovieScreen'
import SeriesScreen from './SubScreens/SeriesScreen'
import Profile from './SubScreens/Profile'
import FavouriteScreen from './SubScreens/FavouriteScreen'

export default function HomeScreen() {

  const [screen, setScreen] = useState(1) // screen navigation
 
  const handleFooterPress = () => { // switch screens when footericon is pressed
    if(screen === 1) {
      return ( <MovieScreen/> )
    } else if(screen === 2) {
      return ( <SeriesScreen/> )
    } else if(screen === 3) {
      return ( <FavouriteScreen/> )
    } else if(screen === 4) { 
      return (<Profile/>)
    }
  }
  
  return (
    <SafeAreaView style={styles.container}>   
        {handleFooterPress()}
        <IconButtonsFooter setScreen = {setScreen}/>
    </SafeAreaView>
  )
}
