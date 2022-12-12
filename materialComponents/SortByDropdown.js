import {View, Text, TouchableOpacity} from 'react-native'
import { titleASC,titleDES,ratingDES,ratingASC,handleGenreSort } from '../utils/SortByFunctions';
import { useState } from 'react';
import styles from '../styles/homescreen'
import Icon from "react-native-vector-icons/Ionicons";
import SearchBar from './SearchBar';

export default function SortByDropdown({value,setValue,backup}) {

    const [toggleSortedByDd, setToggleSortedByDd] = useState(false) // toggle between visible and hidden sorted by dropdownlist
    
    const handleSortBy = (choice, genre) => {
        setToggleSortedByDd(!toggleSortedByDd)
        let tempArray
        switch (choice) {
          case 1:
            tempArray = titleASC(value);
              setValue(tempArray)
              break; 
          case 2:
            tempArray = titleDES(value);
              setValue(tempArray)
              break;
          case 3:
            tempArray = ratingDES(value);
              setValue(tempArray)
              break;
          case 4:
            tempArray = ratingASC(value);
              setValue(tempArray)
              break;
          case 5:
            tempArray = handleGenreSort(value, genre);
            setValue(tempArray)
            break;
          case 6:
            setValue(backup)
            break;
          default:
            break;
        }
      }

  return (<>
    <View style={styles.sortRectangle}>
      <SearchBar value={value}setValue={setValue}backup={backup}/>
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

            <View style = {styles.sortContainer}>
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
            <Text style = {styles.sortText} onPress = { () => handleSortBy(6)}>See All</Text>
          </View></>) 
          : 
          (
            <></>
          ) }
    </TouchableOpacity>
  </View>
  </>)
}
