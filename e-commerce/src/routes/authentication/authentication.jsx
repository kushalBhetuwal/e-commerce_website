import SignupForm from "../../components/signupform/signupform.component.jsx";
import SigninForm from  "../../components/signinform/signinform.component.jsx";
import './authentication.scss';


const Authentication =()=>{
    return(
        <div className = "authentication-container">
        <SigninForm/>
        <SignupForm/>
        </div>
    )
}

export default Authentication;