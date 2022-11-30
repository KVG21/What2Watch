
import { View, Text} from 'react-native'
import styles from '../../styles/descScreens'
import Icon from "react-native-vector-icons/Ionicons";
import WebView from "react-native-webview"
import {  TouchableOpacity} from 'react-native'


import favorites from './FavoriteScreen';
import { MOVIES } from '../../firebase';



export default function MovieDescriptionScreen({route}) {
    const {item} = route.params;
    const [favorite, setFavorite] = useState([]);
    const Favorite = MOVIES => {
      setFavorite([...favorite, MOVIES]);
    };
    
      // function to remove an item from favorite list
      const onRemoveFavorite = MOVIES => {
        const filteredList = favorite.filter(
          item => item.id !== MOVIES.id
        );
        setFavorite(filteredList);
      };
    
      // function to check if an item exists in the favorite list or not
      const ifExists = MOVIES => {
        if (favorite.filter(item => item.id === MOVIES.id).length > 0) {
          return true;
        }
        return false;
      };
    
      // rest of the code remains the same
    };
  return (
    <>
    {item.map((item, key) => {
        return (
            <View style = { styles.container} key = {key}>
                <Text style = {styles.buttonOutlineText}>Title : {item.Title}</Text>
                <Text style = {styles.buttonOutlineText}>PgR : {item.PgR}</Text>
                <Text style = {styles.buttonOutlineText}>Rating : {item.Rating}</Text>
                <Text style = {styles.buttonOutlineText}>Stars : {item.Stars}</Text>
                <Text style = {styles.buttonOutlineText}>Time : {item.Time}</Text>
                <Text style = {styles.buttonOutlineText}>Trailer : {item.Trailer}</Text>
                <Text style = {styles.buttonOutlineText}>Desc : {item.Description}</Text>
                <Text style = {styles.buttonOutlineText}>Genre : {item.Genre}</Text>
                <Text style = {styles.buttonOutlineText}>Director : {item.Director}</Text>
              
            </View>
        )
    })}
    <View
    style={styles.container}
    behavior="padding">
      <TouchableOpacity onPress={Favorite} style={styles.button}>
          <Text style={styles.buttonText}>Favorite</Text>
        </TouchableOpacity>
        </View>
        <View
    style={styles.container}
    behavior="padding">
      <TouchableOpacity onPress={onRemoveFavorite} style={styles.button}>
          <Text style={styles.buttonText}>remove from favorites</Text>
        </TouchableOpacity>
        </View>
     
    </>
  )
