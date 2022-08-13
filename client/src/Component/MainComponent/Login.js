import React, {useState} from "react"
import './login.css'
import axios from "axios"
import { useNavigate } from "react-router-dom"


const Login = ({ setLoginUser}) => {

  const navigate = useNavigate()

  const [ user, setUser] = useState({
      email:"",
      password:""
  })

  const handleChange = e => {
      const { name, value } = e.target
      setUser({
          ...user,
          [name]: value
      })
  }

  const Login = () => {
      axios.post("http://localhost:9007/Login", user)
      .then(res => {

          alert(res.data.message)
          setLoginUser(res.data.user)
          navigate("/Register")
      })
  }
	return (
			<div class="login-page">
  <div className="form">
    <div className="login-form login">
      <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="username"/>
      <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="password"/>

      <button className="btn1" onClick={Login}>Login</button>
	  
      <p class="message">Not registered? <button className="btn2" onClick={() => navigate("/Signup")}>Create an account</button></p>
    </div>
  </div>
</div>

	)
}
export default Login