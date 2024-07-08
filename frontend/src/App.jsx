import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";
import { useEffect, useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={isAuthenticated ? <Home /> : <Auth />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
