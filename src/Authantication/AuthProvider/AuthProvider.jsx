/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase.config";
export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(true);
    useEffect(() =>{
        onAuthStateChanged(auth, (User) => {
            if (User) {
              setUser(User)
              setloading(false)
            }
          });
    },[])

    const createUser = (email, password) => {
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const userInfo = {
        user,
        createUser,
        loading,
        
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;