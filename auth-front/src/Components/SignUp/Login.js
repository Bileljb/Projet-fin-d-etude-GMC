import React, { useEffect, useState } from 'react'
import { signin } from '../../redux/actions/authActions'
import {useDispatch, useSelector} from 'react-redux'
import './Signup.css'
import {useNavigate} from 'react-router-dom'
function Login() {
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  const dispatch=useDispatch()
  const navigate=useNavigate()
  // const errors = useSelector(state=>state.authReducer.errors)
  // useEffect(()=>{
  //   errors && errors.map(el=> alert(el.msg))
  // },[errors])

  
  return (
    <form style={{ padding: "100px 200px" , backgroundColor: "#010127"}}>
        <div className="container" style={{backgroundColor:'#02023a'}}>
          <h1>Login</h1>
          <p>Welcome Back</p>
          <hr />
          <label ><b>Username Or Email</b></label>
          <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Enter Username Or Email" id="Username" required />
          <label><b>Password</b></label>
          <input value={password} onChange={(e)=>setPassword(e.target.value)}  type="password" placeholder="Enter Password"  id="psw" required />
          <hr />
          <button onClick={(e)=>{e.preventDefault();dispatch(dispatch(signin({email, password}, navigate)))}} type="submit" className="registerbtn">Login</button>
        </div>
      </form>
  )
}

export default Login