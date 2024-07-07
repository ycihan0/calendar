import { useState } from "react";
import "./Auth.scss";
import Login from "./Login";


const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

 
  return (
    <div className="form-container">
      <div className="form-structor">
        <div className={`signup ${isLogin ? "slide-up" : ""}`}>
          <h2 className="form-title" id="signup" onClick={toggleForm}>
            <span>veya</span>Üye ol
          </h2>
          <div className="form-holder">
            <input type="text" className="input" placeholder="Name" />
            <input type="email" className="input" placeholder="Email" />
            <input type="password" className="input" placeholder="Password" />
          </div>
          <button className="submit-btn">Üye ol</button>
        </div>
        <div className={`login ${isLogin ? "" : "slide-up"}`}>
          <Login toggleForm={toggleForm}/>
        </div>
      </div>
    </div>
  );
};

export default Auth;
