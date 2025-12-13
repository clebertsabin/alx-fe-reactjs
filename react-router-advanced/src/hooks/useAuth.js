import { useState, useEffect } from "react";

export default function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Example: check localStorage for a token
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  return { isAuthenticated };
}