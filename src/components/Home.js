import React,{useRef,useEffect,useState} from 'react';
import '../App.css';
import { Scrollbars } from 'react-custom-scrollbars';
import back from '../assets/homeback.jpg'
import mobback from '../assets/homeback-mob.jpg'
import logo from '../assets/logo.png'
import profile from '../assets/profile.JPG';
import { BsArrowDown } from "react-icons/bs";
import Posts from './Posts';
import About from './About';
import Footer from './Footer';
import Insta from './Insta';
import  firebase from './Firebase';
import {useHistory} from 'react-router-dom'
function Home({history}) {
    const postRef = useRef(null);
    const [data,setdata]=useState(null);
   const ab = ()=>{
    postRef.current.scrollIntoView({behavior: 'smooth'});    
   }
   let b=null;
   if(data==null){
     b= (
      <div className='width'>
      <p className='post-title'>POSTS</p>
        <div style={{color:'#fff',width:'100%',textAlign:'center',marginBottom:30}}>Loading...</div>
      </div>
    );
   }else{
     b=<Posts data={data}  />;
   }
   useEffect(()=>{
      firebase.database().ref('posts').once('value',(snapshot)=>{
        setdata(snapshot.val());
      });
   },[]);
  return (
    <div className='Container' >
    {/* <Scrollbars className='scroll' autoHide> */}
       <div className='Title'>
       <header>
          <img className='logo' src={logo} />
       </header>
         <img className='back-title' src={back} />
         <img className='back-title-mob' src={mobback} />
         <div className='content-title'>
            <div className='content'>
              <p className='welcome'>Welcome to</p> 
              <p className='title'>Scribbled Poetry</p>
            </div>
            
         </div>
         <BsArrowDown className='down' onClick={ab}/>
       </div>
       <div ref={postRef}></div>
       <About/>
       {b}
       <Insta />
       <Footer />
    {/* </Scrollbars> */}
       
    
    </div>
  );
}

export default Home;
