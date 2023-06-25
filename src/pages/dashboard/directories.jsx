import React from 'react'
import Navbar from '../../components/dashboard/layout/navbar';
import Search from '../../components/dashboard/directories/search';

function Directories() {
    return (
        <main className='conversations'>
            <Navbar />
            <div className="dashboard__full">
                <div className='dashboard__left'>
                    <Search/>
                </div>
            </div>
        </main>
    )
}

export default Directories;