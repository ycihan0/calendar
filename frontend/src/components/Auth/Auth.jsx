import { useState } from "react";
import "./Auth.scss";
import Login from "./Login";
import Register from "./Register";


const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

 
  return (
    <div className="form-container">
      <div className="form-structor">
        <div className={`signup ${isLogin ? "slide-up" : ""}`}>
          <Register toggleForm={toggleForm}/>
        </div>
        <div className={`login ${isLogin ? "" : "slide-up"}`}>
          <Login toggleForm={toggleForm}/>
        </div>
      </div>
    </div>
  );
};

export default Auth;
