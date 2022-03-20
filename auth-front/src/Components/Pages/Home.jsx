import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import rajel1 from './images/rajel1.jpg'
import rajel2 from './images/rajel2.jpg'
import rajel3 from './images/rajel3.jpg'
import rajel4 from './images/rajel4.jpg'
import tofla1 from './images/tofla1.jpg'
import tofla2 from './images/tofla2.jpg'
import Navbar from '../Navigation bar/Navbar'
import './home.css'
function Home() {
    return (
        <body>
            <Navbar></Navbar>
            <section className="main">
                <div>
                    <h2>Welcome to Can You?<br /><span>The Best Freelancing Platform </span></h2>
                    <h3>Share Your Skills Or Find A Talent For your Prodjects </h3>
                </div>
            </section>
            <section className="cards" id="services">
                <h2 className="title">Services</h2>
                <div className="content">
                    <div className="card">
                        <div className="icon">
                            <i className="fas fa-edit"></i>
                        </div>
                        <div className="info">
                            <h3>Script Writing</h3>
                            <p>Research and write scripts for different topics that can then be directly recorded for video production</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <i className="fas fa-video"></i>
                        </div>
                        <div className="info">
                            <h3>Video Production</h3>
                            <p>Record and shoot videos taking into consideration proper settings, followed by production & post-production work</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <i className="fas fa-graduation-cap"></i>
                        </div>
                        <div className="info">
                            <h3>Seo sevices</h3>
                            <p>Don’t wait any longer and give your competitors a heads start. Choose the option that is right for you and let’s connect. </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <i className="fas fa-graduation-cap"></i>
                        </div>
                        <div className="info">
                            <h3>Curriculum Development</h3>
                            <p>Develop complete curriculums for various technical topics to produce digital transformative courses</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="projects" id="projects">
                <h2 className="title">Top Freelancers</h2>
                <div className="content">
                    <div className="project-card">
                        <div className="project-image">
                            <img src={rajel1} />
                        </div>
                        <div className="project-info">
                            <p className="project-category">Front End Pro</p>
                            <strong className="project-title">
                                <span>Fedi Abbes</span>
                                <a href="#" className="more-details">More details</a>
                            </strong>
                        </div>
                    </div>
                    <div className="project-card">
                        <div className="project-image">
                            <img src={rajel2} />
                        </div>
                        <div className="project-info">
                            <p className="project-category">Back End pro</p>
                            <strong className="project-title">
                                <span>Hamza Ben Ali</span>
                                <a href="#" className="more-details">More details</a>
                            </strong>
                        </div>
                    </div>
                    <div className="project-card">
                        <div className="project-image">
                            <img src={tofla1} />
                        </div>
                        <div className="project-info">
                            <p className="project-category">Graphic Designer</p>
                            <strong className="project-title">
                                <span>Marwa Riahi</span>
                                <a href="#" className="more-details">More details</a>
                            </strong>
                        </div>
                    </div>
                    <div className="project-card">
                        <div className="project-image">
                            <img src={tofla2} />
                        </div>
                        <div className="project-info">
                            <p className="project-category">Seo Expert</p>
                            <strong className="project-title">
                                <span>Sarra Aouina</span>
                                <a href="#" className="more-details">More details</a>
                            </strong>
                        </div>
                    </div>
                    <div className="project-card">
                        <div className="project-image">
                            <img src={rajel3} />
                        </div>
                        <div className="project-info">
                            <p className="project-category">Business Manager</p>
                            <strong className="project-title">
                                <span>Bilel Jabrane</span>
                                <a href="#" className="more-details">More details</a>
                            </strong>
                        </div>
                    </div>
                    <div className="project-card">
                        <div className="project-image">
                            <img src={rajel4} />
                        </div>
                        <div className="project-info">
                            <p className="project-category">Video Editor</p>
                            <strong className="project-title">
                                <span>Saber Yaakoubi</span>
                                <a href="#" className="more-details">More details</a>
                            </strong>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <p className="footer-title">Copyrights @ <span>Bilel Jabrane</span></p>
                <div className="social-icons">
                    <a href="#"><i class="fab fa-linkedin"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-youtube"></i></a>
                </div>
            </footer>


        </body>
    )
}

export default Home