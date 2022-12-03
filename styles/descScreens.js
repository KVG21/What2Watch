import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333'
    },
    title:{
        color:'white',
        fontSize:24,
        marginTop: 10,
        marginLeft: 15,
    },
    icon:{
        color: "rgba(145,98,228,1)",
        fontSize: 21,
        marginTop: 4,
    },
    timeIcon: {
        color: "rgba(145,98,228,1)",
        fontSize: 21,
        marginTop: 4,
        marginLeft: 15,
    },
    time:{
        color:'white',
        marginTop:5,
        marginLeft:5,
        fontSize:15
    },
    timeCont: {
        flexDirection:'row',
        alignItems: 'center',
    },
    descText:{
        color: 'white',
        fontSize: 12,
    },
    iconRow: {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    descDir: {
        color: 'white',
        fontSize: 16,
        marginTop: 10,
        marginLeft:10,
    },
    descStars:{
        color: 'white',
        fontSize:16,
        marginTop:15,
        marginLeft:10,
    },
    image:{
        width:157,
        height:203,
        marginBottom:20,
        marginLeft:5,
        marginRight:5,
      },
    descBox:{
        height: Dimensions.get('window').height * 0.25,
        width: Dimensions.get('window').width,
        backgroundColor: "rgba(37,37,37,1)",
        marginTop: 5,
        paddingHorizontal:10,
    },
    textDesc: {
        color: 'white',
        marginTop:20,
        marginLeft:5,
        fontSize:16,
    },
    episodesCont: {
        flexDirection:'row',
        alignItems: 'center',
    },
    webview: {
        margin:5,
    },
    listButtonStyle:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    recommendedImage: {
        width:180,
        height:250,
    },
    recommendedContainer: {
        alignItems: 'center',
    },
    buttonText:{
        color: 'white',
    },
    buttonContainer: {
        flexDirection:'row',
        justifyContent: 'space-around',
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
        marginTop:10,
      },
})