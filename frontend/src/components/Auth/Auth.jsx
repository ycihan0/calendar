import "./Auth.scss";
import { useState } from "react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="form-structor">
      <div className={`signup ${isLogin ? "slide-up" : ""}`}>
        <h2 className="form-title" id="signup" onClick={toggleForm}>
          <span>or</span>Sign up
        </h2>
        <div className="form-holder">
          <input type="text" className="input" placeholder="Name" />
          <input type="email" className="input" placeholder="Email" />
          <input type="password" className="input" placeholder="Password" />
        </div>
        <button className="submit-btn">Sign up</button>
      </div>
      <div className={`login ${isLogin ? "" : "slide-up"}`}>
        <div className="center">
          <h2 className="form-title" id="login" onClick={toggleForm}>
            <span>or</span>Log in
          </h2>
          <div className="form-holder">
            <input type="email" className="input" placeholder="Email" />
            <input type="password" className="input" placeholder="Password" />
          </div>
          <button className="submit-btn">Log in</button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
