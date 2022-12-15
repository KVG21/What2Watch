import { TouchableOpacity, FlatList, Image, Text, View, Alert} from 'react-native'
import { useEffect, useState } from 'react';
import styles from '../../styles/favourites'
import { useNavigation } from '@react-navigation/core'
import Toast from 'react-native-toast-message';
import { FAVOURITES, firestore, deleteDoc, doc,getAuth,collection,onSnapshot,query,where } from '../../firebase';


export default function FavouriteScreen() {

    const navigation =  useNavigation()
    const [favourite, setFavourite] = useState([]) // array for favourites
    const auth = getAuth()

    useEffect(() => {
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
  
      }
    }, []);

    const handleDelete = (item) => { // delete item from favourites, also deletes from firebase
        const docRef=doc (firestore, FAVOURITES, item.id)
        deleteDoc(docRef) .then(()=> {
        }).catch()
    }

    const handleImageClick = (item) => { // handle image clicks
      let tempArray = [item]
      if(item.Episodes === null) { // if item has no episodes then navigate to moviesDescriptionScreen
      navigation.navigate('MdesScreen', {
        item : tempArray
      } )
    }else { // if item has episodes then navigate to seriesDescriptionScreen
      navigation.navigate('SdesScreen', {
        item : tempArray
      } )
    }
  }
    const showToast = () => {
      Toast.show({
        position: 'top',
        text1: 'deleted from my list',
        text2:'   ',
        visibilityTime: 5000,
      });
    }

    return(
    <View style={styles.container}>
     <FlatList
          style={styles.imagesContainer}
          keyExtractor={(item) => item.id}
          data={favourite}
          numColumns={2}
          renderItem={({ item }) => ( 
            <View style={styles.itemContainer}>
            <TouchableOpacity onPress={()=> handleImageClick(item)}
              style = {styles.favoriteContainer}>
              <Image source={{ uri: item.Photo }}
              style={styles.image}
              resizeMode='contain'></Image>
            </TouchableOpacity>

            <TouchableOpacity
               style={styles.button}
               onPress={() => Alert.alert(
                'Alert',
                'Remove item from favorites?',
                [
                  {text: 'Cancel'},
                  {text: 'Remove', onPress: () => handleDelete(item)},
                ],
                { cancelable: false }
              )
              }>
                    <Text style = {styles.text}>Remove</Text>
            </TouchableOpacity>
            
            </View>
            
          )}
        />
        </View>)

}