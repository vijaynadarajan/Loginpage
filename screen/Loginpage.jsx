import { View, Text,StyleSheet,TouchableOpacity, ImageBackground,TextInput, StatusBar } from 'react-native'
import React, { useState } from 'react'


export default function Loginpage({navigation}) {
  const [email,setemail] = useState('');
  const [password,setpassword] = useState('');


 
  return (

    <View >
      <StatusBar />
      <View style={{width:"100%",height:80,borderRadius:30,borderWidth:1,backgroundColor:"#rgba(155, 252, 245, 0.8)"}}>

      </View>

        <View style={styles.Container}>

       
       <ImageBackground style={{width:"100%",height:"100%",}} source={require("../Images/login.gif")}>
           
          
         <View style={{width:"70%",height:"50%",left:"15%",top:"5%",}}>  
           <View style ={{width:"80%",height:40,backgroundColor:"#rgba(157, 251, 204, 0.8)",borderRadius:10, top:"30%",left:"15%"}}>
                <TextInput style={{top:5,left:10,}}  
                   onChangeText={(text)=>setemail(text)}
                   value={email}
                     placeholder="Enter a Email"
                 />
            </View>
             <View style={{width:"80%",height:40,backgroundColor:"#rgba(157, 251, 204, 0.8)",borderRadius:10, top:"35%",left:"15%"}}>
                 <TextInput style={{top:5,left:10,}}  
                  onChangeText={(text)=>setpassword(text)}
                  value={password}
                  placeholder="Enter Password"
                  secureTextEntry={true}
                 />
             </View>
             <View style={{top:"40%",alignItems:"center",}}>  
                 <TouchableOpacity style={styles.buttonSin} onPress={()=>navigation.navigate("Home")}>
                    <Text>Submit</Text>
                 </TouchableOpacity>
              </View>   
         </View>  
           <TouchableOpacity style={{alignItems:"flex-end",top:"30%", marginHorizontal:10,}}>
               <Text>Forgot Password ?</Text>
           </TouchableOpacity>
         <View style={{left:"56%",top:"38%", }}>  
              <TouchableOpacity style={styles.buttonSin} onPress={()=>navigation.navigate("Signup")}>
                   <Text>Signup</Text>
               </TouchableOpacity>
          </View>      
       </ImageBackground>
       </View>
       <View style={{width:"100%",height:"14%",borderRadius:30,borderWidth:1,backgroundColor:"#rgba(155, 252, 245, 0.8)"}}>

       </View>
    </View>
  )
}
const styles = StyleSheet.create({
    Container:{
      display:"flex",
       width:"95%",
       height:600,
       backgroundColor:"pink",
       borderRadius:39,
       marginVertical:10,
       marginHorizontal:7,
       justifyContent:"center",
       alignItems:"center",
       overflow:"hidden",
       borderWidth:1,
       
    },
    buttonSin:{
      
      justifyContent:"center",
      alignItems:"center",
       width:"40%",
       height:40,
       borderRadius:15,
       backgroundColor:"#rgba(144, 254, 245, 0.8)",
       
    },
})
