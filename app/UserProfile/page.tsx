import React from "react";
import "/styles/global.css";

const ProfilePage = () => {
  return (
    <div id="profileContainer" className="flex">
      <div className="flex">
        <div className="flex justify-center align-middle profilePictureCtn">
          <img id="profilePicture" src="" alt="Profile Picture will be here" />
        </div>
        <div>
          <div>
            <p>
              Username: <span>Carlos</span>
            </p>
          </div>
          <div>
            <p>
              Contact e-mail: <span>carlosjobim@gmail.com</span>
            </p>
          </div>
          <div>
            <p>
              Phone Number: <span>514-999-9999</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
