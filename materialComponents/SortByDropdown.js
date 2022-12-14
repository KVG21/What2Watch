import {View, Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native'
import { titleASC,titleDES,ratingDES,ratingASC,handleGenreSort } from '../utils/SortByFunctions';
import { useState } from 'react';
import Icon from "react-native-vector-icons/Ionicons";
import SearchBar from './SearchBar';

export default function SortByDropdown({value,setValue}) {

    const [toggleSortedByDd, setToggleSortedByDd] = useState(false) // toggle between visible and hidden sorted by dropdownlist
    const [text, setText] = useState('') // text to show what you are sorting by
    
    const handleSortBy = (choice, genre) => {  // handle function for sorting
        setText(genre)
        setToggleSortedByDd(!toggleSortedByDd) // toggle dropdown away
        let tempArray
        switch (choice) {
          case 1: // case 1 is by titles in the ascending order
            tempArray = titleASC(value);
              setValue(tempArray)
              break; 
          case 2: // case 2 is by titles in the descending order
            tempArray = titleDES(value);
              setValue(tempArray)
              break;
          case 3:  // case 3 is by rating in the descending order
            tempArray = ratingDES(value);
              setValue(tempArray)
              break;
          case 4: // case 4 is by rating in the ascending order
            tempArray = ratingASC(value);
              setValue(tempArray)
              break;
          case 5: // case 5 finds those who have genre that was selected
            tempArray = handleGenreSort(value, genre);
            setValue(tempArray)
            break; 
          default:
            break;
        }
      }

    const handleClearAll = () => { // handle clear all
      setText('') // set sortby text to empty string
      setValue(value) // setValue to its original value
    }

  return (
  <View style={styles.sortByDropdown}>
    <SearchBar value={value}setValue={setValue}/>
    <View style={styles.sortRectangle}>
    <TouchableOpacity onPress = { () => setToggleSortedByDd(!toggleSortedByDd)}>
        <View style={styles.wrapper}>
          <Text style = {styles.sortTitle}>Sort by: {text}</Text>
          <Icon name='list-circle-outline' style = {styles.icon}></Icon>
        </View>
          { toggleSortedByDd ? (
          <>
            <Text style = {styles.sortText} onPress = { () => handleSortBy(1)}>A -{'>'} Z</Text>
              <Text style = {styles.sortText} onPress = { () => handleSortBy(2)}>Z -{'>'} A</Text>
              <Text style = {styles.sortText} onPress = { () => handleSortBy(3)}>Rating : High -{'>'} Low</Text>
            <Text style = {styles.sortText} onPress = { () => handleSortBy(4)}>Rating : Low -{'>'} High</Text>


              <Text style = {styles.sortText} onPress = { () => handleSortBy(5, 'Action')}>Action</Text>
                <Text style = {styles.sortText} onPress = { () => handleSortBy(5, 'Drama')}>Drama</Text>
                  <Text style = {styles.sortText} onPress = { () => handleSortBy(5, 'Adventure')}>Adventure</Text>
                    <Text style = {styles.sortText} onPress = { () => handleSortBy(5, 'Comedy')}>Comedy</Text>
                      <Text style = {styles.sortText} onPress = { () => handleSortBy(5, 'Fantasy')}>Fantasy</Text>
                        <Text style = {styles.sortText} onPress = { () => handleSortBy(5, 'Horror')}>Horror</Text>
                          <Text style = {styles.sortText} onPress = { () => handleSortBy(5, 'Mystery')}>Mystery</Text>
                          <Text style = {styles.sortText} onPress = { () => handleSortBy(5, 'Thriller')}>Thriller</Text>
                        <Text style = {styles.sortText} onPress = { () => handleSortBy(5, 'War')}>War</Text>
                      <Text style = {styles.sortText} onPress = { () => handleSortBy(5, 'Western')}>Western</Text>
                    <Text style = {styles.sortText} onPress = { () => handleSortBy(5, 'Crime')}>Crime</Text>
                  <Text style = {styles.sortText} onPress = { () => handleSortBy(5, 'Sci-Fi')}>Sci-Fi</Text>
                <Text style = {styles.sortText} onPress = { () => handleSortBy(5, 'Romance')}>Romance</Text>
              <Text style = {styles.sortText} onPress = { () => handleSortBy(5, 'Animation')}>Animation</Text>
          </>) 
          : 
          (
            <></>
          ) }
    </TouchableOpacity>
  </View>
            <TouchableOpacity style = {styles.clear} onPress = { () => handleClearAll()}>
              <Text style = {styles.clearText}>Clear All Filters</Text>
              <Icon name='checkbox-outline' style={styles.icon}></Icon>
            </TouchableOpacity>
  </View>)
}
const styles = StyleSheet.create({
  sortRectangle:{
    backgroundColor: "#333333",
    borderWidth: 1,
    borderColor: "black",
    borderRadius:5,
    margin: 5,
    width: Dimensions.get('window').width * 0.8,
  },
  sortTitle:{
    fontSize:18,
    color: "white",
    padding:5,
  },
  sortByDropdown: {
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  icon: {
    color: "rgba(94,53,177,1)",
    fontSize: 28,
  },
  wrapper: {
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  sortText:{
    color:'white',
    fontSize: 18,
    borderWidth: 1,
    padding:2,
  },
  clear:{
    width: Dimensions.get('window').width * 0.8,
    borderWidth: 1,
    borderRadius:5,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  clearText:{
    color:'white',
    fontSize: 18,
    padding:5,
  },
})
