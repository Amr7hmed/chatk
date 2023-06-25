import React from 'react'
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='dashboard__navbar d-flex justify-content-between align-items-center'>
                    <ul className='d-flex align-items-center'>
                        <li>
                            <NavLink to={"/dashboard/conversations"}>
                                <img src="/assets/icons/cody-icon-filled.png"
                                    alt="Cody – The AI Trained on Your Business" />
                                <span>Chat</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/dashboard/bots"}>
                                <img className='icon'
                                    src="/assets/icons/icon-botos.svg"
                                    alt="Cody – The AI Trained on Your Business" />
                                <span>Bots</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/dashboard/directories"}>
                                <img className='icon'
                                    src="/assets/icons/copy-solid.svg"
                                    alt="Cody – The AI Trained on Your Business" />
                                <span>Content</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/"}>
                                <img className='icon'
                                    src="/assets/icons/gear-solid.svg"
                                    alt="Cody – The AI Trained on Your Business" />
                                <span>Settings</span>
                            </NavLink>
                        </li>

                        
                    </ul>
        </nav>
    )
}

export default Navbar;