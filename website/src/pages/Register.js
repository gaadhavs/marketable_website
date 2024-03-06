import { Link } from 'react-router-dom'
import React , {useState} from 'react'
import './register.css'
export default function Register() {

    const [values,setValues]=useState({
        username:"",
        email:"",
        password:"",
        confirmpassword:"",
    });

    const handleSubmit=(event)=>{
        event.preventDefault();
        if(handleValidation()){
            //post values
        }
    }

    const handleValidation=()=>{
        const{password,confirmpassword,username,email}=values;
        if(password!==confirmpassword)
        {
            alert("Passwords should be same");
            return false
        }
        else if(username.length<3){
            alert("Username should be greater than 3");
            return false
        }
        else if(password.length<8){
            alert("Password should be equal to or less than 8 characters");
            return false
        }
        return true
        
    }
    const handleChange =(event)=>{
        setValues({...values,[event.target.name]:event.target.value});
    };

  return (
    <div>
        <form onSubmit={(event)=>handleSubmit(event)}>
            <div className="brand">
            </div>
            <input
                type='text'
                placeholder='Username'
                name='username'
                onChange={(e)=>handleChange(e)}
            />
            <input
                type='email'
                placeholder='Email'
                name='email'
                onChange={(e)=>handleChange(e)}
            />
            <input
                type='password'
                placeholder='Password'
                name='password'
                onChange={(e)=>handleChange(e)}
            />
            <input
                type='password'
                placeholder='Confirm Password'
                name='confirmpassword'
                onChange={(e)=>handleChange(e)}
            />
            <button type='submit'>Create User</button>
            <div className="already_user">
                Already have an account ? <Link to='/login'>Login</Link>
            </div>
        </form>
    </div>
  )
}
