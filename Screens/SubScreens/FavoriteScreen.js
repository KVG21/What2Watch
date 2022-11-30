import {View, Text} from 'react-native'
import styles from '../../styles/login'
import * as firebase from '../../firebase'


import {firestore, MOVIES, onSnapshot,query,collection } from '../../firebase'
import { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import { SERIES} from '../../firebase'
import {titleASC,titleDES,ratingASC,ratingDES,sortToGenres} from '../../utils/SortByFunctions'

export default function favorites() {
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

useEffect(() => {
  db.collection("MOVIES").onSnapshot((snapshot) => {
    setFavorite(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        MOVIES: doc.data(),
      }))
    );
  });
}, []);

firestore()
        .collection("users")
        .doc(uid)
        .collection("favorite")
        .get()
.then(querySnapshot => {
 querySnapshot.forEach(querySnapshot => {
// update state array with article id
    });
  });


firestore()
  .collection(MOVIES, SERIES)
  .where('id', 'in',[arrayOfFavoriteID])
  .get()
  .then(querySnapshot => {
  // updateState for div to map through and render
  });






}