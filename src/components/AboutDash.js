import React,{useState,useRef} from 'react';
import firebase from './Firebase';
import {Redirect} from 'react-router-dom';
export default function AboutDash(){
    const [n,setn]=useState('No file choosen');
    const [c,setc]=useState(null);
    const [name,setname]=useState('');
    const [about,setabout]=useState('');
    const [u,setu]=useState(null);
    const [en,seten]=useState(false);
    let fileref=useRef(null);
    const style = {
        maxHeight:'300px',
        minHeight:'200px',
        outline:'none',
        border:0,
        borderRadius:5,
        padding: 5,
        resize:'none',
        background: 'rgba(20,20,20,0.1)' };
        let b=null;
    const change=event=>{
        if(event.target.files && event.target.files[0]){
            setn(event.target.files[0].name);
            setc(URL.createObjectURL(event.target.files[0]));
        }else{
            setc(null);
            setn('No file choosen');
        }
    }
    if(n=='No file choosen'){
        b=null;
    }else{
        b=<img style={{maxWidth:100,maxHeight:100}} src={c} />
    }

    const update =()=>{
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
                    firebase.database().ref("about").update({
                       name:name,
                       about:about,
                       uri:url
                   }).then(()=>{
                     alert('Updated successfully');
                   }).catch(er=>{
                       alert('Network issue')
                   })
                   setu(null);
                   seten(true);
                });
            });
        }else{
            setu('wait...Uploading data...')
            firebase.database().ref("about").update({
                name:name,
                about:about
            });
            seten(true);
        }

    }

    if(en){
        return(
            <Redirect push to="/login" />
        );
    }else{
        return(
            <div className='dash-com'>
                 <div className='dash-about'>
                     <input className='dash-input' placeholder='Name' style={{outline:'none'}} value={name} onChange={e=>setname(e.target.value)} />
                     <p className='dash-about-t'>About me:</p>
                     <textarea className='dash-text-are' style={style} placeholder="Edit about-me content..." value={about} onChange={e=>setabout(e.target.value)} />
                     <p className='dash-about-t'>Change image in homepage:</p>
                     <div className='dash-ch-wr'>
                     <button className='dash-choose'>Choose File</button>
                     <input type="file" accept="image/*" className='dash-ch-in' onChange={change} ref={fileref} />
                     </div>
                     {b}
                     <label className='dash-about-t' htmlFor='inputfile' >{n}</label>
                     <div style={{marginBottom:10}}>{u}</div>
                     <div className='Login-but' onClick={update}>Update</div>
                 </div>
            </div>
        );
    }


}