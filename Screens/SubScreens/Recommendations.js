import { TouchableOpacity, Text, FlatList, Image }from 'react-native'
import { useEffect, useState } from 'react'
import {firestore, MOVIES,SERIES, onSnapshot,query,collection } from '../../firebase'
import styles from '../../styles/homescreen'

export default function Recommendations() {

    const [movies, setMovies] = useState([]) // array for movies
    const [series, setSeries] = useState([]) // array for series
    const [suprise, setSuprise] = useState([]) //array for the random movie or serie

    const toEmbed = (value) => {
        const url = value
        const eurl = url.split('watch?v=')
        const embed = eurl.join('embed/')
        return embed
      }

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
              Trailer : toEmbed(doc.data().trailer)
            }
            tempArray.push(moviesObject) // push object into temporary array
          })
          setMovies(tempArray) // push temporary array into movies array
        })
        return () => {
        queryAllMovies() // run queryAllMovies function
    
        }
      }, [])

      useEffect(() => {
        const q = query(collection(firestore,SERIES)) // query with route to series in database
        const queryAllSeries = onSnapshot(q,(querySnapshot) => {
          const tempArray = []
          querySnapshot.forEach((doc) => { // create objects of data
            const seriesObject = {
              id: doc.id,
              Photo: doc.data().Photo,
              Description : doc.data().description,
              Episodes: doc.data().episodes,
              Genre : doc.data().genre,
              PgR : doc.data().pgR,
              Rating : doc.data().rating,
              Stars : doc.data().stars,
              Time : doc.data().time,
              Title : doc.data().title,
              Trailer : toEmbed(doc.data().trailer)
            }
            tempArray.push(seriesObject) // push object into temporary array
          })
          setSeries(tempArray) // push temporary array into series array
        })
        return () => {
          queryAllSeries() // run queryAllseries function
        }
      }, [])

    const handleSuprise = () => { // handleSuprise, select movie or serie with random index
        const tempArray = [] // temporary array
        const switcher = Math.floor(Math.random()*2) // switch between movies and series
        const index = Math.floor(Math.random()*100)  //random index between 0-99
            if (switcher === 1) {
                tempArray.push(movies[index]) //use the random index to push from movies to tempArray
            } else if (switcher === 0) {
                tempArray.push(series[index]) //use the random index to push from series to tempArray
            }
            setSuprise(tempArray) //set tempArray to suprise array
    } 

  return (<>
    <TouchableOpacity onPress={() => handleSuprise()}>
        <Text style = {styles.buttonText}>Suprise Me</Text>
    </TouchableOpacity>
    <FlatList
          style={styles.imagesContainer}
          keyExtractor={(item) => item.id}
          data={suprise}
          numColumns={2}
          renderItem={({ item }) => ( 
            <>
              <Image source={{ uri: item.Photo }}
              style={styles.image}
              resizeMode='contain'></Image>
            </>
          )}
        /> 
  </>  
  )
}
