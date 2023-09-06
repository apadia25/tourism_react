import React from 'react'
import './Contact.css';
import ab from './assets/nagpur1.jpg';

export default function Contact() {
  return (
    <>
    <div className='c1' >
    <div  className='contact'>
        <fieldset className='t1'>
            <h1>Contact Us</h1>
            <br></br>
            <h3>Email:  For feedback & suggestions mail us at: orangetours44@gmail.com</h3>
            <h3>Phone: 9856776608; 7904446110; 2090192</h3>
            <h3>&emsp;&emsp;&emsp;&emsp;Monday to Friday (10:00 AM to 6:00 PM)<br></br>
            &emsp;&emsp;&emsp;&emsp;Saturday and other Holidays (10:00 AM to 2:00 PM)</h3>
            <h3>Instagram: <a href='https://www.instagram.com/OrangeTours/?hl=en'>Go and check</a></h3>
        </fieldset><br></br>
        
    </div>
    {/* <div style={{ backgroundImage: `url(${ab})`}} className='c2'></div> */}
    </div>
    
      
    </>
  )
}
