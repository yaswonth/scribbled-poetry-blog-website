import React,{useState} from 'react';
import '../App.css';
import {Redirect} from 'react-router-dom';
import  firebase from './Firebase';
export default function Login(){
    const [user,setuser]=useState(localStorage.getItem("user")||'');
    const[name,setname]=useState('');
    const[pass,setpass]=useState('');
    const [load,setload]=useState("Login");
    const login=()=>{
        setload("Loading...");
        if(name=='' || pass==''){
            alert("Don't leave an input empty");
            setload("Login");
        }else{
            firebase.database().ref('users').once('value',(snapshot)=>{
                var v = snapshot.val();
                if(v.username==name){
                    
                    if(v.password==pass){
                      localStorage.setItem('user',name);
                      setuser(name);
                    }else{
                        alert('Invalid password');
                    }
                    setload("Login");
                }else{
                    setload("Login");
                    alert('Invalid username'); 
                }
            })
        }
    }
    if(user==''){
        return(
            <div className='Login'>
              <div className='box'>
              <p className='title-login'>LOGIN</p>
                  <input className='input' type='text' style={{outline:'none'}} placeholder="Username" value={name} onChange={(e)=>setname(e.target.value)} />
                  <input className='input' type='password' style={{outline:'none'}} placeholder="Password" value={pass}onChange={e=>setpass(e.target.value)}  />
                  <div className='Login-but' onClick={login}>{load}</div>
              </div>
            </div>
        );

      
    }else{
        return(
            <Redirect push to="/dashboard" />
        );
    }
}