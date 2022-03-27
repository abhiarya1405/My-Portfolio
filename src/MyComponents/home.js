import React from 'react'

export const Home = () => {
  return (
    <>
    <div className="home_main">
      <div className="home_gif">
        <img src={require('../Images/Home-Page-Image.gif')} alt=""/>
      </div>
      <div className='home_head'>Hello! <b>I'm Abhishek Arya</b><br/>
        I am a Full Stack Web Developer <br />
        <button onClick={() => window.location.href='https://github.com/abhiarya1405'}>View my work</button>
        
      <div style={{height:"100px"}}></div>
      </div>
    </div>
    
    </>
  )
}
