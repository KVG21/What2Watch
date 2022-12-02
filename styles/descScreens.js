import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333'
    },
    title:{
        color:'white',
        fontSize:24,
        marginTop: 20,
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
        marginTop: 14,
    },
    descDir: {
        color: 'white',
        fontSize: 16,
        marginTop: 35,
        marginLeft:10,
    },
    descStars:{
        color: 'white',
        fontSize:16,
        marginTop:28,
        marginLeft:10,
    },
    descBox:{
        width: Dimensions.get('window').width,
        backgroundColor: "rgba(37,37,37,1)",
        marginTop: 40,
        paddingBottom:50,
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
        margin:15,
    }
})