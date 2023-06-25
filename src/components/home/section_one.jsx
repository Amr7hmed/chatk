import React from 'react'
import { NavLink } from 'react-router-dom';

function SectionOne() {
    return (
        <section id="home-section_1" className="vc_section">

                <div className="wpb_wrapper">
                    <h1 className="slider-heading remove-br">
                        Your <span className="font-color-gradient">AI-Assistant</span>
                    <br/>
                        for Business
                    </h1>


                    <ul className='d-flex flex-column align-items-center'>
                        <li>
							<NavLink to={"/auth/sign-up"} className='animationrotate'>
                                Get Started Free
                            </NavLink> 
                            </li>
                        <li><p>No Credit Card Required</p></li>
                    </ul>
                </div>
        </section>
    )
}

export default SectionOne;