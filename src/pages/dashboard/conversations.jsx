import React from 'react'
import Navbar from '../../components/dashboard/layout/navbar';
import NavLeft from '../../components/dashboard/conversations/navleft';

function Conversations() {
    return (
        <main className='conversations'>
            <Navbar />
            <div className="dashboard__full">
                        <NavLeft />
            </div>
        </main>
    )
}

export default Conversations;