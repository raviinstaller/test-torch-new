'use client';

import { createContext, useContext, useEffect, useState } from "react";
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/firebase";

type AuthStatus = "loading" | "error" | "authenticated" | "unauthenticated";

export const AuthContext = createContext<any | null>(null);

export const AuthContextProvider = ({children} : {children: React.ReactNode}) => {

    const [user, setUser] = useState({});
    const [status, setStatus] = useState<AuthStatus>("loading");

    const googleSignIn = () => {
        setStatus("loading");
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider).then(x => setStatus("authenticated"));
    }

    const googleSignOut = () => {
        signOut(auth)
        setStatus("unauthenticated")
    }

    useEffect(()=>{
        setStatus("loading")
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            currentUser && setUser(currentUser);
      setStatus(currentUser ? "authenticated" : "unauthenticated");
        })

        return () => unsubscribe()

    }, [user])

    return(
        <AuthContext.Provider value={{user, status, googleSignIn, googleSignOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}   