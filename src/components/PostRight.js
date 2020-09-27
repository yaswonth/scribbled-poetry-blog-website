import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
function PostRight({data,id}) {

  if(data.hasOwnProperty('uri')){
    return (
      <div className='row-right'>
          <img className='post-img' src={data.uri} />
          <div className='post-text-right'>
             <p className='post-head'  >{data.title}</p>
              <div style={{width:'100%',display:'flex',flexDirection:'row',justifyContent:'center'}}>
                 <Link to={`/posts/${id}`} style={{textDecoration:'none'}}>
                   <div className='view-post-right'>View-Post</div>
                 </Link>
             </div>
          </div>
      </div>
    );
  }else{
    return(
     <div className='row-right'>
          <div className='post-text-right'>
             <p className='post-head'  >{data.title}</p>
                <div className='profile-scroll'>
                      <p className='profile-content' >{data.description}</p>
                 </div> 
              <div style={{width:'100%',display:'flex',flexDirection:'row',justifyContent:'center'}}>
                 <Link to={`/posts/${id}`} style={{textDecoration:'none'}}>
                   <div className='view-post-right'>View-Post</div>
                 </Link>
             </div>
          </div>
      </div>
    );
    
  }
  
}

export default PostRight;