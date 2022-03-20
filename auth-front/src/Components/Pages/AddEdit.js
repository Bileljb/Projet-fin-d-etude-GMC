import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux"
import { add_gig, edit_gig } from '../../redux/actions/freelancerActions';
import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux';
import axios from 'axios';
import { getme } from '../../redux/actions/authActions';

function AddEdit() { 
  const [file, setFile] = useState(null)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [profession, setProfession] = useState('')
  const [description, setDescription] = useState('')
  const dispatch = useDispatch()


  const navigate = useNavigate()


  const edit = useSelector((state) => state.GigReducer.edit)
  const gig = useSelector((state) => state.GigReducer.gig)

  const handleAdd = (e) => {
    e.preventDefault()
    dispatch(add_gig({ username, email, profession, description}))
    navigate('/profile')
  }
  const handleEdit =(e) => {
    e.preventDefault()
    dispatch(edit_gig(gig._id, { username, email, profession, description }))
    navigate('/profile')
    // const data= new FormData()
    // data.append('myImage', file)
    // try {
    //   await axios.put(`/api/gigs/id`,data)
    //   dispatch(getme())
    // } catch (error) {
    //   console.log(error)
    // }
  }
  useEffect(() => {
    if (edit) {
      { setUsername(''); setEmail(''); setProfession(''); setDescription('') }

    }
  }, [])
  return (
    <div style={{backgroundColor: "#010127"}}>
      <form style={{ padding: "100px 200px" }}>
      <div className="container">
        <h1>Add New Gig</h1>
        <p>Please fill in this form to create a new service card.</p>
        <hr />
        {/* <label><b>Username</b></label>
        <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" placeholder="Enter Username" id="Username" required />
        <label><b>Email</b></label>
        <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" placeholder="Enter Email" id="email" required /> */}
        <label ><b>Profession</b></label>
        <input onChange={(e) => setProfession(e.target.value)} value={profession} type="text" placeholder="Enter Profession" id="psw" required />
        <label ><b>Description</b></label>
        <input onChange={(e) => setDescription(e.target.value)} value={description} type="text" placeholder="Repeat Description" id="psw-repeat" required />
        {/* <label ><b>Gig Image</b></label>
        <input onChange={(e) => setFile(e.target.value)} value={file} type="file" placeholder="Choose an image" id="psw-repeat"  /> */}
        <hr />
        {edit ?(<button onClick={handleEdit} type="submit" className="registerbtn">Edit</button>):
        (<button onClick={handleAdd} type="submit" className="registerbtn">Add</button>)}

      </div>
    </form>
    </div>
  )
}

export default AddEdit