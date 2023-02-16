import { getFirestore } from '@firebase/firestore/lite'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAgAcbifERpUiXBLkjQsETVC_mlT_u2Ek0",
    authDomain: "brainanalytics-pk.firebaseapp.com",
    databaseURL: "https://brainanalytics-pk-default-rtdb.firebaseio.com",
    projectId: "brainanalytics-pk",
    storageBucket: "brainanalytics-pk.appspot.com",
    messagingSenderId: "972303021741",
    appId: "1:972303021741:web:884ba99250f215276f7824"
  };
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app)
  
  export {app , db};