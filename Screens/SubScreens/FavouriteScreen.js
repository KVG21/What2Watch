import { TouchableOpacity, FlatList, Image, Text, View, Alert } from 'react-native'
import styles from '../../styles/favourites'
import { useNavigation } from '@react-navigation/core'
import Toast from 'react-native-toast-message';
import { FAVOURITES, firestore, deleteDoc, doc } from '../../firebase';


export default function FavouriteScreen({route}) {

    const {favourite} = route.params;
    const navigation =  useNavigation()


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