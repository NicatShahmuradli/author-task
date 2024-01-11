import Link from 'next/link';
import React from 'react'
import NavLink from './navLink/navLink';

const Links = () => {

    const links = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "Authors",
            path: "/authors"
        },
        {
            title: "Add=Author",
            path: "/add-author"
        },

    ];

  return (
    <div>
        {links.map((link=>(
            <NavLink item={link} key={link.title}/>
        )))}
    </div>
  )
}

export default Links