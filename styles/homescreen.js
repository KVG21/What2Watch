import { StyleSheet } from "react-native";

export default StyleSheet.create({
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#333333'
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },
    image:{
      width:180,
      height:250,
      marginBottom:20,
      marginLeft:5,
      marginRight:5,
    },
    sortRectangle:{
      marginTop:10,
      backgroundColor: "#333333",
      borderWidth: 1,
      borderColor: "black",
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
    },
    title:{
      color:'white',
      fontSize: 22,
    },

  })