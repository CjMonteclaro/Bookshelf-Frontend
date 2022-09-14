import React, { createContext, useState, useContext, useEffect } from "react";
import Router, { useRouter } from "next/router";

import api from "../pages/api/api";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUserFromLocalStorage() {
      const token = localStorage.getItem("token");
      if (token) {
        api.defaults.headers.Authorization = token;
        const { data: user } = await api.get("current_user");
        if (user) setUser(user);
      }
      setLoading(false);
    }
    loadUserFromLocalStorage();
  }, []);

  const login = async (username, password) => {
    const { data: token } = await api.post("/login", {
      username,
      password,
    });
    if (token) {
      localStorage.setItem("token", token);
      api.defaults.headers.Authorization = token.token;
      const { data: user } = await api.get("/current_user");
      setUser(user);
      console.log("Got user", user);
    }
  };

  const logout = (username, password) => {
    localStorage.setItem("token", "");
    setUser(null);
    delete api.defaults.headers.Authorization;
    window.location.pathname = "/login";
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!user, user, login, loading, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
