import { View, TouchableOpacity, Text, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { getAuth, signOut} from '../../firebase'
import styles from '../../styles/profile'
import Icon from "react-native-vector-icons/Ionicons";


export default function Profile({favourite}) {

    const auth = getAuth()
    const navigation = useNavigation()

    const accountSettings = () => {
        navigation.navigate('AccountSettingsScreen')
    }

    const favourites = () => {
        navigation.navigate('FavouriteScreen', {
            favourite : favourite
          } )
    }

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
        <Text style={styles.text}>Profile</Text>
        <View style={styles.userContainer}>
            <Icon 
                name="person-circle"
                style={styles.icon}
                ></Icon>
            <Text style={styles.text}>{auth.currentUser?.email}</Text>
        </View>


        <View style={styles.cardsContainer}>
            <Text style={styles.text}> Options </Text>
            <TouchableOpacity onPress = { accountSettings }>
                <View style={styles.profileCont}>
                    <Icon
                        name='at'
                        style={styles.icon}
                    ></Icon>
                    <Text style={styles.text}>Account Settings</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={favourites}>
                <View style={styles.profileCont}>
                    <Icon
                        name='heart'
                        style={styles.icon}
                    ></Icon>
                    <Text style={styles.text}>My List</Text>
                    </View>
            </TouchableOpacity>      

            <TouchableOpacity onPress={() => Alert.alert(
                'Login out',
                'Confirm your login out',
                [{text: 'Cancel', onPress: () => console.log('Canceled')},
                    {text: 'Log out', onPress: handleSignOut},],
                { cancelable: false }
            )}>
                <View style={styles.profileCont}>
                    <Icon
                        name='log-out-outline'
                        style={styles.icon}
                    ></Icon>
                    <Text style={styles.text}>Log out</Text>
                    </View>
            </TouchableOpacity>    
        </View>
    </View>
  )
  
}
