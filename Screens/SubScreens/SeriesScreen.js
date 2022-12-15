import { FlatList, Image, TouchableOpacity, Text} from 'react-native'
import { useNavigation } from '@react-navigation/core'
import styles from '../../styles/homescreen'
import SortByDropdown from '../../materialComponents/SortByDropdown'

export default function SeriesScreen({series, displayForSeries, setDisplayForSeries}) {

    const navigation = useNavigation()

      const handleImageClick = (item) => { // handle image click
        let tempArray = [item]
        navigation.navigate('SdesScreen', { // navigate to seriesDescriptionScreen with item selected
          item : tempArray,
        } )
      }

  return (
   <>
     <Text style={styles.title}>Series</Text>
      <SortByDropdown value = {series} setValue = {setDisplayForSeries}/>

     <FlatList
          style={styles.imagesContainer}
          keyExtractor={(item) => item.id}
          data={displayForSeries}
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
