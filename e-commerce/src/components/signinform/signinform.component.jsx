import { useState } from "react"
import {createauthuseremailandpassword,createuserdocumentfromauth,  signinwithgooglepopup, signInAuthUserWithEmailAndPassword} from '../../utlils/firebase/firebase'
import FormInput from '../form-input/form-input.component.jsx'
import './signinform.component.scss'
import Button from '../button/button.component'

const formfields ={
    email: '',
    password: '',
}

const SigninForm = ()=>{
    const [formfield, setFormField] =useState(formfields)
    const { email, password} =formfield
    const resetfields =()=>{
        setFormField(formfields)
    }
    const handleclick =(event)=>{
       const {name ,value} = event.target
       setFormField({...formfield, [name]:value})
    }
    console.log(formfield)
    const handleSubmit = async (event)=>{
        event.preventDefault()
        
      try{
     const response= await signInAuthUserWithEmailAndPassword(email, password);
     console.log(response);
       resetfields();
      }
      catch(error){
        switch(error.code){
            case 'auth/wrong-password':
                alert("incorrect password")
                break;
            case 'auth/user-not-found':
                alert("no user associated with this email")
                break;
            default:
                break;
        }
     
    }

}
const SigninWithGoogle =async()=>{
    const {user} =await signinwithgooglepopup();
      await createuserdocumentfromauth(user)

} 
    return(
        <div className = "sign-up-container">
        <h2> Already have an account? </h2>
            <span>Sign in</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type = "email" name ='email' onChange={handleclick} value ={email} required/>
                <FormInput label="Password" type = "password"  name ='password' onChange={handleclick} value ={password} required/>
                <div className = "buttons-container">
                <Button type = "submit">Sign in</Button>
                <Button buttontype={"google"} onClick={SigninWithGoogle}  type = "button"> Google SignIn</Button>
                </div>
                
            </form>
        </div>
       
    )
}


export  default SigninForm;