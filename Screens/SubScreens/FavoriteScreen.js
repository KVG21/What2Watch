import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, TouchableOpacity, TextInput, FlatList, Alert } from 'react-native'
import styles from '../../styles/homescreen'
import MovieDescriptionScreen from './MovieDescriptionScreen';
import SeriesDescriptionScreen from './SeriesDescriptionScreen';


    const FavoriteScreen = () => {
    const route = useRoute();
    const { favoriteList } = route.params;
  
    return (
      <FlatList
        data={favoriteList}
        renderItem={({ item }) => {
          return (
            <View style={styles.container}>
              <View>
                <Image
                  source={{ uri: item['image'] }}
                  style={styles.image}
                  resizeMode='cover'
                />
              </View>
              <View style={styles.container}>
                <View style={styles.row}>
                  <Text
                    style={styles.text}
                    allowFontScaling={true}
                    numberOfLines={1}
                  >
                    {item && item['name']}
                  </Text>
                  <MaterialIcons name='' size={24} color={'#444'} />
                </View>
              </View>
            </View>
          );
        }}
      />
    );
  }

  export default FavoriteScreen