import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Icon from "react-native-vector-icons/Ionicons";

const SearchBar = ({value, setValue, backup}) => {
    const [text, setText] = useState('')

    const handleSearch = () => {
        setValue(backup)
        const tempArray = [...value]
        const searchArray = []
        for (let item of tempArray){
            const Title = item.Title
            if (Title.includes(text)){
                searchArray.push(item)
            }
        }
        setValue(searchArray)
    }
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} placeholder='Search' onChangeText={text => setText(text)} onSubmitEditing={() => handleSearch()} placeholderTextColor='#fff'/>
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
  },
  icon: {
    color: "rgba(94,53,177,1)",
    fontSize: 27,
  },
  textInput: {
    fontSize:22,
    color:'white',
  }
})

export default SearchBar