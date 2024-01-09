import { View, Text ,StyleSheet, TouchableOpacity, ImageBackground,SafeAreaView } from 'react-native'
import React from 'react'





export default function Welcomepage({navigation}) {
  return (
   
    <View style={styles.Container}>
       <SafeAreaView>
       <ImageBackground style={{top:"15%",height:"85%"}}source={require("../Images/Welcome.gif")}>
            <TouchableOpacity style={styles.buttonSin} onPress={()=>navigation.navigate("customer")}>
              <Text style={{fontWeight:"bold",fontSize:15,color:"#rgba(5, 5, 5, 0.8)"}}>START</Text>
            </TouchableOpacity>
       </ImageBackground>
       </SafeAreaView>
    </View>
   
  )
}
const styles = StyleSheet.create({
    Container:{
       flex:1,
        overflow:"hidden",
        backgroundColor:"#fff",
    },
    buttonSin:{
      justifyContent:"center",
      alignItems:"center",
       width:"40%",
       height:40,
       borderRadius:99,
       top:"75%",
       left:"30%",
       backgroundColor:"#rgba(161, 205, 249, 0.8)",
    },

})
