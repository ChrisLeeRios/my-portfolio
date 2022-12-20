import React from 'react'
import './about.css'
import ME from '../../assets/secondpic.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>1+ Years Working</small>
                        </article>
                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Clients</h5>
                            <small>Over 10 Clients so far!</small>
                        </article>
                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>100+ Completed Projects</small>
                        </article>
                    </div>
                    <p>
                        Successful music artist turned programmer! Born and raised in The
                        Bronx, NYC, I chose the path of an artist for most of my life. Now I get to 
                        utilize that creativity in the world of technology. My goal in life is to empower
                        and bring as much enjoyment to others as possible. If my skill sets can help 
                        you along on your dreams, then I'm one step closer to mine! I have the eye, i have the heart
                        and i absolutely have your back! 
                        
                    </p>
                    <a href="#contact" className='btn btn-primary'>Lets Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About