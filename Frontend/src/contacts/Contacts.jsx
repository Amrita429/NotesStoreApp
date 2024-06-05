import React from 'react'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar';


function Contacts() {
  return (
    <>
    <Navbar />
    <div className='min-h-screen'>
     <Contact />
    </div>
    
    </>
  );
}

export default Contacts;
