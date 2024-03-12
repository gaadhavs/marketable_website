import React from 'react'
import { Link } from 'react-router-dom';
import './login.css'
import axios  from "axios"
export default function Register() {
    const handleSubmit=(event)=>{
        event.preventDefault();
        alert('form')
    }
    const handleChange =(event)=>{

    }

  return (
    <div className='login_body'>
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
                type='password'
                placeholder='Password'
                name='password'
                onChange={(e)=>handleChange(e)}
            />
            
            <button type='submit'>Login</button>
            <div className="already_user">
                Don't have an account? <Link to='/register'>Register</Link>
            </div>
        </form>
    </div>
  )
}
