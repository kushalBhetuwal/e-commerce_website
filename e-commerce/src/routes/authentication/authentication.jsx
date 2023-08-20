import { createuserdocumentfromauth, auth } from "../../utlils/firebase/firebase.js";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import SignupForm from "../../components/signupform/signupform.component.jsx";
import SigninForm from  "../../components/signinform/signinform.component.jsx";


const Authentication =()=>{
useEffect(()=>{
  const fetchdata = async ()=>{
    const response = await getRedirectResult(auth); 
    if(response){
      createuserdocumentfromauth(response.user)
    }
  }
  fetchdata();
}, [])
    return(
        <div>
        <h1>Sign in Page</h1>
       <SigninForm/>
          <h2>Sign up Page</h2>
          <SignupForm/>

        </div>
    )
}

export default Authentication;