import "/styles/global.css";
import React from "react";

const Homepage: React.FC = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Welcome to AnaCondo</h1>
        <div className="text-center">
          <p className="text-lg mb-4">Everything Condo with AnaCondo T-T</p>
          <div className="flex justify-center flex-wrap">
            <img src="https://bestkeptmontreal.com/wp-content/uploads/2022/07/solstice-persp-ext-vue-ouest-1-1024x429.jpg" alt="Condo Image 1" className="w-1/2 md:w-1/3 lg:w-1/4 mx-2 my-2 rounded-lg shadow-lg" />
            <img src="https://maplr.co/wp-content/uploads/2022/08/13-griffintown-se-loger-montreal-francais-expatries.jpg" alt="Condo Image 2" className="w-1/2 md:w-1/3 lg:w-1/4 mx-2 my-2 rounded-lg shadow-lg" />
            <img src="https://immo.vrtx.co/picFull/10260972.jpg" alt="Condo Image 3" className="w-1/2 md:w-1/3 lg:w-1/4 mx-2 my-2 rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;