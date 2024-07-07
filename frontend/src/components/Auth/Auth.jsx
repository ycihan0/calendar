import "./Auth.scss";
import { useState } from "react";

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
          <div className="center">
            <h2 className="form-title" id="login" onClick={toggleForm}>
              <span>veya</span>Giriş yap
            </h2>
            <div className="form-holder">
              <input type="email" className="input" placeholder="Email" />
              <input type="password" className="input" placeholder="Password" />
            </div>
            <button className="submit-btn">Giriş yap</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
