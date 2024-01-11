import { View, Text ,StyleSheet, ImageBackground, TextInput, TouchableOpacity, Alert} from 'react-native'
import React, { useState } from 'react'
// import {auth,} from "../firebaseConfig";
// import { createUserWithEmailAndPassword } from 'firebase/auth';
import {getAuth,createUserWithEmailAndPassword,} from "firebase/auth"
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebaseConfig';



export default function Signupscreen({navigation}) {
  const [name,setname] = useState('');
  const [email,setemail] = useState('');
  const [password,setpassword] = useState('');
  const [mobile,setmobile] = useState('');

  const handleCreateAccount =()=>{
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth , email, password)
    .then((userCredential)=>{
      alert("create account")
      const user = userCredential.user;
      console.log(user)
    })
    .catch(error =>{
      console.log(error)
      alert("fill froms")
    })
  };
  


  return (
  <View>
       <View style={{width:"100%",height:80,borderRadius:30,borderWidth:1,backgroundColor:"#rgba(33, 36, 188, 0.8)"}}>

      </View>
    <View style={styles.Container}>
      <ImageBackground style={{width:"100%",height:"100%",justifyContent:"center",alignItems:"center",}} source={require("../Images/Signin.gif")}>  
      <View style ={{width:"60%",height:40,backgroundColor:"#rgba(243, 253, 192, 0.8)",borderRadius:10,}}>
         <TextInput style={{top:5,left:10,}}  
            onChangeText={(value)=>setname(value)}
            value={name}
            placeholder="Enter a Name"
         />
      </View>
       <View style ={{width:"60%",height:40,backgroundColor:"#rgba(243, 253, 192, 0.8)",borderRadius:10,top:"2%",}}>
         <TextInput style={{top:5,left:10,}}  
            onChangeText={(value)=>setemail(value)}
            value={email}
            placeholder="Enter a Email"
         />
      </View>
   
            <View style ={{width:"60%",height:40,backgroundColor:"#rgba(243, 253, 192, 0.8)",borderRadius:10,top:"4%",}}>
               <TextInput style={{top:5,left:10,}}  
            onChangeText={(value)=>setpassword(value)}
            value={password}
            placeholder="Enter Password"
            secureTextEntry={true}
                />
            </View>
             <View style ={{width:"60%",height:40,backgroundColor:"#rgba(243, 253, 192, 0.8)",borderRadius:10,top:"6%",}}>
                 <TextInput style={{top:5,left:10,}}  
            onChangeText={(value)=>setmobile(value)}
            value={mobile}
            placeholder="Enter Mobile Number"
            textContentType='numeric'
                   />
             </View>
             <TouchableOpacity onPress={()=> handleCreateAccount()} style={{width:"40%",height:45,backgroundColor:"#rgba(101, 243, 253, 0.8)",borderRadius:20,justifyContent:"center",alignItems:"center",top:"10%",}}>
                 <Text>Submit</Text>
             </TouchableOpacity>

     </ImageBackground>
    </View>
    <View style={{width:"100%",height:"14%",borderRadius:30,borderWidth:1,backgroundColor:"#rgba(33, 36, 188, 0.8)"}}>

   </View>
</View>    
  )
}
const styles = StyleSheet.create({
  Container:{
    display:"flex",
    
     width:"95%",
     height:"75%",
     marginHorizontal:8,
     marginVertical:20,
      backgroundColor:"lightblue",
     borderRadius:39,
     overflow:"hidden",
     borderWidth:1,


    
  },
  buttonSin:{
    
  },
})
