import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup,signInWithRedirect } from 'firebase/auth';
import {getFirestore,getDoc, setDoc,doc} from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyCekrAhKoaV9qw00Uy66iYhktjsJbtreLY",
  authDomain: "e-commerce-541a7.firebaseapp.com",
  projectId: "e-commerce-541a7",
  storageBucket: "e-commerce-541a7.appspot.com",
  messagingSenderId: "170542934990",
  appId: "1:170542934990:web:5e3c71adf211f6f6d2d99f",
};

export const firebaseapp = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt:'select_account'
  });


export const auth = getAuth();
export const signinwithgooglepopup =()=>signInWithPopup(auth, provider);

export const db = getFirestore();

export const createuserdocumentfromauth = async(userauth)=>{
    const userdocref = doc(db, 'users', userauth.uid)
    console.log(userdocref);
    const usersnapshot = await getDoc(userdocref);//get the data from the document

    if(!usersnapshot.exists()){
      const {displayName, email} = userauth;
      const createdat = new Date();

      try{
        await setDoc(userdocref, {
          displayName, 
          email,
          createdat
        })
      }
      catch(error){
        console.log("error logging", error.message);
      }
    }
    return userdocref;
    
}


