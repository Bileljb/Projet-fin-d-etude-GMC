import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { delete_freelancer } from '../../redux/actions/adminActions'

function FreelancerCard({freelancer}) {
    const dispatch = useDispatch()
    const handleDelete = () => {
        if (window.confirm('Are you sure'))
            dispatch(delete_freelancer(freelancer._id))
    }
    return (
        <div>
            <Card style={{ width: '18rem', height: '22rem', backgroundColor: '#f0f0f0' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{freelancer.username}</Card.Title>
                    <Card.Text>
                        Profession: {freelancer.profession}
                    </Card.Text>
                    <Card.Text>
                        Contact: {freelancer.email}
                    </Card.Text>
                    <Card.Text>
                        Role: {freelancer.role}
                    </Card.Text>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Button variant="danger" onClick={handleDelete}>Delete</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default FreelancerCard