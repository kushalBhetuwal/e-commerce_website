import { signinwithgooglepopup,createuserdocumentfromauth, signinwithredirect, auth } from "../../utlils/firebase/firebase.js";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import SignupForm from "../../components/signupform/signupform.component.jsx";


const Signin =()=>{
useEffect(()=>{
  const fetchdata = async ()=>{
    const response = await getRedirectResult(auth); 
    if(response){
      createuserdocumentfromauth(response.user)
    }
  }
  fetchdata();
}, [])
    const loggoogleuser =async()=>{
        const {user} =await signinwithgooglepopup();
        const docref = await createuserdocumentfromauth(user)
        console.log(docref);
    } 
    return(
        <div>
        <h1>Sign in Page</h1>
          <button onClick={loggoogleuser}>
            Click here to signinwithpopup
          </button>
          <button onClick={signinwithredirect}>
            Click here to signinwithdirect
          </button>
          <h2>Sign up Page</h2>
          <SignupForm/>

        </div>
    )
}

export default Signin;