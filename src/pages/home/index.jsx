import React from 'react'
import Navbar from '../../components/home/navbar.jsx';
import SectionOne from '../../components/home/section_one.jsx';
import Footer from '../../components/home/footer.jsx';
import SectionTwo from '../../components/home/section_two.jsx';

function Home() {
  return (
    <main className='home'>
        <Navbar/>
        <SectionOne/>
        <SectionTwo/>
        <Footer/>
    </main>
  )
}

export default Home;