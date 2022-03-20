import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './Style.css'
import SearchBar from './SearchBar'
import { logout } from '../../redux/actions/authActions'
function Navbar() {
  const token = localStorage.getItem('token')
  const auth = useSelector(state=>state.authReducer.auth)
  const dispatch = useDispatch()
  return (
  <header>
    <Link className='logo' to="/">Can You?</Link>

    <nav className='navigation'>

      {token ? 
      <>
        <Link to="/"><button onClick={()=>dispatch(logout())}>Logout</button></Link>
        <Link to="/profile"></Link>
        <Link to="/feed">Find A Talent</Link>
      </> 
      :
      <>
        <Link to="/feed">Find A Talent</Link>
        <Link to="/login">SignIn</Link>
        <Link to="/signup">SignUp</Link>
        <Link to="/joinus">Become a seller</Link>
      </>}
    </nav>

  </header>
  )
}

export default Navbar