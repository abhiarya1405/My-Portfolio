import React from 'react'
import { Link } from 'react-router-dom'

export const About = () => {
  return (
    <div className='about_main'>
        <div className="about_head">About Me</div>
        Hello, I'm Abhishek Arya
        I've completed BCA (Bachelor of Computer Application)<br/>
        from Shi Ramswraoop memorial university, I am a software developer<br/>
        and have done several projects on different languages.<br/>
        You can look some of my projects in <Link to='/projects'>Projects</Link> page.
    </div>
  )
}
