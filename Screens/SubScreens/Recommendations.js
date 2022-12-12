import { TouchableOpacity, Text, Image, View, FlatList }from 'react-native'
import { useState } from 'react'
import Icon from "react-native-vector-icons/Ionicons";
import styles from '../../styles/descScreens'


export default function Recommendations({movies, setMovies, series, setSeries, favourite, setFavourite}) {

    const [list, setList] = useState([]) //array for the random movie or serie
   

    const handleSurprise = (value) => { // handleSurprise, select movie or serie with random index
        const tempArray = [] // temporary array
        const index = Math.floor(Math.random()*100)  //random index between 0-99
            if (value === 1) {
                tempArray.push(movies[index]) //use the random index to push from movies to tempArray
            } else if (value === 2) {
                tempArray.push(series[index]) //use the random index to push from series to tempArray
            }
            setList(tempArray) //set tempArray to List array
    }

    const handlePickedForYou = () => {
      setList(favourite)
    }

  return (<>

  <View style = {styles.buttonContainer}>
    <TouchableOpacity style  = {styles.button} onPress={() => handleSurprise(1)}>
      <Text style = {styles.buttonText}>Random movie</Text>
    </TouchableOpacity>
    
    <TouchableOpacity style  = {styles.button} onPress={() => handleSurprise(2)}>
      <Text style = {styles.buttonText}>Random serie</Text>
    </TouchableOpacity>

    <TouchableOpacity style = {styles.button} onPress={() => handlePickedForYou()}>
      <Text style = {styles.buttonText}>Picked for you</Text>
    </TouchableOpacity>
  </View>
    
    <FlatList 
          style={styles.imagesContainer}
          keyExtractor={(item) => item.id}
          data={list}
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
