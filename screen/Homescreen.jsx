import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text,StyleSheet, Pressable ,ScrollView,ImageBackground} from 'react-native';
import ImagePickerExample from '../component /Imagepicker';
//firebase import auth
import {getAuth, signOut} from "firebase/auth";
import {initializeApp} from "firebase/app";
import { firebaseConfig } from '../firebaseConfig';
//icons import 
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
//local datastore
import Bigboxdata from "../datastore/bigboxdata";
import Smallboxdata from '../datastore/smallboxdata';
import Movietype from "../datastore/moviegenres"

export default function Homescreen({navigation}) {


  //login firebase connect 
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
       <View style={{width:"100%",height:60,flexDirection:"row",top:10,}}>
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
                         {Bigboxdata.map((Demodata)=>( 
                     <Pressable  style={{width:250,height:160,borderTopRightRadius:20,borderTopStartRadius:20,marginHorizontal:5,overflow:"hidden",shadowColor:"black",shadowRadius:50,}} >   
                      
                         <ImageBackground style={{width:"100%",height:"100%"}} source={{uri:Demodata.image}}>

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
                                       <Text style={{fontWeight:"bold",fontSize:15,}}>{Demodata.titles}</Text>
                                       <Text style={{fontSize:15,top:4,}}>{Demodata.details}</Text>      
                                 </View>
                             </View>
                         </ImageBackground> 
                    
                     </Pressable> ))}  
                  </ScrollView>   
                 </View> 
 {/*Quick movie picks title and arrow fullcode */}         
 <View style={{width:"100%",height:40,top:40,flexDirection:"row",}}>
                    <View style={{justifyContent:"center",left:15}}>
                            <Text style={{fontWeight:"bold"}}>Quick movie picks </Text>
                    </View>
                    <View style={{top:10,left:190,flexDirection:"row"}}>
                             <MaterialIcons name="arrow-back-ios" size={20} color="black" />
                             <MaterialIcons name="arrow-forward-ios" size={20} color="black" />
                    </View>
            </View>
 {/*smallbox fullcode */}        
             <View style={{flexDirection:"row",top:50}}>    
                  <ScrollView horizontal={true} >
                         {Smallboxdata.map((Smallbox)=>(
                     <Pressable style={{width:150,height:160,borderTopRightRadius:20,borderTopStartRadius:20,marginHorizontal:5,overflow:"hidden",shadowColor:"black",shadowRadius:50,}} onPress={()=>console.log("press samll box")} >   
                      
                         <ImageBackground style={{width:"100%",height:"100%"}} source={{uri:Smallbox.image}}>

                             <View style={{width:"100%",height:40,paddingLeft:10,paddingRight:10,flexDirection:"row",justifyContent:"flex-end"}} >
                             
                                  <View style={{top:10,paddingLeft:3,paddingTop:3,width:45,height:25,borderRadius:10,backgroundColor:"#rgba(213, 96, 248, 0.8)",flexDirection:"row",}}> 
                                        <Entypo name="star" size={15} color="black" />
                                        <Text style={{fontSize:15,color:"#fff"}}>4.9</Text>   
                                  </View>
                                 
                             </View>
                             <View style={{width:"100%",height:50,borderTopRightRadius:20,borderTopStartRadius:20,backgroundColor:"white",top:70,}}>
                                  <View style={{left:15,top:3,}}> 
                                       <Text style={{fontWeight:"bold",fontSize:15,}}>{Smallbox.titles}</Text>
                                       <Text style={{fontSize:15,top:4,}}>{Smallbox.details}</Text>      
                                 </View>
                             </View>
                         </ImageBackground> 
                    
                     </Pressable>
                 ))}  
                  </ScrollView>   
                 </View>   
 {/*Movie genres fullcode */}         
   <View style={{width:"100%",height:40,top:70,}}>
                    <View style={{justifyContent:"center",left:15}}>
                            <Text style={{fontWeight:"bold",fontSize:18}}>Movie genres </Text>
                    </View>
            </View>
 {/*categorry fullcode */}        
            <View style={{flexDirection:"row",top:80}}>    
                  <ScrollView horizontal={true} >
                     {Movietype.map((Movielistdatabase)=>(
                          <Pressable style={{width:80,height:170,marginHorizontal:5,overflow:"hidden",shadowColor:"black",shadowRadius:50,}}  >   
                                  <View style={{width:70,height:70,backgroundColor:"#rgba(213, 96, 248, 0.8)",left:6,borderRadius:20,justifyContent:"center",alignItems:"center",}}> 
                                       <Ionicons name="md-football-outline" size={36} color="black" />
                                 </View>
                                 <View style={{justifyContent:"center",alignItems:"center",top:10,}}>
                                    <Text>{Movielistdatabase.filmtype}</Text>
                                 </View>
                          </Pressable>
                       ))}  
                </ScrollView>   
            </View>   
           <View style={{width:"100%",height:100,}}>

           </View>


  
            
                     
                 

  
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    Container:{
        flex:1,
      
    }
})
