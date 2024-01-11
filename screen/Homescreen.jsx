import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text,StyleSheet, Pressable } from 'react-native';
import ImagePickerExample from '../component /Imagepicker';
//firebase impor 
import {getAuth, signOut} from "firebase/auth";
import {initializeApp} from "firebase/app";
import { firebaseConfig } from '../firebaseConfig';
//icons import 
import { AntDesign } from '@expo/vector-icons';

export default function Homescreen({navigation}) {
    
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const Logout =()=>{
    signOut(auth)
    .then(()=>{
    // Sign-Out successfull
    navigation.replace('customer');
    })
    .catch((error)=>{
      // an error
    })
  }
  return (
    <SafeAreaView>
       <View style={{width:"100%",height:60,backgroundColor:"yellow",flexDirection:"row",}}>
            <View style={{width:60,height:"100%",backgroundColor:"pink",left:10,borderRadius:99,overflow:"hidden",}}>
               <ImagePickerExample />
            </View>
            <View style={{justifyContent:"center",left:20,}}>
              <Text>name</Text>
              <Text>demo details</Text>
            </View>
            <Pressable style={{justifyContent:"center",left:"300%"}} onPress={Logout} >
                 <AntDesign name="logout" size={24} color="black" />
            </Pressable>
       </View>
      
  
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    Container:{
        flex:1,
      
    }
})
