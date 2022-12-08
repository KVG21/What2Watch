import {  useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { TouchableOpacity, FlatList, Image, Text } from 'react-native'
import styles from '../../styles/homescreen'
import { useNavigation } from '@react-navigation/core'
import Icon from "react-native-vector-icons/Ionicons";
import Toast from 'react-native-toast-message';

import { FAVOURITES, onSnapshot, query, collection, where, firestore, getAuth, deleteDoc, doc } from '../../firebase';


export default function FavouriteScreen() {
    const [favourite, setFavourite] = useState([]);
    const auth = getAuth();
    const navigation =  useNavigation()
    useEffect(() => {
      const q = query(collection(firestore,FAVOURITES), where('uid','==', auth.currentUser.uid)) // query with route to movies in database
      const queryAllMovies = onSnapshot(q,(querySnapshot) => { //function to query all movies
        const tempArray = []
        querySnapshot.forEach((doc) => { // create objects of data
          const moviesObject = {
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
            
          }
          tempArray.push(moviesObject) // push object into temporary array
        })
        setFavourite(tempArray) // push temporary array into movies array
      })
      return () => {
      queryAllMovies() // run queryAllMovies function
  
      }
    }, []);

    const handleDelete = (item) => {
      const docRef=doc (firestore, FAVOURITES, item.id)
      deleteDoc(docRef) .then(()=> {
        console.log('elokuva poistettu')
      }).catch(error => console.log(error))
    }
    const handleImageClick = (item) => {
      let tempArray = [item]
      navigation.navigate('MdesScreen', {
        item : tempArray
      } )
      navigation.navigate('SdesScreen', {
        item : tempArray
      } )
    }
    const showToast = () => {
      Toast.show({
        position: 'top',
        text1: 'deleted from my list',
        text2:'   ',
        visibilityTime: 5000,
      });
    }
    return(<>
     <FlatList
          style={styles.imagesContainer}
          keyExtractor={(item) => item.id}
          data={favourite}
          numColumns={2}
          renderItem={({ item }) => ( 
            <>
            <TouchableOpacity onPress={()=> handleImageClick(item)}>
              <Image source={{ uri: item.Photo }}
              style={styles.image}
              resizeMode='contain'></Image>
            </TouchableOpacity>
            <TouchableOpacity   style={styles.listButtonStyle}
                      onPress={() => {handleDelete(item); showToast()}} >
                    
                    
                    <Text style = {styles.descText}>Delete from my list</Text>
            </TouchableOpacity>
            
            </>
            
          )}
        /></>)

}