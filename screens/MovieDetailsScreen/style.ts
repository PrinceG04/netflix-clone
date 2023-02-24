import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:'brown'
    },
    title:{
        fontWeight:'bold',
        fontSize:24,
    },
    descContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    image:{
        width:'100%',
        aspectRatio:16/9,
        resizeMode:'cover'
    },
    match:{
        color:'#59d467',
        fontWeight:'bold',
        marginRight:15,

    },
    year:{
        color:'#757575',
        marginRight:10,

    },
    ageContainer:{
        backgroundColor:'#e6e229',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:2,
        paddingHorizontal:3,
        marginRight:10,

    },
    age:{
        color:'black',
        fontWeight:'bold'
    },
    // Buttons
    playButton:{
        flexDirection:'row',
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        borderRadius:3,
        marginVertical:5,
    },
    playButtonText:{
        fontSize:16,
        fontWeight:'bold',
        color:'black',
    },
    downloadButton:{
        flexDirection:'row',
        backgroundColor:'#2b2b2b',
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        borderRadius:3,
        marginVertical:5,
    },
    downloadButtonText:{
        color:"white",
        fontWeight:'bold',
        fontSize:16,
        marginLeft:5
    }

});


export default styles;