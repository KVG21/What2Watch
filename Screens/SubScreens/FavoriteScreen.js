import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, TouchableOpacity, TextInput, FlatList, Alert } from 'react-native'
import styles from '../../styles/homescreen'
import MovieDescriptionScreen from './MovieDescriptionScreen';
import SeriesDescriptionScreen from './SeriesDescriptionScreen';


export default function Favoritelist() {
    const [favorite, setFavorite] = useState([]);
    const [uid, setUid] = useRecoilState(userIDCheck);
  
    useEffect(() => {
      db.collection("MOVIES, SERIES").onSnapshot((snapshot) => {
        setFavorite(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            article: doc.data(),
          }))
        );
      });
    }, []);

    const favoriteList = favorite
    .filter(() =>
      db
        .collection("users")
        .doc(uid)
        .collection("favorite")
        .doc(MOVIES.id, SERIES.id)
        .get()
        .then((doc) => doc.data()?.isFavorite)
    )

}