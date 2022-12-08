import { StyleSheet, Dimensions } from "react-native";



export default StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
    },
    icon:{
        fontSize:40,
        color: "rgba(145,98,228,1)",
        marginLeft:20,
    },
    text: {
        fontSize:22,
        color:'white',
        marginLeft: 20,
    },
    profileCont: {
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderWidth: 1,
        width: Dimensions.get('window').width,
        height: 100,
        backgroundColor:'#333333',
        marginTop: 1,
    },
    userContainer: {
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginRight:100,
        height: 100,
        marginTop:50,
    },
    cardsContainer: {
        flex:1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 50,
    }

})