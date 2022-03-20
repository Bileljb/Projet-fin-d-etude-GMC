import React from 'react'
import './Signup.css'
import { useState,useEffect } from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { signup } from '../../redux/actions/authActions'
import { useNavigate } from 'react-router-dom'
function SignUp() {

  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [reppsw, setReppsw] = useState('')
  const dispatch = useDispatch()
  const navigate=useNavigate()
  // const errors = useSelector(state=>state.authReducer.errors)
  // useEffect(()=>{
  //   errors && errors.map(el=> alert(el.msg))
  // },[errors])
  return (
    <form style={{ padding: "100px 200px" , backgroundColor: "#010127"}}>
      <div className="container" style={{backgroundColor:'#02023a'}}>
        <h1>Register</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />
        <label><b>Username</b></label>
        <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Enter Username" id="Username" required />
        <label><b>Email</b></label>
        <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter Email" id="email" required />
        <label ><b>Password</b></label>
        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Password" id="psw" required />
        <label ><b>Repeat Password</b></label>
        <input onChange={(e) => setReppsw(e.target.value)} type="password" placeholder="Repeat Password" id="psw-repeat" required />
        <hr />
        <p>By creating an account you agree to our <a href="#">Terms &amp; Privacy</a>.</p>
        <button onClick={(e)=>{e.preventDefault();dispatch(dispatch(signup({username, email, password},navigate)))}} type="submit" className="registerbtn">Register</button>
      </div>
      <div className="container signin">
        <p>Already have an account? <a href="#">Sign in</a>.</p>
      </div>
    </form>
  )
}

export default SignUp