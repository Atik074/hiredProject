import auth from '@/firebase/firebase';
import { AuthContext } from '@/hooks/AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';

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

 //sign Out user 
 const signOutUser =()=>{
    setLoading(true)
      return signOut(auth)
 }

   // manage user 
    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth , currentUser =>{
            setUser(currentUser)
            console.log("from authProvider" , currentUser)
            setLoading(false)
        })

        return ()=>{
            unSubscribe
        }
    },[])


    const userAuthInfo = { 
        user,
        createUser,
        signInUser,
        signOutUser ,
        loading
     }

    return (
        <AuthContext.Provider value={userAuthInfo}>
            {children}  
        </AuthContext.Provider>
    );
};

export default AuthProvider;