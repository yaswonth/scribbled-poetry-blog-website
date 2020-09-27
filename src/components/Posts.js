import React from 'react';
import '../App.css';
import { Scrollbars } from 'react-custom-scrollbars';
import Rowposts from './Rowposts';
function Posts({data}) {
  var indent=[];
  var n =null;
  var fn = Object.keys(data);
  for(var i=0;i<fn.length;i=i+3){
    if(fn.length-i>2){
      indent.push(<Rowposts id1={fn[i]} id2={fn[i+1]} id3={fn[i+2]} data1={data[fn[i]]} data2={data[fn[i+1]]} data3={data[fn[i+2]]}/>);
    }else if(fn.length==2){
      indent.push(<Rowposts id1={fn[i]} id2={fn[i+1]} id3={n} data1={data[fn[i]]} data2={data[fn[i+1]]} data3={n}/>);
    }else{
      indent.push(<Rowposts id1={fn[i]} id2={n} id3={n} data1={data[fn[i]]} data2={n} data3={n}/>);
    }
  }
  return (
    <div className='width'>
    <p className='post-title'>POSTS</p>
      {indent}
    </div>
  );
}

export default Posts;