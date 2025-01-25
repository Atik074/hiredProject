import auth from '@/firebase/firebase';
import { AuthContext } from '@/context/AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { GoogleAuthProvider } from "firebase/auth";

//for google sign in
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null)
   const [loading, setLoading]= useState(true)


//create user for registation
 const createUser =(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
 }

 //sign in user for login 
 const signInUser = (email,password)=>{
     setLoading(true)
     return signInWithEmailAndPassword(auth,email,password)
 }

 //update user profile 
 const updateUserProfile =(firstName,photoURL)=>{
   return updateProfile(auth.currentUser , {
    
         displayName:firstName , 
         photoURL:photoURL

    })
 }

 //sign Out user 
 const signOutUser =()=>{
    setLoading(true)
      return signOut(auth)
      
 }

 //sign in by Google
 const googleSigninUser =()=>{
     setLoading(true)
   return signInWithPopup(auth, provider)
      
 }

   // manage user 
    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth , currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })

        return ()=>{
            unSubscribe
        }
    },[])


    const userAuthInfo = { 
        user,
        loading ,
        createUser,
        signInUser,
        signOutUser ,
        googleSigninUser ,
        updateUserProfile 

      
     }

    return (
        <AuthContext.Provider value={userAuthInfo}>
            {children}  
        </AuthContext.Provider>
    );
};

export default AuthProvider;