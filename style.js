import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        },
        img:{
            height:150,
            width:150
        },
        text:{
            fontSize:20,
            color:'black',
            margin:15
        },
        viewInput:{
            borderWidth:1,
            borderColor:'#8f8f8f',
            width:'80%',
            paddingVertical:15,
            borderRadius:5,
            margin:15,
            fontSize:20
        },
        btn:{
            borderRadius:10,
            justifyContent:'center',
            alignItems:'center',
            width:'30%',
            height:30,
            backgroundColor:'#8f8f8f',
        },
        viewResult:{
            marginTop:10
        },
        textResult:{
            fontSize:20
        }
})
export default styles;