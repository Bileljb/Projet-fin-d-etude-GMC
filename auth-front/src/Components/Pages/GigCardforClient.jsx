import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { get_one_gig } from '../../redux/actions/freelancerActions'
import './home.css'
import tofla1 from './images/tofla1.jpg'


function GigCardforClient({ gig }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (
        <div>
            < div className="project-card" >
                <div className="project-image">
                    <img src={tofla1} />
                </div>
                <div className="project-info">
                    <p className="project-category">{gig.description}</p>
                    <strong className="project-title">
                        <span>{gig.profession}</span>
                        <Link to={`/More-Details/${gig._id}`}><Button onClick={()=>{dispatch(get_one_gig(gig._id))}}>Details</Button></Link>
                    </strong>
                </div>
            </div >
        </div>
    )
}

export default GigCardforClient

