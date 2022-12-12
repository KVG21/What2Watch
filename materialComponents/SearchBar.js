import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'

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
    <View>
      <TextInput placeholder='Searching...' onChangeText={text => setText(text)} onSubmitEditing={() => handleSearch()} placeholderTextColor='#fff'/>
    </View>
  )
}

export default SearchBar