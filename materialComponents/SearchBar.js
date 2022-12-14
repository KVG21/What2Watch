import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Icon from "react-native-vector-icons/Ionicons";

const SearchBar = ({value, setValue}) => {
    const [text, setText] = useState('')

    const handleSearch = () => {
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
      <TextInput style={styles.textInput} placeholder='Search by title..' onChangeText={text => setText(text)} onSubmitEditing={() => handleSearch()} placeholderTextColor='#737373'/>
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