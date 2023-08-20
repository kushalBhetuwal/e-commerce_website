import { useState } from "react"
import {createauthuseremailandpassword,createuserdocumentfromauth} from '../../utlils/firebase/firebase'
import FormInput from '../form-input/form-input.component.jsx'

const formfields ={
    displayname:'',
    email: '',
    password: '',
    confirm:''
}

const SignupForm = ()=>{
    const [formfield, setFormField] =useState(formfields)
    const {displayName, email, password, confirm} =formfield
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
        if(password !==confirm){
            alert("password do not match")
            return;
        }
      try{

        const {user}= await createauthuseremailandpassword(email, password);
      
       await createuserdocumentfromauth(user,{displayName})
       resetfields();
      }
      catch(error){
        if(error.code==='auth/email-already-in-use'){
          alert('email and username already in use')
        }
        console.log("cannnot log the response", error);
      }
      
    }

 
    return(
        <div>
            <p>Signup with email and password</p>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" type = "text" name ='displayName' onChange={handleclick} value={displayName} required/>
                <FormInput label="Email" type = "email" name ='email' onChange={handleclick} value ={email} required/>
                <FormInput label="Password" type = "password"  name ='password' onChange={handleclick} value ={password} required/>
                <FormInput label="Confirm Password" type = "password"  name ='confirm'  onChange={handleclick} value={confirm} required/>
                <button type = "submit">Submit</button>
            </form>
        </div>
       
    )
}

export  default SignupForm