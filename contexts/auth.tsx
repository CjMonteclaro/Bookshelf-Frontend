import React, { createContext, useState, useContext, useEffect } from "react";
import { loginRequest, logoutRequest } from "api/sessions";
import { fetchUser } from "../api/users";

const AuthContext = createContext({});

interface Props {
  children: React.ReactNode;
}

export const AuthProvider = ({children}:Props) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUserFromLocalStorage = () => {
      const token = localStorage.getItem("token");
      if (token) {
        const userData = fetchUser()
        const getUser = async () => { 
          const users = await userData.user
          setUser(users.data)
        }
        getUser()
      }
      setLoading(false);
    }
    loadUserFromLocalStorage();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!user, user, loginRequest, loading, logoutRequest }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

