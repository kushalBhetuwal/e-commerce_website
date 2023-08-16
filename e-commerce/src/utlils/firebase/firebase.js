import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithRedirect } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCekrAhKoaV9qw00Uy66iYhktjsJbtreLY",
  authDomain: "e-commerce-541a7.firebaseapp.com",
  projectId: "e-commerce-541a7",
  storageBucket: "e-commerce-541a7.appspot.com",
  messagingSenderId: "170542934990",
  appId: "1:170542934990:web:5e3c71adf211f6f6d2d99f",
};

const firebaseapp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt:'select_account'
  });


export const auth = getAuth();
export const signinwithgooglepopup =()=>signInWithPopup(auth, provider);