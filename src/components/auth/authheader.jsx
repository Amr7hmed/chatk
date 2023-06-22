import React from 'react'
import { NavLink } from 'react-router-dom';

function AuthHeader(props) {
    const { Title } = props;
    return (
        <div className='auth__header'>
            <NavLink to={"/"}>
                <img
                    src="/assets/images/logo-white.png"
                    alt="Cody – The AI Trained on Your Business" />
            </NavLink>
            <p>{Title}</p>
        </div>
    )
}

export default AuthHeader;