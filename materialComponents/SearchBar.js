import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Icon from "react-native-vector-icons/Ionicons";

const SearchBar = ({value, setValue}) => {
    const [text, setText] = useState('')

    const handleSearch = () => { // search from the list
        const tempArray = [...value] // copy value to array
        const searchArray = []
        for (let item of tempArray){
            const Title = item.Title.toLowerCase() //take title from item
            const Genre = item.Genre.toLowerCase() //take genre from item
            const Stars = item.Stars.toLowerCase() //take stars from item
            let Director = '' //director is set to empty string becouse series dont have that property

            if(item.hasOwnProperty('Director')){ //becouse series dont have director property in array we have to check for it, otherwise error will occure
              Director = item.Director.toLowerCase()
            }
            
            if (Title.includes(text.toLowerCase())){ //if Title contains what was typed in the search then push that item to to searchArray
                searchArray.push(item)
            } else if (Genre.includes(text.toLowerCase())){ //if Genre contains what was typed in the search then push that
              searchArray.push(item)
            } else if (Stars.includes(text.toLowerCase())){ //if Stars contains what was typed in the search then push that
              searchArray.push(item)
            } else if (Director.includes(text.toLowerCase())){ //if Director contains what was typed in the search then push that
              searchArray.push(item)
            } 
        }
        setValue(searchArray) //set the searchArray to value
    }
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} placeholder='Search by title, genre, people' onChangeText={text => setText(text)} onSubmitEditing={() => handleSearch()} placeholderTextColor='#737373'/>
      <Icon
            name="search"
            style={styles.icon}
      ></Icon>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    borderWidth:1,
    borderRadius:5,
    flexDirection:'row',
    margin:5,
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').height * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3d3d3d'
  },
  icon: {
    color: "rgba(94,53,177,1)",
    fontSize: 27,
  },
  textInput: {
    fontSize:22,
    color:'white',
    width:'91%',
  }
})

export default SearchBar