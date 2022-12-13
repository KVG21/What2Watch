import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#333333"
      },
    favoriteContainer: {
        alignItems: 'center',
      },
    imagesContainer: {
        marginTop:30,
        position:'relative'
      },
    image:{
        width:180,
        height:250,
        marginLeft:5,
        marginRight:5,
      },
    text:{
        color:'white',
      },
    itemContainer:{
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    button:{
      width: 80,
      height: 40,
      backgroundColor: "rgba(94,53,177,1)",
      borderRadius: 10,
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical:5,
    }
})