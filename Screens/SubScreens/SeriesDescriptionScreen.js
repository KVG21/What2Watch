import {View, Text} from 'react-native'
import styles from '../../styles/login'

export default function SeriesDescriptionScreen({route}) {
    const {item} = route.params;
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
                  <Text style = {styles.buttonOutlineText}>Episodes : {item.Episodes}</Text>
              </View>
          )
      })}
      </>
    )
}
