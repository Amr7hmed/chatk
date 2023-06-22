import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <header className='header'>
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

                    <div className="d-flex justify-content-between align-items-center">
							<NavLink to={"/auth/login"}
                            className="no-margin-bottom font-color-white">
								<span className='login'>Login</span>
							</NavLink>
							<NavLink to={"/auth/sign-up"}
                            className="header-button no-margin-bottom animationrotate">
								<span>Join Free</span>
							</NavLink>
						</div>
                </div>
            </div>
        </header>
    )
}

export default Navbar;