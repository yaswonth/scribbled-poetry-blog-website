import React,{useState,useRef,useEffect} from 'react';
import firebase from './Firebase';
import {Redirect,useParams} from 'react-router-dom'
export default function NewDash(){
    var { id } = useParams();
    const [c,setc]=useState(null);
    const [u,setu]=useState(null);
    const[en,seten]=useState(false);
    const [title,settitle]=useState('Loading...');
    const [desc,setdesc]=useState('Loading...');
    let fileref=useRef(null);
    const change=(event)=>{
        if(event.target.files && event.target.files[0]){
            setc(URL.createObjectURL(event.target.files[0]));
        }else{
            setc(null);
        }
    }
    useEffect(() => {
        firebase.database().ref('posts/'+id).once('value',(snapshot)=>{
            if(snapshot.exists()){
                settitle(snapshot.val()['title']);
                setdesc(snapshot.val()['description']);
                if(snapshot.val().hasOwnProperty('uri')){
                    setc(snapshot.val()['uri']);
                }
            }else{ 
                alert('Invalid post id');
                seten(true);
            }
            
        })
        
    }, [])

    let b=null
    if(c==null){
      b=null;
    }else{
    b=<img className='new-img-s' src={c} />;
    }
    const dele=()=>{
        firebase.database()
                .ref('posts/'+id)
                .remove()
                .then(()=>{
                  alert('successfully deleted');
                  seten(true);
                }).catch(err=>{
                    alert('network issues...please try again');
                })
    }
    const update=()=>{
        if(title=='' || desc==''){
            alert('please fill all the inputs');
        }else{
            console.log('start');
        if(fileref.current.files && fileref.current.files[0]){
            var fname=fileref.current.files[0].name.split('.');
        let stor = firebase.storage().ref('images/profile'+fname[fname.length-1]);
        let up = stor.put(fileref.current.files[0]);
        up.on('state_changed',
        (snapshot)=>{
            var m = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100) ;
            var prog = "image upload progress: "+m+"%";
            setu(prog);
        },
        (error)=>{
          setu(null);
        },
        ()=>{
            setu('wait...Uploading data...');
            stor.getDownloadURL().then(url=>{
                firebase.database().ref("posts/"+id).update({
                   title:title,
                   description:desc,
                   uri:url
               }).then(()=>{
                seten(true);
               alert('post added successfully');
               settitle('');
               setdesc('');
               setc(null);
               
            })
            .catch(err=>{
               alert('Network issues...please try again!');
            });
               setu(null);
            });
        });
        }else{
            console.log('followed up');
            setu('wait...Uploading data...');
            firebase.database().ref('posts/'+id).update({
                title:title,
                description:desc
            }).then(()=>{
                seten(true);
                alert('post updated successfully');
                settitle('');
               setdesc('');
               setc(null);
            })
            .catch(err=>{
                alert('Network issues...please try again!');
            });
            setu(null);
        }
       }
      
    }

    let style={
        display:'flex',
        flexDirection:'column',
        outline:'none',
        border:0,
        borderRadius:5,
        padding: 5,
        resize:'none',
        background: 'rgba(0,0,0,0.3)'
    }
    let stylee={
        display:'flex',
        flexDirection:'column',
        flex:1,
        outline:'none',
        border:0,
        borderRadius:5,
        padding: 5,
        resize:'none',
        background: 'rgba(0,0,0,0.3)'
    }

   if(en){
    return(
        <Redirect push to="/dashboard/posts" />
    );
   }else{
    return(
        <div className='dash-new'>
        <div className='new-row'>
          <div className='new-cont'>
          <p className='new-title'>New Post</p>
             <p className='dash-about-t'>Title(Prefer short one):</p>
             <input style={style}  value={title} onChange={e=>settitle(e.target.value)} placeholder='Your Post Title' />
          </div>
          <div className='new-img-cont'>
              <div className='new-img'>
                {b}
              </div>
              <div className='new-choose'>
                  <button className='new-choose-bt'>Choose image</button>
                  <input type="file" accept="image/*" className='dash-ch-in' onChange={change} ref={fileref} />
              </div>
          </div>
        </div>
        <div className='new-row'>
            <div className='new-cont'>
            <p className='dash-about-t'>Description:</p>
             <textarea style={stylee}  value={desc} onChange={e=>setdesc(e.target.value)} placeholder='Your Post Description' />
             <div style={{marginTop:10}}>{u}</div>
            </div>
        </div>
        <div className='new-p' onClick={update}>Update</div>
        <div className='new-p-d' onClick={dele}>Delete Post</div>
          
        </div>
    );
   }

   
}