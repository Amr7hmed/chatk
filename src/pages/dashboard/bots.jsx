import React from 'react'
import Navbar from '../../components/dashboard/layout/navbar';
import Table from '../../components/dashboard/bots/table';

function Bots() {
  return (
    <main className='conversations'>
        <Navbar />
            <div className="dashboard__table">
                <Table/>
            </div>
    </main>
  )
}

export default Bots;

