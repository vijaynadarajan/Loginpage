




//  export const firebaseConfig = {
//     apiKey: "AIzaSyBX2eHw2b8OHfJuQ2LfhD25PB3QbOxxunY",
//     authDomain: "logindemo-5779c.firebaseapp.com",
//     projectId: "logindemo-5779c",
//     storageBucket: "logindemo-5779c.appspot.com",
//     messagingSenderId: "391306145781",
//     appId: "1:391306145781:web:7b05468e07bd79b3a47abc"
//   };


import firebase from 'firebase/compat/app';
import {getDatabase} from "firebase/database";

  const firebaseConfig = {
 
        apiKey: "AIzaSyBX2eHw2b8OHfJuQ2LfhD25PB3QbOxxunY",
        authDomain: "logindemo-5779c.firebaseapp.com",
        databaseURL: "https://logindemo-5779c-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "logindemo-5779c",
        storageBucket: "logindemo-5779c.appspot.com",
        messagingSenderId: "391306145781",
        appId: "1:391306145781:web:7b05468e07bd79b3a47abc"
      
  };


  
  

    if(firebase.apps.length === 0){
       firebase.initializeApp(firebaseConfig);
    }
    const db =getDatabase();
  export {db}
  export {firebaseConfig}

