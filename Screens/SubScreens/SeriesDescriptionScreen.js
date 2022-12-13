import {View, Text,TouchableOpacity} from 'react-native'
import { useState, useEffect } from 'react'
import styles from '../../styles/descScreens'
import Icon from "react-native-vector-icons/Ionicons";
import WebView from 'react-native-webview'
import { FAVOURITES, addDoc, collection, firestore, getAuth, where, query, onSnapshot } from '../../firebase';

export default function SeriesDescriptionScreen({route}) {

    const {item} = route.params;
    const [isAnonymous, setIsAnoymoys ] = useState(true);
    const [alreadyAdded, setAlreadyAdded] = useState(true);
    const [favourites, setFavourites] = useState([])
    const auth = getAuth()

    
    useEffect(() => {
      if(auth.currentUser.isAnonymous === true) {
        setIsAnoymoys(false)
      }
    })
      

    useEffect(() => {
      const itemArray = [...item]
      const q = query(collection(firestore,FAVOURITES), where('Title','==', itemArray[0].Title)) // query with route to movies in database
      const queryAllMovies = onSnapshot(q,(querySnapshot) => { //function to query all movies
      
        const tempArray = []
        querySnapshot.forEach((doc) => { // create objects of data
          const moviesObject = {
            uid : doc.data().uid,
          }
          tempArray.push(moviesObject) // push object into temporary array
        })
        setFavourites(tempArray)
      })
      return () => {
      queryAllMovies() // run queryAllMovies function
  
      }
    }, []);

    useEffect( () => {
      if(auth.currentUser !== null) {
        let found = favourites.findIndex(p => p.uid === auth.currentUser.uid)
          if(found !== -1) {
              setAlreadyAdded(false)
          }
      }
    })

    const handleFavoriteAdd= async(item) => {
      const uid = getAuth()
        const docRef = await addDoc(collection (firestore,FAVOURITES),{
              uid: uid.currentUser.uid,
              Photo: item.Photo,
              Description : item.Description,
              Episodes: item.Episodes,
              Genre : item.Genre,
              PgR : item.PgR,
              Rating : item.Rating,
              Stars : item.Stars,
              Time : item.Time,
              Title : item.Title,
              Trailer : item.Trailer,
        }).catch(error => console.log(error))
    }

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
                allowsFullscreenVideo={true}
                scrollEnabled={false}
                bounces={false}
                source={{uri: item.Trailer}}
                style={styles.webview}/>

                <View style = {styles.iconRow}>
                  <Icon name='eye' style = {styles.icon}></Icon>
                  <Text style = {styles.descText}>{item.PgR}</Text>

                  <Icon name='star' style={styles.icon}></Icon>
                  <Text style = {styles.descText}>{item.Rating}</Text>

                  <Icon name='albums' style = {styles.icon}></Icon>
                  <Text style = {styles.descText}>{item.Genre}</Text>

                {isAnonymous ? (<>
                  {alreadyAdded ? (<>
                    <TouchableOpacity
                      style = {styles.listButtonStyle}
                      onPress={() => handleFavoriteAdd(item)}>
                    <Icon name='heart' style = {styles.icon}></Icon>
                    <Text style = {styles.descText}>Add to list</Text>
                    </TouchableOpacity>
                    </>) : (<></>)}
                    
                </>) : (<></>)}      
                </View>


                <Text style = {styles.descStars}>Stars : {item.Stars}</Text>

                <View style = { styles.descBox}>
                <Text style = {styles.textDesc}>{item.Description}</Text>
                </View>
            </View>
          )
      })}
      </>
    )
}
