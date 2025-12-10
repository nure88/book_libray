import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import { auth } from "../others/firebase/firebase.confing";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  
  const [user, setUser] = useState(null);
  console.log(user);
  
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  const createUser = (email, password) => {
    setLoading(true);
   return createUserWithEmailAndPassword(auth,email,password)
  };
 
const updateUser = (updateData) => {
  setLoading(true);
return updateProfile(auth.currentUser, updateData)
};


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log(currentUser);

      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    createUser,
    signInUser,
    logInWithGoogle,
    logOut,
    
    updateUser,
    user,
    setUser,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
      </AuthContext.Provider>
  );
};

export default AuthProvider;
