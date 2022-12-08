import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#333333'
    },
    userContainer:{
        flexDirection:'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: 100,
        backgroundColor: '#333333',
    },
    underlineTextbox:{
        width:300,
    },
    email: {
        color:'white',
        fontSize:22
    },
    icon: {
        color: "rgba(145,98,228,1)",
        fontSize: 40,
    },
    text: {
        backgroundColor: '#333333',
        color: "white",
        fontSize: 16,   
    },
    optionsContainer: {
        flex:1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    button: {
        padding: 5,
        width: 250,
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
})