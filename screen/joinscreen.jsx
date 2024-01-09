import { View, Text ,StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'

export default function Joinscreen({navigation}) {
  return (
    <View style={styles.Container}>
        <Text>joinScreen</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("customer")} style={{width:"45%",height:40,backgroundColor:"#rgba(65, 231, 242, 0.8)",borderRadius:34,justifyContent:"center",alignItems:"center",top:20,}}>
               <Text > Login page</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width:"45%",height:40,backgroundColor:"#rgba(65, 231, 242, 0.8)",borderRadius:34,justifyContent:"center",alignItems:"center",top:40,}}>
               <Text > Signup page</Text>
        </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    Container:{
        width:"100%",
        height:"100%",
        backgroundColor:"#rgba(179, 65, 242, 0.8)",
        borderRadius:39,
        justifyContent:"center",
        alignItems:"center",
    },

})
