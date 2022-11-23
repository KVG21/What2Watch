import { FlatList, Image, TouchableOpacity, Text} from 'react-native'
import {titleASC,titleDES,ratingASC,ratingDES,sortToGenres} from '../../utils/SortByFunctions'
import {firestore, MOVIES, onSnapshot,query,collection } from '../../firebase'
import { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import styles from '../../styles/homescreen'

export default function MovieScreen() {

    const [toggleSortedByDd, setToggleSortedByDd] = useState(false) // toggle between visible and hidden sorted by dropdownlist
    const [movies, setMovies] = useState([]) // array for movies
    const navigation = useNavigation()

    useEffect(() => {
        const q = query(collection(firestore,MOVIES)) // query with route to movies in database
        const queryAllMovies = onSnapshot(q,(querySnapshot) => { //function to query all movies
          const tempArray = []
          querySnapshot.forEach((doc) => { // create objects of data
            const moviesObject = {
              id: doc.id,
              Photo: doc.data().Photo,
              Description : doc.data().description,
              Director: doc.data().director,
              Genre : doc.data().genre,
              PgR : doc.data().pgR,
              Rating : doc.data().rating,
              Stars : doc.data().stars,
              Time : doc.data().time,
              Title : doc.data().title,
              Trailer : doc.data().trailer
            }
            tempArray.push(moviesObject) // push object into temporary array
          })
          setMovies(tempArray) // push temporary array into movies array
        })
        return () => {
        queryAllMovies() // run queryAllMovies function
    
        }
      }, [])

    const handleSortBy = (value) => {
        setToggleSortedByDd(!toggleSortedByDd)
        let tempArray
        switch (value) {
          case 1:
            tempArray = titleASC(movies);
              setMovies(tempArray)
              break; 
          case 2:
            tempArray = titleDES(movies);
              setMovies(tempArray)
              break;
          case 3:
            tempArray = ratingDES(movies);
              setMovies(tempArray)
              break;
          case 4:
            tempArray = ratingASC(movies);
              setMovies(tempArray)
              break;
          case 5:
            tempArray = sortToGenres(movies)
            setMovies(tempArray)
            break;
        
          default:
            break;
        }
      }

    const handleImageClick = (item) => {
        let tempArray = [item]
        navigation.navigate('MdesScreen', {
          item : tempArray
        } )
      }

  return (
   <>

    <TouchableOpacity onPress = { () => setToggleSortedByDd(!toggleSortedByDd)}>
        <Text style = {styles.buttonText}>Sort by:</Text>
          { toggleSortedByDd ? (
          <>
            <Text style = {styles.buttonText} onPress = { () => handleSortBy(1)}>A -{'>'} Z</Text>
            <Text style = {styles.buttonText} onPress = { () => handleSortBy(2)}>Z -{'>'} A</Text>
            <Text style = {styles.buttonText} onPress = { () => handleSortBy(3)}>Rating : High -{'>'} Low</Text>
            <Text style = {styles.buttonText} onPress = { () => handleSortBy(4)}>Rating : Low -{'>'} High</Text>
            <Text style = {styles.buttonText} onPress = { () => handleSortBy(5)}>Genres</Text>
          </>) 
          : 
          (
            <></>
          ) }
    </TouchableOpacity>


     <FlatList
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
