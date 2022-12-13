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
            Trailer : toEmbed(doc.data().Trailer)
          }
          tempArray.push(favouritesObject) // push object into temporary array
        })
        setFavourite(tempArray) // push temporary array into favourites array
      })
      return () => {
      gueryMyFav() // run gueryMyFav function
  
      }
    }, []);

    const handleDelete = (item) => {
      let index = favourite.findIndex(p => p.id === item.id)
      if(index !== -1) { 
        const docRef=doc (firestore, FAVOURITES, item.id)
        deleteDoc(docRef) .then(()=> {
          console.log('elokuva poistettu')
        }).catch(error => console.log(error))
      }
    }

    const handleImageClick = (item) => {
      let tempArray = [item]
      if(item.Episodes === null) {
      navigation.navigate('MdesScreen', {
        item : tempArray
      } )
    }else {
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
    const toEmbed = (value) => {
      const url = value
      const eurl = url.split('watch?v=')
      const embed = eurl.join('embed/')
      return embed
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
                  {text: 'Cancel', onPress: () => console.log('Canceled')},
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