"use client";

import { createContext, use, useContext, useEffect, useState } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  User,
} from "firebase/auth";
import { auth } from "@/firebase";
import { useRouter, usePathname } from "next/navigation";

type AuthStatus = "loading" | "error" | "authenticated" | "unauthenticated";

interface AuthContextProps {
  user: User | null;
  status: AuthStatus;
  googleSignIn: () => void;
  googleSignOut: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const PUBLIC_ROUTES = ["/", "/login"];

  const [user, setUser] = useState<User | null>(null);
  const [status, setStatus] = useState<AuthStatus>("loading");

  const googleSignIn = () => {
    setStatus("loading");
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then(() => router.push("/creator"))
      .then((x) => setStatus("authenticated"))
      .catch((err) => {
        setStatus("error");
        console.log(err);
      });
  };

  const googleSignOut = () => {
    signOut(auth)
      .then(() => router.push("/login"))
      .then(() => setStatus("unauthenticated"))
      .catch((err) => {
        setStatus("error");
        console.log(err);
      });
  };

  useEffect(() => {
    setStatus("loading");
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      currentUser
        ? setUser(currentUser)
        : PUBLIC_ROUTES.includes(pathname)
        ? ""
        : router.push("/login");
      setStatus(currentUser ? "authenticated" : "unauthenticated");
    });

    return () => unsubscribe();
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, status, googleSignIn, googleSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }
  return context;
};
