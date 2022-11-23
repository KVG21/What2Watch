import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getAuth, signOut} from '../firebase'
import styles from '../styles/homescreen'
import IconButtonsFooter from '../materialComponents/IconButtonFooter'
import MovieScreen from './SubScreens/MovieScreen'
import SeriesScreen from './SubScreens/SeriesScreen'
import AccountScreen from './SubScreens/AccountScreen'


export default function HomeScreen() {

  const [screen, setScreen] = useState(1) // screen navigation
  const navigation = useNavigation()
 
  
  const handleFooterPress = () => { // switch screens when footericon is pressed
    if(screen === 1) {
      return ( <MovieScreen/> )
    } else if(screen === 2) {
      return ( <SeriesScreen/> )
    } else if(screen === 3) {
      return (<></>)
    } else if(screen === 4) { 
      return (<AccountScreen/>)
    } else if(screen === 5) {
      handleSignOut()
    }  
  }
  
  //navigation
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
        {handleFooterPress()}
          <TouchableOpacity>
        <IconButtonsFooter setScreen = {setScreen}/>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
