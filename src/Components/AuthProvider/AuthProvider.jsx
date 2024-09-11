import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../../Firebase/firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const twitterProvider = new TwitterAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    // create user 

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const Logout = (email, password) => {

        return signOut(auth)
    }
    const googleUserProvider = (email, password) => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
    const twitterUserProvider = (email, password) => {
        setLoading(true);
        return signInWithPopup(auth, twitterProvider)
    }
    const updateProfiles = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })

    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser, "user found");
            if(currentUser){
                setUser(currentUser)
            }
            setLoading(false)
        
            
        })
        return unSubscribe()
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        googleUserProvider,
        Logout,
        updateProfiles,
        twitterUserProvider,
        setUser,
        setLoading,
        signIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;