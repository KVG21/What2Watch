import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "#333333"
    },
    underlineTextbox: {
      height: 45,
      width: 300,
    },
    iconTextbox: {
      marginTop:22,
      height:45,
      width:300,
    },
    button: {
      padding: 5,
      width: 130,
      height: 59,
      backgroundColor: "rgba(94,53,177,1)",
      borderRadius: 10,
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:22,
    },
    buttonText: {
      color: "white",
      fontSize: 16,
    },
    buttonContainer:{
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: 'space-around',
      marginHorizontal: 37,
    }
  })