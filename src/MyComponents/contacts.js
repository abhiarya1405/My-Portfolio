import React from 'react'
import { ReactComponent as YourSvg } from '../Images/copy.svg';
export const Contacts = () => {
  return (
    <>
        <div className='contacts_main'>
            <div className="contacts_head">Contact Me</div> 
            <div className="contacts_content">
                <div className="my_pic"><img src={require('../Images/My-pic.jpg')} alt=""/></div>
                <div className="my_contacts">
                <b>E-mail:-</b> abhishek.ya1405@gmail.com&nbsp;
                <YourSvg className='copy_svg' onClick={() =>  navigator.clipboard.writeText('abhishek.ya1405@gmail.com')}/> <br />
                <b>Git:-</b> https://github.com/abhiarya1405&nbsp;
                <YourSvg className='copy_svg' onClick={() =>  navigator.clipboard.writeText('https://github.com/abhiarya1405')}/> <br />
                <b>LinkdIn:-</b> https://www.linkedin.com/in/abhishek-arya-601a501a4&nbsp;
                <YourSvg className='copy_svg' onClick={() =>  navigator.clipboard.writeText('https://www.linkedin.com/in/abhishek-arya-601a501a4')}/>
                </div>
            </div>
        </div>
    </>
  )
}
