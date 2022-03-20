import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import FreelancerCard from './FreelancerCard';
import { get_freelancers } from '../../redux/actions/adminActions'
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import './background.css'
function DashboardAdmin() {
  const freelancers = useSelector((state) => state.FreelancerReducer.freelancers)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(get_freelancers())
  }, [])
  return (
    <div style={{ backgroundColor: "#010127"}} >
      {/* <section className='buttons' style={{ padding: "100px 200px" }}>
        <Link to='/AddOrEdit'> <Button onClick={() => dispatch(togglefalse())}>Add New Service</Button> </Link>
      </section> */}
      <section className='cards' style={{padding:"10px",display: 'flex',paddingTop:'50px', flexWrap: "wrap", alignItems: "center" }}>
        {freelancers.filter(user=>user.role==="freelancer").map((freelancer) => (<FreelancerCard freelancer={freelancer} key={freelancer._id}></FreelancerCard>))}
      </section>
    </div>
  )
}

export default DashboardAdmin