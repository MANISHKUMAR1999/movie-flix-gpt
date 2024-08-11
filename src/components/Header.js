import React , {useEffect} from 'react'
import { signOut ,onAuthStateChanged} from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';
import { AVATAR_URL, LOGO_URL } from '../utils/constants';

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user);
  
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
      
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
    
  }

  useEffect(()=>{
  const unsubscribe =   onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName} = user;
        //console.log(photoURL)
        dispatch(addUser({uid:uid,email:email,displayName:displayName}));
        navigate("/browse")
       
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser())
        navigate("/")
       
      }
    });

    // unsubscribe when component unmount
     return ()=> unsubscribe();

  },[])
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between '>
        <img src={LOGO_URL} alt='netflix-logo' className='w-44'/>
     {

      user && 
      <div className="flex p-2">
        <img className="w-12 h-12" alt="usericon" src={AVATAR_URL} />
        <button  className="font-bold text-white " onClick={handleSignOut}>
          (Sign Out)
        </button>
      </div>

     }
    </div>
    
  )
}

export default Header