import { useState } from "react";
import "/styles/global.css";

const Index = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <div id="navbarMain" className="flex justify-between p-5">
        <div className="navbarLogo">
          <p className="navbarLogoTitle">
            <i>
              <b>AnaCondo</b>
            </i>
          </p>
        </div>
        <div className="navBarAccount flex align-middle">
          {loggedIn ? (
            <div>
              <p>Logged In!</p>
            </div>
          ) : (
            <div id="navbarAccountNoLogin" className="flex">
              <button id="loginBtn" className="navButton">
                Login
              </button>
              <button id="signupBtn" className="navButton">
                Signup
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Index;
