    import { Link ,useNavigate} from 'react-router-dom'
    import React , {useState} from 'react'
    import './register.css'
    import axios from "axios"
    import cookies from "js-cookie"
    export default function Register() {
        const navigate=useNavigate();
        
        const [name,setName]=useState();
        const [email,setEmail]=useState();
        const [password,setPassword]=useState();
        const [confirmpassword,setConfirmpassword]=useState();

        const handleSubmit=(event)=>{
            event.preventDefault();
            if(handleValidation()){
                axios.post('http://localhost:3001/register',{name,email,password})
                .then(result=>
                    {
                        console.log(result)
                        cookies.set('username', name);
                        cookies.set('password', password);
                        navigate('/');
                    })
                .catch((error) => {
                    // Handle error
                    if (error.response) {
                        // The request was made, but the server responded with an error status code (e.g., 404, 500)
                        console.error('Error status code:', error.response.status);
                        console.error('Error data:', error.response.data);
                    } else if (error.request) {
                        // The request was made, but no response was received
                        console.error('No response received:', error.request);
                    } else {
                        // Something else happened while setting up the request
                        console.error('Error:', error.message);
                    }
                })
            }
        }

        const handleValidation=()=>{
            if(password!==confirmpassword)
            {
                alert("Passwords should be same");
                return false
            }
            else if(name.length<3){
                alert("Username should be grea  ter than 3");
                return false
            }
            else if(password.length<8){
                alert("Password should be equal to or less than 8 characters");
                return false
            }
            return true
            
        }
        

    return (
        <div className='register_body'> 
            <form onSubmit={handleSubmit}>
                <div className="brand">
                </div>
                <input
                    type='text'
                    placeholder='Username'
                    name='username'
                    onChange={(e)=>setName(e.target.value)}
                />
                <input
                    type='email'
                    placeholder='Email'
                    name='email'
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <input
                    type='password'
                    placeholder='Password'
                    name='password'
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <input
                    type='password'
                    placeholder='Confirm Password'
                    name='confirmpassword'
                    onChange={(e)=>setConfirmpassword(e.target.value)}

                />
                <button type='submit'>Create User</button>
                <div className="already_user">
                    Already have an account ? <Link to='/login'>Login</Link>
                </div>
            </form>
        </div>
    )
    }
