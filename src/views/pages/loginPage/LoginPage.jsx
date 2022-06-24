import React,{useState} from 'react'
import "./LoginPage.scss"
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e)=>{
    e.preventDefault();

    if(email === "user@gmail.com" && password === "user") {
      sessionStorage.setItem("userAuth","alredyLogin");

      setTimeout(() => {
        navigate('/')
      }, 1000);
    } else {
      alert("Email or Password Invalid")
    }


  }

  return (
    <div className='login-container'>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" 
            placeholder='Email: user@gmail.com'
            value={email}
            onChange={(e)=>setEmail(e.target.value)} 
            required 
          />

          <label htmlFor="password">Password</label>
          <input type="password" 
            placeholder='Password: user'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}  
            required
          />
          
          <div className="login-button">
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage