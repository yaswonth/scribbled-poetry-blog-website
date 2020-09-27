import React,{useEffect,useState} from 'react';
import '../App.css';
import { Scrollbars } from 'react-custom-scrollbars';
import Dashrow from './Dashrow';
import firebase from './Firebase';
function PostsDash() {
    let indent=null;
  var n =null;
  const [data,setdata]=useState(null);
  if(data==null){
    indent=<div style={{color:'#fff',width:'100%',textAlign:'center',marginBottom:30}}>Loading...</div>;
  }else{
      indent=[];
    var fn = Object.keys(data);
    for(var i=0;i<fn.length;i=i+3){
      if(fn.length-i>2){
        indent.push(<Dashrow id1={fn[i]} id2={fn[i+1]} id3={fn[i+2]} data1={data[fn[i]]} data2={data[fn[i+1]]} data3={data[fn[i+2]]}/>);
      }else if(fn.length==2){
        indent.push(<Dashrow id1={fn[i]} id2={fn[i+1]} id3={n} data1={data[fn[i]]} data2={data[fn[i+1]]} data3={n}/>);
      }else{
        indent.push(<Dashrow id1={fn[i]} id2={n} id3={n} data1={data[fn[i]]} data2={n} data3={n}/>);
      }
    }
  }
  useEffect(()=>{
    firebase.database().ref('posts').once('value',(snapshot)=>{
        setdata(snapshot.val());
    }).catch(err=>alert('Network issues'));
  },[]);
  return ( 
    <div className='dash-com'>
    <p className='post-title'>POSTS</p>
      {indent}
    </div>
  );
}

export default PostsDash;