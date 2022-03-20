import React from 'react'
import {Card, Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {delete_gig, toggletrue, get_one_gig} from '../../redux/actions/freelancerActions'
import rajel1 from './images/rajel1.jpg'

function GigCard({gig}) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleDelete = ()=>{
        if (window.confirm('Are you sure'))
        dispatch(delete_gig(gig._id))}
  return (
    <div>
      <Card style={{ width: '18rem',height:'22rem', backgroundColor:'#f0f0f0' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{gig.userId.username}</Card.Title>
                <Card.Text>
                    Profession: {gig.profession}
                </Card.Text>
                <Card.Text>
                    description: {gig.description}
                </Card.Text>
                <Card.Text>
                    Contact: {gig.userId.email}
                </Card.Text>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                <Button variant="primary" onClick={()=> {dispatch(toggletrue()); navigate('/AddOrEdit'); dispatch(get_one_gig(gig._id))}} >Edit</Button>
                <Button variant="danger" onClick={handleDelete}>Delete</Button>
                </div>
            </Card.Body>
        </Card>
    </div>
  )
}

export default GigCard


