import { TouchableOpacity, Text, Image, View, FlatList }from 'react-native'
import { useEffect, useState } from 'react'
import {firestore, MOVIES,SERIES, onSnapshot,query,collection } from '../../firebase'
import Icon from "react-native-vector-icons/Ionicons";
import styles from '../../styles/descScreens'


export default function Recommendations() {

    const [movies, setMovies] = useState([]) // array for movies
    const [series, setSeries] = useState([]) // array for series
    const [surprise, setSurprise] = useState([]) //array for the random movie or serie


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

    const handleSurprise = (value) => { // handleSurprise, select movie or serie with random index
        const tempArray = [] // temporary array
        const index = Math.floor(Math.random()*100)  //random index between 0-99
            if (value === 1) {

                tempArray.push(movies[index]) //use the random index to push from movies to tempArray
            } else if (value === 2) {
                tempArray.push(series[index]) //use the random index to push from series to tempArray
            }
            setSurprise(tempArray) //set tempArray to Surprise array
    } 

  return (<>

  <View style = {styles.buttonContainer}>
    <TouchableOpacity style  = {styles.button} onPress={() => handleSurprise(1)}>
      <Text style = {styles.buttonText}>Random movie</Text>
    </TouchableOpacity>
    
    <TouchableOpacity style  = {styles.button} onPress={() => handleSurprise(2)}>
      <Text style = {styles.buttonText}>Random serie</Text>
    </TouchableOpacity>
  </View>
    
    <FlatList 
          style={styles.imagesContainer}
          keyExtractor={(item) => item.id}
          data={surprise}
          numColumns={1}
          renderItem={({ item }) => (<>

          <View style = { styles.container}>
          <Text style = {styles.title}>{item.Title}</Text>

          <View style = { styles.timeCont}>
            <Icon name='time' style = {styles.timeIcon}></Icon>
            <Text style = {styles.time}>{item.Time}</Text>
          </View>

        <View style = { styles.recommendedContainer}>
          <Image source={{ uri: item.Photo }}
                  style={styles.recommendedImage}
                resizeMode='contain'/>
        </View>
          <View style = {styles.iconRow}>
            <Icon name='eye' style = {styles.icon}></Icon>
            <Text style = {styles.descText}>{item.PgR}</Text>

            <Icon name='star' style={styles.icon}></Icon>
            <Text style = {styles.descText}>{item.Rating}</Text>

            <Icon name='albums' style = {styles.icon}></Icon>
            <Text style = {styles.descText}>{item.Genre}</Text>
          </View>

          <Text style = {styles.descStars}>Stars : {item.Stars}</Text>

                <View style = { styles.descBox}>
                  <Text style = {styles.textDesc}>{item.Description}</Text>
                </View>
              </View>
          </> ) }
    />
  </>  
  )
}
