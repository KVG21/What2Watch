import {View, Text, TouchableOpacity, Alert} from 'react-native'
import styles from '../../styles/descScreens'
import Icon from "react-native-vector-icons/Ionicons";
import WebView from 'react-native-webview'
import { useState } from 'react';

export default function SeriesDescriptionScreen({route}) {
    const {item} = route.params;
    const [favoriteList, setFavoriteList] = useState([]) // favorite the series
    const onFavorite = Series => {
      setFavoriteList([...favoriteList, Series]);
    };
    return (
      <>
      {item.map((item, key) => {
          return (
            <View style = { styles.container} key = {key}>
                <Text style = {styles.title}>{item.Title}</Text>

                <View style = { styles.timeCont}>
                  <Icon name='time' style = {styles.timeIcon}></Icon>
                  <Text style = {styles.time}>{item.Time} mins</Text>
                </View>

                <View style = { styles.episodesCont}>
                  <Icon name='easel' style = {styles.timeIcon}></Icon>
                  <Text style = {styles.time}>{item.Episodes} episodes</Text>
                </View>

                <WebView 
                source={{uri: item.Trailer}}
                style={styles.webview}/>

                <View style = {styles.iconRow}>
                  <Icon name='eye' style = {styles.icon}></Icon>
                  <Text style = {styles.descText}>{item.PgR}</Text>

                  <Icon name='star' style={styles.icon}></Icon>
                  <Text style = {styles.descText}>{item.Rating}</Text>

                  <Icon name='albums' style = {styles.icon}></Icon>
                  <Text style = {styles.descText}>{item.Genre}</Text>

                  <TouchableOpacity
                    onPress={() => Alert.alert('added to favorites'
                    [
                      {text: 'ok', onPress: setFavoriteList}
                    ])}>
                  <Icon name='heart' style = {styles.icon}></Icon>
                  <Text style = {styles.descText}>Add to list</Text>
                  </TouchableOpacity>
                
                </View>


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
