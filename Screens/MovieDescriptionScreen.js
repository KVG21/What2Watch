import {View, Text} from 'react-native'
import styles from '../styles/login'

export default function MovieDescriptionScreen({route}) {
    const {item} = route.params;
  return (
    <>
    {item.map((item) => {
        return (
            <View style = { styles.container}>
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
    </>
  )
}
