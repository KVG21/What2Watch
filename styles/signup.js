import { StyleSheet } from "react-native"

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
      width: 150,
      height: 59,
      backgroundColor: "rgba(94,53,177,1)",
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:22,
    },
    buttonText: {
      color: "white",
      fontSize: 16,
    },
    buttonOutline: {
      width: 150,
      height: 59,
      backgroundColor: "rgba(20,20,20,1)",
      borderWidth: 2,
      borderColor: "rgba(94,53,177,1)",
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 22,
    },
    buttonOutlineText: {
      color: "white",
    },
  
  })