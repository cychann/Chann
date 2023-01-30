import { createContext, useContext, useState } from "react";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import app from "../api/firebaseSDK";

export const AuthenticationContext = createContext();

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export function AuthenticationProvider({ children }) {
  const [user, setUser] = useState();

  const action = {
    signIn() {
      signInWithPopup(auth, provider);
    },
    signOut() {
      signOut(auth);
    },
    onAuthChange() {
      onAuthStateChanged(auth, (user) => {
        setUser(user);
      });
    },
  };

  return (
    <AuthenticationContext.Provider value={{ user, action }}>
      {children}
    </AuthenticationContext.Provider>
  );
}

export function useAuthentication() {
  return useContext(AuthenticationContext);
}
