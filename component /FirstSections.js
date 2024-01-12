import { View, Text ,ScrollView,Pressable,ImageBackground} from 'react-native'
import React, { useEffect, useState } from 'react'


//local datastore
import { db } from "../firebaseConfig";
import {ref,onValue} from "firebase/database";

 
//iconse import
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

function FirstSections() {
//firebase store database
  const [todoData,settodoData] = useState([]);
  useEffect(()=>{
    const startCountRef =ref(db,'Demodata/');
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
     {/*New movies picks title and arrow fullcode */}         
 <View style={{width:"100%",height:40,top:10,flexDirection:"row",}}>
                    <View style={{justifyContent:"center",left:15}}>
                            <Text style={{fontWeight:"bold"}}>New Movie List </Text>
                    </View>
                    <View style={{top:10,left:200,flexDirection:"row"}}>
                             <MaterialIcons name="arrow-back-ios" size={20} color="black" />
                             <MaterialIcons name="arrow-forward-ios" size={20} color="black" />
                    </View>
            </View>
           {/*bigbox fullcode */}        
           <View style={{flexDirection:"row",top:30}}>    
                  <ScrollView horizontal={true} >
                         {todoData.map((item,index)=>( 
                     <Pressable key={index}  style={{width:250,height:160,borderTopRightRadius:20,borderTopStartRadius:20,marginHorizontal:5,overflow:"hidden",shadowColor:"black",shadowRadius:50,}} >   
                      
                         <ImageBackground style={{width:"100%",height:"100%"}} source={{uri:item.image}}>

                             <View style={{width:"100%",height:40,paddingLeft:10,paddingRight:10,flexDirection:"row",justifyContent:"space-between"}} >
                                  <View style={{top:10,paddingLeft:10,width:78,height:25,borderRadius:10,backgroundColor:"#rgba(213, 96, 248, 0.8)"}}>   
                                       <Text style={{fontSize:15,color:"#fff"}}>premium</Text>   
                                  </View>
                                  <View style={{top:10,paddingLeft:3,paddingTop:3,width:45,height:25,borderRadius:10,backgroundColor:"#rgba(213, 96, 248, 0.8)",flexDirection:"row",}}> 
                                        <Entypo name="star" size={15} color="black" />
                                        <Text style={{fontSize:15,color:"#fff"}}>4.9</Text>   
                                  </View>
                                 
                             </View>
                             <View style={{width:"100%",height:50,borderTopRightRadius:20,borderTopStartRadius:20,backgroundColor:"white",top:70,}}>
                                  <View style={{left:15,top:3,}}> 
                                       <Text style={{fontWeight:"bold",fontSize:15,}}>{item.titles}</Text>
                                       <Text style={{fontSize:15,top:4,}}>{item.details}</Text>      
                                 </View>
                             </View>
                         </ImageBackground> 
                    
                     </Pressable> ))}  
                  </ScrollView>   
                 </View> 
    </View>
  )
}
export default FirstSections;
