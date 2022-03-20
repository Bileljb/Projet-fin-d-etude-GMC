import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './background.css'
import { useDispatch, useSelector } from "react-redux"
import { get_one_gig } from '../../redux/actions/freelancerActions';
import rajel1 from './images/rajel1.jpg'

function DetailsPage() {
    const dispatch = useDispatch()
    let { id } = useParams()
    const gig = useSelector((state) => state.GigReducer.gigs)

    useEffect(() => {
        dispatch(get_one_gig())
    }, [])
    console.log(gig)
    return (
        <>
            {gig.filter((el) => el._id == id).map((el) => (
                <section className="about1" >
                    <div className="main1">
                        <img src={rajel1} />
                        <div className="about-text">
                            <h2>{el.userId.username}</h2>
                            {/* <h2>User name</h2> */}
                            <h5><span>{el.profession}</span></h5>
                            <p>{el.description}</p>
                        </div>
                    </div>
                    <div className="contact-me">
                        <p>Contact Me To Get You A Professional Job.</p>
                        <a className="button-two" href={el.userId.contact} target="_blank">Hire Me</a>
                    </div>
                </section>))}

        </>
    )
}

export default DetailsPage