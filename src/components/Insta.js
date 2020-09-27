import React,{useState,useEffect} from 'react';

export default function Insta(){
    const [d,setd]=useState(null);
    useEffect(()=>{
        fetch('https://www.instagram.com/scribbled_poetry_?__a=1')
        .then(res=>res.json())
        .then(resp=>{
           var k = resp.graphql.user.edge_owner_to_timeline_media.edges;
           setd({
               d1:"https://www.instagram.com/p/"+k[0].node.shortcode+"/embed",
               d2:"https://www.instagram.com/p/"+k[1].node.shortcode+"/embed"
           });
        }).catch(er=>alert('Network issues'));
    },[]);
    let b=null;
    if(d==null){
      b=null;
    }else{
      b=(
        <div className='insta-r'>
        <iframe width="300" height="400" src={d.d1} frameborder="0" className='in' ></iframe>
        <div className='sep'></div>
        <iframe width="300" height="400" src={d.d2} frameborder="0" className='in'></iframe>
    </div>
      );
    }
    return(
        <div className='insta-c'>
        <p className='profile-head'  >My Latest Instagram Posts</p>
            {b}
        </div>
    );
}