import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import GigCard from './GigCard';
import { togglefalse,get_gigs } from '../../redux/actions/freelancerActions'
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
function Profile() {
  const dispatch = useDispatch()
 
    useEffect(() => {
      dispatch(get_gigs())
    }, [])
    const gigs = useSelector((state) => state.GigReducer.gigs)
  return (
    <div style={{backgroundColor: "#010127"}} >
      <section className='buttons' style={{ padding: "100px 200px" }}>
        <Link to='/AddOrEdit'> <Button onClick={() => dispatch(togglefalse())}>Add New Service</Button> </Link>
      </section>
      <section className='cards' style={{display: 'flex', padding:"10px" , flexWrap: "wrap",alignItems: "center" }}>
      {gigs.map((gig)=> (<GigCard gig = {gig} key={gig._id}></GigCard>))}
      </section>
    </div>
  )
}

export default Profile