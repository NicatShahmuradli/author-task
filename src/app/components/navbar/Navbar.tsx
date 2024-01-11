import Link from 'next/link'
import React from 'react'
import Links from './links/Links'
import "./style.css";

const Navbar = () => {
  return (
    <div className='container'>
        <div className='logo'>Logo</div>

        <div>
            <Links/>
        </div>

    </div>
  )
}

export default Navbar