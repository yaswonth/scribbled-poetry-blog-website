import React,{useState,useEffect} from 'react';
import profile from '../assets/profile.JPG';
import firebase from './Firebase';
export default function HomeDash(){
    const [url,seturl]=useState(null);
    const [sc,setsc]=useState('');
    useEffect(()=>{
        firebase.database().ref('about').once('value',(snapshot)=>{
             seturl(snapshot.val().uri);
             firebase.database().ref('posts').once('value',(snap)=>{
                 var f = Object.keys(snap.val());
                setsc(f.length);
           });
        }).catch(er=>alert('Network issue'));
        
    },[])
    let b=null;
    if(url==null){
        b=<img className='h-img' src={profile} />;
    }else{
        b=<img className='h-img' src={url} />;
    }
    return(
        <div className='dash-com'>
                 <div className='dash-about' style={{alignItems:'center'}}>
                    {b}
                    <p className='title-h'>Posts</p>
                    <p className='sc-h'>{sc}</p>
                 </div>
        </div>
    );
}