import React from 'react'
import './Signup.css'
import { useState,useEffect } from 'react'
import {useDispatch, useSelector } from 'react-redux'
import {  signup } from '../../redux/actions/authActions'
import { useNavigate } from 'react-router-dom'
function Joinus() {
  const [contact, setContact]= useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [profession, setProfession] = useState('')
  const dispatch = useDispatch()
  const navigate=useNavigate()
  // const errors = useSelector(state=>state.authReducer.errors)
  // useEffect(()=>{
  //   errors && errors.map(el=> alert(el.msg))
  // },[errors])
  return (
    <form style={{ padding: "100px 200px" , backgroundColor: "#010127"}}>
      <div className="container" style={{backgroundColor:'#02023a'}}>
        <h1>Join Us</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />
        <label><b>Username</b></label>
        <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Enter Username" id="Username" required />
        <label><b>Email</b></label>
        <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter Email" id="email" required />
        <label ><b>Profession</b></label>
        <input onChange={(e) => setProfession(e.target.value)} type="text" placeholder="Profession" id="psw-repeat" required />
        <label ><b>LinkedIn</b></label>
        <input onChange={(e) => setContact(e.target.value)} type="text" placeholder="Enter Your LinkedIn Url " id="psw-repeat" required />
        <label ><b>Password</b></label>
        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Password" id="psw" required />
        <hr />
        <p>By creating an account you agree to our <a href="#">Terms &amp; Privacy</a>.</p>
        <button onClick={(e)=>{e.preventDefault();dispatch(dispatch(signup({username, email, password,profession,contact, role:"freelancer"},navigate)))}} type="submit" className="registerbtn">Register</button>
      </div>
    </form>
  )
}

export default Joinus