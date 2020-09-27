import React,{useState,useEffect} from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import profile from '../assets/profile.JPG';
import {Redirect,useParams} from 'react-router-dom';
import firebase from './Firebase';
export default function Viewpost(){
    const { id }= useParams();
    const [title,settitle]=useState('Loading...');
    const [desc,setdesc]=useState('Loading...');
    const [c,setc]=useState(null);
    const [en,seten]=useState(false);
    let b=null;
    if(c==null){
        b=<p className='view-head'  >{title}</p>;
    }else{
        b=(
            <div className='dash-v-c'>
                      <div className='view-c'>
                      <p className='view-head'  >{title}</p>
                      </div>
                      <div className='view-img-c'>
                        <img className='view-img' src={c} />
                      </div>
                  </div>
        );
    }
   var style={
       width:'100%',
       outline:'none',
       border:0,
       resize:'none',
       color:'#fff',
       background:'transparent',
       marginTop:20,
       paddingRight:20,
       paddingLeft:20,
       fontSize:17,
       minHeight:'30vh',
       maxHeight:'60vh',
       height:'auto'
   };

   useEffect(()=>{
       firebase.database().ref('posts/'+id).once('value',(snapshot)=>{
           if(snapshot.exists()){
               settitle(snapshot.val().title);
               setdesc(snapshot.val().description);
               if(snapshot.val().hasOwnProperty('uri')){
                setc(snapshot.val()['uri']);
            }
           }else{
               alert('invalid post');
               seten(true);
           }
       }).catch(er=>alert('Network issue'))
   },[])

   if(en){
       return(
        <Redirect push to="/" />
       );
   }else{
    return(
        <div className='dash-view'>
            <Scrollbars style={{display:'flex',flex:1,width:'100%',justifyContent:'center',flexDirection:'column'}}>
               <div className='dash-view'>
               <div className='dash-v'>
                  {b}
                  <div style={{width:'100%',display:'flex'}}>
                     <textarea style={style} value={desc} readOnly />
                  </div>
               </div>

               </div>
            </Scrollbars>
        </div>
    );
   }

}