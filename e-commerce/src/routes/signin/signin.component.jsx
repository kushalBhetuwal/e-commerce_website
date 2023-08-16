import { signinwithgooglepopup } from "../../utlils/firebase/firebase";

const Signin =()=>{
    const loggoogleuser =async()=>{
        const response =await signinwithgooglepopup();
        console.log(response);
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