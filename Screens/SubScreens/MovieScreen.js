import { FlatList, Image, TouchableOpacity, Text} from 'react-native'
import { useNavigation } from '@react-navigation/core'
import styles from '../../styles/homescreen'
import SortByDropdown from '../../materialComponents/SortByDropdown'
import { useEffect, useState } from 'react'

export default function MovieScreen({movies, setMovies, backup, isAnonymous}) {

    const navigation = useNavigation()
    const [list, setList] = useState([])

   /* useEffect (() => {
      const getItems = () => {
        const tempArray = []
        tempArray.push(movies)
      setList(tempArray)  
      }
      return () => {
        getItems()
      }
    }, []) */
  
    const handleImageClick = (item) => {
        let tempArray = [item]
        navigation.navigate('MdesScreen', {
          item : tempArray,
          isAnonymous : isAnonymous
        } )
      }
    
  
  return (
   <>
  <Text style={styles.title}>Movies</Text>
    <SortByDropdown value = {movies} setValue = {setMovies} backup = {backup}/>

     <FlatList
          style={styles.imagesContainer}
          keyExtractor={(item) => item.id}
          data={movies}
          numColumns={2}
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
