import React from 'react'
import Navbar from '../../components/home/navbar.jsx';
import SectionOne from '../../components/home/section_one.jsx';
import Footer from '../../components/home/footer.jsx';

function Home() {
  return (
    <main className='home'>
        <Navbar/>
        <SectionOne/>
        <Footer/>
    </main>
  )
}

export default Home;