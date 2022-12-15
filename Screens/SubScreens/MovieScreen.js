import { FlatList, Image, TouchableOpacity, Text, SafeAreaView} from 'react-native'
import { useNavigation } from '@react-navigation/core'
import styles from '../../styles/homescreen'
import SortByDropdown from '../../materialComponents/SortByDropdown'

export default function MovieScreen({movies, displayForMovies,setDisplayForMovies}) {

    const navigation = useNavigation()

  
    const handleImageClick = (item) => { // handle image click
        let tempArray = [item]
        navigation.navigate('MdesScreen', { // navigate to movieDescriptionScreen with item selected
          item : tempArray,
        } )
      }
      
  return (
   <>
  <Text style={styles.title}>Movies</Text>
    <SortByDropdown style={styles.dropdownlist} value = {movies} setValue = {setDisplayForMovies}/>

     <FlatList
          style={styles.imagesContainer}
          keyExtractor={(item) => item.id}
          data={displayForMovies}
          numColumns={2}
          maxToRenderPerBatch={10}
          renderItem={({ item }) => ( 
            <>
            <TouchableOpacity onPress = { () => handleImageClick(item) }>
              <Image source={{ uri: item.Photo }}
              style={styles.image}
              resizeMode='contain'></Image>
            </TouchableOpacity>
            </>
          )}
        /> 
   </>
  )
}
