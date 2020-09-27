import React from 'react';
import logo from '../assets/Log.png';
import footer from '../assets/footer.jpg';
export default function Footer(){
    return(
        <div className='Title-f'>
           <img className='footer-title' src={footer} />
           <div className='foot-title'>
             <img className='foot-img' src={logo} />
             <p className='title-foo'>Scribbled Poetry</p>
           </div>
        </div>
    );
}

