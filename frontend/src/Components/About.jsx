import React from 'react'
import { Link } from 'react-router-dom';
import {HiOutlineArrowNarrowRight} from 'react-icons/hi';

const About = () => {
  return (
    <section className="about" id ="about">
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className='heading'>
                        About Us
                    </h1>
                    <p>The onlty thing we are serious about us FOOD.</p>
                </div>
                <p className='mid'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui voluptate pariatur, consequatur libero doloribus ducimus reprehenderit. Laborum omnis illum ratione! Ea eligendi optio repudiandae. Eum eligendi laudantium mollitia esse veniam!</p>
                <Link to={"/"}>Explore Menu{""}<span>
                    <HiOutlineArrowNarrowRight />  
                    </span></Link>
            </div>
            <div className="banner">
                <img src="/about.png" alt="about" />
            </div>
        </div>
    </section>
  )
}

export default About