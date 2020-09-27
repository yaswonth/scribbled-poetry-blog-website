import React,{useState,useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    Redirect,
    useRouteMatch
  } from "react-router-dom";
import logo from '../assets/logo.png';
import profile from '../assets/profile.JPG';
import { AiFillHome } from "react-icons/ai";
import { AiOutlineLogout } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { BsPersonLinesFill } from "react-icons/bs";
import { BsFilePost } from "react-icons/bs";
import { MdFiberNew } from "react-icons/md";
import HomeDash from './HomeDash';
import NewDash from './NewDash';
import PostsDash from './PostsDash';
import AboutDash from './AboutDash';
import firebase from './Firebase';
import DashEdit from './DashEdit';
export default function Dashboard(){
    let { path, url } = useRouteMatch();
   const [user,setuser]=useState(localStorage.getItem("user")||'');
   const [hide,sethide]=useState(true);
   const [pic,setpic] = useState({
       name:'....',
       about:'.....',
       uri:profile
   });
   const logout=()=>{
       localStorage.setItem('user','');
       setuser('');
   }
   useEffect(()=>{
    firebase.database().ref('about').once('value',(snapshot)=>{
         var d = snapshot.val();
         setpic(d);
    })
 },[]);
    if(user==''){
        return(
            <Redirect push to="/login" />
        );
    }else{
        
        return(
            <div className='dashboard'>
                <header>
                     <AiOutlineMenu className='men' onClick={()=>sethide(e=>{return !e})} />
                     <img className='logo' src={logo} />
                     <div className='head'>
                         <p className='head-text' onClick={logout} >Logout</p>
                         <AiOutlineLogout className='logout' onClick={logout} />
                     </div>     
                </header>
                <main>
                    <div className={`lists ${hide?'hidden':""}`}>
                       <img className='dash-img' src={pic.uri} />
                       <p className='dashboard-name'>{pic.name}</p>
                       <Link to='/dashboard/' style={{textDecoration:'none'}}>
                       <div className='dash-item' onClick={()=>sethide(true)}>
                           <AiFillHome className='dash-icon' />
                           <p className='dash-text'>Home</p>
                       </div>
                       </Link>
                       <Link to='/dashboard/about' style={{textDecoration:'none'}}>
                       <div className='dash-item' onClick={()=>sethide(true)}>
                           <BsPersonLinesFill className='dash-icon' />
                           <p className='dash-text'>Edit About</p>
                       </div>
                       </Link>
                       <Link to='/dashboard/posts' style={{textDecoration:'none'}}>
                       <div className='dash-item' onClick={()=>sethide(true)}>
                           <BsFilePost className='dash-icon' />
                           <p className='dash-text'>Posts</p>
                       </div>
                       </Link>
                       <Link to='/dashboard/new' style={{textDecoration:'none'}}>
                       <div className='dash-item' onClick={()=>sethide(true)}>
                           <MdFiberNew className='dash-icon' />
                           <p className='dash-text'>New Post</p>
                       </div>
                       </Link>
                       
                       
                    </div>
                    
                    <div className={`cont ${!hide?'c':""}`} >
                    <Switch>
                    <Route exact path='/dashboard/' >
                     <HomeDash url={pic.uri} />
                    </Route>
                    <Route  path='/dashboard/about' >
                     <AboutDash />
                    </Route>
                    <Route exact path='/dashboard/posts' >
                     <PostsDash />
                    </Route>
                    <Route exact path='/dashboard/new' >
                     <NewDash />
                    </Route>
                    <Route exact path='/dashboard/posts/:id' >
                     <DashEdit />
                    </Route>
                    <Route  path='*' >
                        <div>Error 404</div>
                    </Route>
                    </Switch> 
                    </div>
                    
                </main>
            </div>
        );
    }

    
}