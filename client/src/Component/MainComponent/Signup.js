import React, {useState} from "react"
import './login.css'
import axios from "axios"
import { useNavigate } from "react-router-dom"


const Signup = () => {

  const navigate = useNavigate()

  const [ user, setUser] = useState({
      fname: "",
      email:"",
      password:"",
      reEnterPassword: ""
  })

  const handleChange = e => {
      const { name, value } = e.target
      setUser({
          ...user,
          [name]: value
      })
  }

  const Signup = () => {
    const { name, email, password, reEnterPassword } = user
    if( name && email && password && (password === reEnterPassword)){
        axios.post("http://localhost:9007/Signup", user)
        .then( res => {
            alert(res.data.message)
            navigate("/Login")
        })
    } else {
        alert("invlid input")
    }
    
}
  return (
    			<div class="login-page">
  <div className="form">
    <div class="login-form">
      <input type="text"  name="name" value={user.name} placeholder="Full Name" onChange={ handleChange } />
      <input type="number" placeholder="Mobile Number" onChange={ handleChange } />
      <input type="email" name="email" value={user.email} placeholder="Email" onChange={ handleChange } />
      <input type="password" name="password" value={user.password} placeholder="Password" onChange={ handleChange }/>
      <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-Enter Password" onChange={ handleChange } />



      <button className="btn1" onClick={Signup}>Signup</button>
	  
      <p class="message">Already have a account <button className="btn2" onClick={() => navigate("/login")}>Login</button></p>
    </div>
  </div>
</div>
      
  )
}
export default Signup
