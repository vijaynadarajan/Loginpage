import { View, Text ,ScrollView,Pressable,ImageBackground} from 'react-native'
import React, { useEffect, useState } from 'react'


//local datastore
import { db } from "../firebaseConfig";
import {ref,onValue} from "firebase/database";
//import icons
import { Ionicons } from '@expo/vector-icons';

export default function LastSection() {
//firebase connecting
  const [todoData,settodoData] = useState([]);
  useEffect(()=>{
    const startCountRef =ref(db,'Movielistdatabase/');
    onValue(startCountRef,(snapshot)=>{
        const data = snapshot.val()
        const newpost = Object.keys(data).map(key =>({
            id:key,
            ...data[key],
        }))
        console.log(newpost);
        settodoData(newpost)
    })
 },[])
  return (
    <View>
    {/*Movie genres fullcode */}         
   <View style={{width:"100%",height:40,top:70,}}>
                    <View style={{justifyContent:"center",left:15}}>
                            <Text style={{fontWeight:"bold",fontSize:18}}>Movie genres </Text>
                    </View>
            </View>
 {/*categorry fullcode */}        
            <View style={{flexDirection:"row",top:80}}>    
                  <ScrollView horizontal={true} >
                     {todoData.map((item,index)=>(
                          <Pressable key={index} style={{width:80,height:170,marginHorizontal:5,overflow:"hidden",shadowColor:"black",shadowRadius:50,}}  >   
                                  <View style={{width:70,height:70,backgroundColor:"#rgba(213, 96, 248, 0.8)",left:6,borderRadius:20,justifyContent:"center",alignItems:"center",}}> 
                                       <Ionicons name="md-football-outline" size={36} color="black" />
                                 </View>
                                 <View style={{justifyContent:"center",alignItems:"center",top:10,}}>
                                    <Text>{item.filmtype}</Text>
                                 </View>
                          </Pressable>
                       ))}  
                </ScrollView>   
            </View>   
    </View>
  )
}