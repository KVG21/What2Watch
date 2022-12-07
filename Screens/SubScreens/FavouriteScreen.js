import { useEffect, useState } from 'react';
import { TouchableOpacity, FlatList, Image, Text, View, Alert } from 'react-native'
import styles from '../../styles/favourites'
import { FAVOURITES, onSnapshot, query, collection, where, firestore, getAuth, deleteDoc, doc } from '../../firebase';


export default function FavouriteScreen() {
    const [favourite, setFavourite] = useState([]);
    const auth = getAuth();
  
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
      const docRef = doc (firestore, FAVOURITES, item.id)
      deleteDoc(docRef).then(() => {
        console.log('removed ' + item.Title + ' from favorites')
      }).catch(error => console.log(error))
    }

    return(
    <View style={styles.container}>
     <FlatList
          style={styles.imagesContainer}
          keyExtractor={(item) => item.id}
          data={favourite}
          numColumns={2}
          renderItem={({ item }) => ( 
            <>
              <TouchableOpacity
                style={styles.favoriteContainer}
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
                <Image source={{ uri: item.Photo }}
                style={styles.image}
                resizeMode='contain'></Image>
                <Text style={styles.text}>{item.Title}</Text>
              </TouchableOpacity>
            </>
          )}
        />
    </View>
    )
}