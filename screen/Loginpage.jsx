import { View, Text,StyleSheet,TouchableOpacity, ImageBackground,TextInput, StatusBar, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'

//firebase components import 
import {initializeApp} from "firebase/app";
import { firebaseConfig } from '../firebaseConfig';
import {getAuth,sendPasswordResetEmail,signInWithEmailAndPassword,} from "firebase/auth"

export default function Loginpage({navigation}) {
//state create for login
  const [password,setpassword] = useState('');
  const [email,setemail] = useState('');

  //Loginpage to screen  ai
  const handleSignin =()=>{
//import app and auth functions for connecting
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
//signin code fire base connect 
    signInWithEmailAndPassword(auth , email, password)
    .then((userCredential)=>{
      console.log("Signin user")
      const user = userCredential.user;
      console.log(user)
      navigation.navigate('Home')
    })
    .catch(error =>{
      console.log(error)
      alert("Email or password is Wrong")
  
    })
  }
  //forgote password reset password
  //  useEffect(()=>{
  //   const app = initializeApp(firebaseConfig);
  //   const auth = getAuth(app);
  //   onAuthStateChanged(auth,(user)=>{
  //     if(user){
  //       navigation.navigate('Home');
  //     }
  //   })
  //  })
  const Forgotepassword =()=>{
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    if(email != null){
     sendPasswordResetEmail(auth, email)
     .then(()=>{
       alert("password reset email has been sent success")

     })
     .catch((error)=>{
     const errorCode = error.code;
     const errorMessage = error.message;
     alert(errorMessage);
     })
    }
    else{
      alert("Please enter a valid email");
    }
  }
//retun login screen code
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
             <View style={{top:"40%",alignItems:"center",backgroundColor:"#rgba(144, 254, 245, 0.8)",width:100,height:35,borderRadius:8,left:"35%"}}>  
                 <TouchableOpacity style={{paddingTop:"7%",}} onPress={handleSignin}>
                    <Text>Submit</Text>
                 </TouchableOpacity>
              </View>   
         </View>  
           <TouchableOpacity style={{alignItems:"flex-end",top:"30%", marginHorizontal:10,}} onPress={Forgotepassword}>
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
       backgroundColor:"yellow",
      justifyContent:"center",
      alignItems:"center",
       width:"40%",
       height:40,
       borderRadius:15,
       backgroundColor:"#rgba(144, 254, 245, 0.8)",
       
    },
})
