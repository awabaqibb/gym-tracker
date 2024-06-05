const apiUrl = import.meta.env.VITE_API_USERS;
import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

export const useLogin = () => {
  const { dispatch } = useAuthContext();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (email, password) => {
    const response = await fetch("http://localhost:3000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: email, password }),
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.message);
      setLoading(false);
    } else {
      setError(false);
      localStorage.setItem("user", JSON.stringify(json));
      dispatch({ type: "LOGIN", payload: json });
      setLoading(false);
    }
  };

  return { login, error, loading };
};
