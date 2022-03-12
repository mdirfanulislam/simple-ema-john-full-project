import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebaseInit';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        signOut(auth)
        .then( () => { 
            setUser({})
        })
    }

    useEffect( () => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
              } 
        })
    },[auth])

    return {
        user,
        loginWithGoogle, 
        logOut
    }
};

export default useFirebase;