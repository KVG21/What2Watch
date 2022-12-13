import { FlatList, Image, TouchableOpacity, Text} from 'react-native'
import { useNavigation } from '@react-navigation/core'
import styles from '../../styles/homescreen'
import SortByDropdown from '../../materialComponents/SortByDropdown'

export default function SeriesScreen({series, displayForSeries, setDisplayForSeries, isAnonymous}) {

    const navigation = useNavigation()

      const handleImageClick = (item) => {
        let tempArray = [item]
        navigation.navigate('SdesScreen', {
          item : tempArray,
          isAnonymous : isAnonymous
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
