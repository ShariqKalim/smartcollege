import React from "react";
import { NavLink } from "react-router-dom";

const Sem_3_it = () => {
  return (
    <>
      <div className="w-10/12 justify-between flex flex-wrap mx-auto">
        <NavLink to="/co_it" className="no-underline">
          <div className="res_1 w-96 border-4 p-10  h-52 grid place-items-center mb-10 mt-24 shadow-xl text-center transform hover:scale-110">
            <h5 className="w-full bg-gradient-to-r from-blue-500 to-blue-400 absolute -mt-40 text-white font-medium p-1">
              Classnotes
            </h5>
            <h4 className="text-gray-800">Computer Organisation</h4>
          </div>
        </NavLink>
        <NavLink to="/dsa_it" className="no-underline">
          <div className="res_1 w-96 border-4 p-10  h-52 grid place-items-center mb-10 mt-24 shadow-xl text-center transform hover:scale-110">
            <h5 className="w-full bg-gradient-to-r from-blue-500 to-blue-400 absolute -mt-40 text-white font-medium p-1">
              Classnotes
            </h5>
            <h4 className="text-gray-800">Data Structure and Algorithms</h4>
          </div>
        </NavLink>
        <NavLink to="/ade_it" className="no-underline">
          <div className="res_1 w-96 border-4 p-10  h-52 grid place-items-center mb-10 mt-24 shadow-xl text-center transform hover:scale-110">
            <h5 className="w-full bg-gradient-to-r from-blue-500 to-blue-400 absolute -mt-40 text-white font-medium p-1">
              Classnotes
            </h5>
            <h4 className="text-gray-800">Analog & Digital Electronics</h4>
          </div>
        </NavLink>
        <NavLink to="/math_it" className="no-underline">
          <div className="res_2 w-96 border-4 p-10  h-52 grid place-items-center  shadow-xl text-center transform hover:scale-110">
            <h5 className="w-full bg-gradient-to-r from-blue-500 to-blue-400 absolute -mt-40 text-white font-medium p-1">
              Classnotes
            </h5>
            <h4 className="text-gray-800">Mathematics-III</h4>
          </div>
        </NavLink>
        <NavLink to="/efe_it" className="no-underline">
          <div className="res_2 w-96 border-4 p-10  h-52 grid place-items-center  shadow-xl text-center transform hover:scale-110">
            <h5 className="w-full bg-gradient-to-r from-blue-500 to-blue-400 absolute -mt-40 text-white font-medium p-1">
              Classnotes
            </h5>
            <h4 className="text-gray-800">Economics for Engineers</h4>
          </div>
        </NavLink>
        <NavLink to="/itw_it" className="no-underline">
          <div className="res_2 w-96 border-4 p-10  h-52 grid place-items-center  shadow-xl text-center transform hover:scale-110">
            <h5 className="w-full bg-gradient-to-r from-blue-500 to-blue-400 absolute -mt-40 text-white font-medium p-1">
              Classnotes
            </h5>
            <h4 className="text-gray-800">IT Workshop</h4>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default Sem_3_it;
