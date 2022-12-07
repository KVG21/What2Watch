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
        marginTop:10,
        marginBottom:30,
        color:'white',
      },
})