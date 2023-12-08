'use client';

import { createContext, useContext, useEffect, useState } from "react";
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider, User } from "firebase/auth";
import { auth } from "@/firebase";

type AuthStatus = "loading" | "error" | "authenticated" | "unauthenticated";

interface AuthContextProps {
  user: User | null;
  status: AuthStatus;
  googleSignIn: () => void;
  googleSignOut: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthContextProvider = ({children} : {children: React.ReactNode}) => {

    const [user, setUser] = useState<User | null>(null);
    const [status, setStatus] = useState<AuthStatus>("loading");

    const googleSignIn = () => {
        setStatus("loading");
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider).then(x => setStatus("authenticated")).catch(err => {
            setStatus("error");
            console.log(err)
        });
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
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }
  return context;
}   