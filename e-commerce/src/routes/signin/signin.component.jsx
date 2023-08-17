import { signinwithgooglepopup,createuserdocumentfromauth } from "../../utlils/firebase/firebase.js";

const Signin =()=>{
    const loggoogleuser =async()=>{
        const {user} =await signinwithgooglepopup();
        console.log(user);
        createuserdocumentfromauth(user)
    }
    return(
        <div>
          <button onClick={loggoogleuser}>
            Click here to signin
          </button>
        </div>
    )
}

export default Signin;