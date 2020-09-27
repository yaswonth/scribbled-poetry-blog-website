import React,{useState,useEffect} from 'react';
import '../App.css';
import firebase from './Firebase';
import profile from '../assets/profile.JPG'
export default function About(){
    const [pic,setpic] = useState({
        name:'...',
        about:'.....',
        uri:profile
    });
    useEffect(()=>{
      firebase.database().ref('about').once('value',(snapshot)=>{
           var d = snapshot.val();
           setpic(d);
      })
   },[]);
    return(
        <div className='about'>
         <p className='profile-title'>ABOUT ME</p>
          <div className='about-me'>
            <img className='profile' src={pic.uri} />
            <div className='profile-text'>
             <p className='profile-head'  >{pic.name}</p>
             <div className='profile-scroll'>
                <p className='profile-content' >{pic.about}</p>
             </div>    
            </div>
          </div>
       </div>
    );
}