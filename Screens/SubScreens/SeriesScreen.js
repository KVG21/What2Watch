import { FlatList, Image, TouchableOpacity, Text, View} from 'react-native'
import {firestore, SERIES, onSnapshot,query,collection } from '../../firebase'
import {titleASC,titleDES,ratingASC,ratingDES,sortToGenres} from '../../utils/SortByFunctions'
import { useNavigation } from '@react-navigation/core'
import { useState, useEffect } from 'react'
import styles from '../../styles/homescreen'
import Icon from "react-native-vector-icons/Ionicons";

export default function SeriesScreen() {

    const [toggleSortedByDd, setToggleSortedByDd] = useState(false) // toggle between visible and hidden sorted by dropdownlist
    const [series, setSeries] = useState([]) // array for series
    const navigation = useNavigation()

    const toEmbed = (value) => {
      const url = value
      const eurl = url.split('watch?v=')
      const embed = eurl.join('embed/')
      return embed
    }

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

    const handleSortBy = (value) => {
        setToggleSortedByDd(!toggleSortedByDd)
        let tempArray
        switch (value) {
          case 1:
            tempArray = titleASC(series);
              setSeries(tempArray)
              break; 
          case 2:
            tempArray = titleDES(series);
              setSeries(tempArray)
              break;
          case 3:
            tempArray = ratingDES(series);
              setSeries(tempArray)
              break;
          case 4:
            tempArray = ratingASC(series);
              setSeries(tempArray)
              break;
          case 5:
            tempArray = sortToGenres(series)
            setSeries(tempArray)
            break;
        
          default:
            break;
        }
      }

      const handleImageClick = (item) => {
        let tempArray = [item]
        navigation.navigate('SdesScreen', {
          item : tempArray
        } )
      }

  return (
   <>
     <Text style={styles.title}>Series</Text>
     <View style={styles.sortRectangle}>
      <TouchableOpacity onPress = { () => setToggleSortedByDd(!toggleSortedByDd)}>
        <View style={styles.wrapper}>
          <Text style = {styles.sortTitle}>Sort by:</Text>
          <Icon name='list-circle-outline' style = {styles.icon}></Icon>
        </View>
          { toggleSortedByDd ? (
          <>
            <Text style = {styles.sortText} onPress = { () => handleSortBy(1)}>A -{'>'} Z</Text>
            <Text style = {styles.sortText} onPress = { () => handleSortBy(2)}>Z -{'>'} A</Text>
            <Text style = {styles.sortText} onPress = { () => handleSortBy(3)}>Rating : High -{'>'} Low</Text>
            <Text style = {styles.sortText} onPress = { () => handleSortBy(4)}>Rating : Low -{'>'} High</Text>
            <Text style = {styles.sortText} onPress = { () => handleSortBy(5)}>Genres</Text>
          </>) 
          : 
          (
            <></>
          ) }
    </TouchableOpacity>
  </View>

     <FlatList
          style={styles.imagesContainer}
          keyExtractor={(item) => item.id}
          data={series}
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
