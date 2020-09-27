import React from 'react';
import '../App.css';
import { Scrollbars } from 'react-custom-scrollbars';
import PostRight from './PostRight';
function Rowposts({id1,data1,id2,data2,id3,data3}) {

  if(data3==null && data2!=null){
    return (
      <div className='posts'>
        <PostRight id={id1} data={data1} />
        <PostRight id={id2} data={data2} />
      </div>
  );
  }else if(data3==null && data2==null){
    return (
      <div className='posts'>
        <PostRight id={id1} data={data1} />
      </div>
  );
  }else{
    return (
      <div className='posts'>
        <PostRight id={id1} data={data1} />
        <PostRight id={id2} data={data2} />
        <PostRight id={id3} data={data3} />
      </div>
  );
  }
  
}

export default Rowposts;