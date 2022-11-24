import { View, Text} from 'react-native'
import styles from '../../styles/descScreens'
import Icon from "react-native-vector-icons/Ionicons";


export default function MovieDescriptionScreen({route}) {
    const {item} = route.params;

  return (
    <>
    {item.map((item, key) => {
        return (
            <View style = { styles.container} key = {key}>
                <Text style = {styles.title}>{item.Title}</Text>

                <View style = { styles.timeCont}>
                  <Icon name='time' style = {styles.icon}></Icon>
                  <Text style = {styles.time}>{item.Time}</Text>
                </View>

                <Text style = {styles.descText}>Trailer : {item.Trailer}</Text>

                <View style = {styles.iconRow}>
                  <Icon name='eye' style = {styles.icon}></Icon>
                  <Text style = {styles.descText}>{item.PgR}</Text>

                  <Icon name='star' style={styles.icon}></Icon>
                  <Text style = {styles.descText}>{item.Rating}</Text>

                  <Icon name='albums' style = {styles.icon}></Icon>
                  <Text style = {styles.descText}>{item.Genre}</Text>

                  <Icon name='heart' style = {styles.icon}></Icon>
                  <Text style = {styles.descText}>Add to list</Text>
                </View>


                <Text style = {styles.descDir}>Director : {item.Director}</Text>
                <Text style = {styles.descStars}>Stars : {item.Stars}</Text>

                <View style = { styles.descBox}>
                <Text style = {styles.textDesc}>Desc : {item.Description}</Text>
                </View>
            </View>
        )
    })}
    </>
  )
}