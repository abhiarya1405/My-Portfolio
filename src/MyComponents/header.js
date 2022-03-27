import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div className='navbar'>
    <div className='navbar_head'><Link to="/">My Portfolio</Link></div>
    <div className="options">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/projects">Projects</Link>
      <Link to="contacts">Contacts</Link>
    </div>
    </div>
  )
}
