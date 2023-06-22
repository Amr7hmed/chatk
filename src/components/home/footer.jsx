import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <header className='footer'>
            <div className='container'>
                <div className="d-flex justify-content-between align-items-center">

                    <ul className='login'>
                        <li>
							<NavLink to={"/"}>
                                <img
                                    src="/assets/images/logo.svg"
                                    alt="Cody – The AI Trained on Your Business" />
                            </NavLink>
                        </li>
                    </ul>

                    <ul className="d-flex justify-content-between align-items-center social-media">
							<li>
                                <NavLink href="https://www.facebook.com/" target="_blank">
                                    <img src="/assets/icons/facebook-f.svg" alt="" />
                                </NavLink>
                            </li>
							<li>
                                <NavLink href="https://twitter.com/" target="_blank">
                                    <img src="/assets/icons/twitter.svg" alt="" />
                                </NavLink>
                            </li>
						</ul>
                </div>
            </div>
        </header>
    )
}

export default Footer;