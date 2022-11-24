import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(20,20,20,1)'
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },
    image:{
      width:157,
      height:203,
      marginBottom:20,
      marginLeft:5,
      marginRight:5,
    },
    sortRectangle:{
      marginTop:20,
      backgroundColor: "rgba(20,20,20,1)",
      borderWidth: 1,
      borderColor: "rgba(49,49,49,1)",
      width:170,
    },
    imagesContainer: {
      marginTop:30,
      position:'relative'
    },
    icon: {
      color: "rgba(94,53,177,1)",
      fontSize: 27,
    },
    sortTitle:{
      fontSize:22,
      color: "white",
    },
    wrapper: {
      flexDirection:'row',
      justifyContent: 'space-between',
    },
    sortText:{
      color:'white',
      fontSize: 16,
      margin:5,
    }

  })