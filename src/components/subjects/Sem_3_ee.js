import React from "react";
import { NavLink } from "react-router-dom";

const Sem_3_ee = () => {
  return (
    <>
      <div className="w-10/12 justify-between flex flex-wrap mx-auto">
        <NavLink to="/ect_ee" className="no-underline">
          <div className="res_1 w-96 border-4 p-10  h-52 grid place-items-center mb-10 mt-24 shadow-xl text-center transform hover:scale-110">
            <h5 className="w-full bg-gradient-to-r from-blue-500 to-blue-400 absolute -mt-40 text-white font-medium p-1">
              Classnotes
            </h5>
            <h4 className="text-gray-800">Electric Circuit Theory</h4>
          </div>
        </NavLink>
        <NavLink to="/math_ee" className="no-underline">
          <div className="res_1 w-96 border-4 p-10  h-52 grid place-items-center mb-10 mt-24 shadow-xl text-center transform hover:scale-110">
            <h5 className="w-full bg-gradient-to-r from-blue-500 to-blue-400 absolute -mt-40 text-white font-medium p-1">
              Classnotes
            </h5>
            <h4 className="text-gray-800">Mathematics-III</h4>
          </div>
        </NavLink>
        <NavLink to="/eft_ee" className="no-underline">
          <div className="res_1 w-96 border-4 p-10  h-52 grid place-items-center mb-10 mt-24 shadow-xl text-center transform hover:scale-110">
            <h5 className="w-full bg-gradient-to-r from-blue-500 to-blue-400 absolute -mt-40 text-white font-medium p-1">
              Classnotes
            </h5>
            <h4 className="text-gray-800">Electromagnetic Field Theory</h4>
          </div>
        </NavLink>
        <NavLink to="/ae_ee" className="no-underline">
          <div className="res_2 w-96 border-4 p-10  h-52 grid place-items-center  shadow-xl text-center transform hover:scale-110">
            <h5 className="w-full bg-gradient-to-r from-blue-500 to-blue-400 absolute -mt-40 text-white font-medium p-1">
              Classnotes
            </h5>
            <h4 className="text-gray-800">Analog Electronics</h4>
          </div>
        </NavLink>
        <NavLink to="/em_ee" className="no-underline">
          <div className="res_2 w-96 border-4 p-10  h-52 grid place-items-center  shadow-xl text-center transform hover:scale-110">
            <h5 className="w-full bg-gradient-to-r from-blue-500 to-blue-400 absolute -mt-40 text-white font-medium p-1">
              Classnotes
            </h5>
            <h4 className="text-gray-800">Engineering Mechanics</h4>
          </div>
        </NavLink>
        <NavLink to="/bfe_ee" className="no-underline">
          <div className="res_2 w-96 border-4 p-10  h-52 grid place-items-center  shadow-xl text-center transform hover:scale-110">
            <h5 className="w-full bg-gradient-to-r from-blue-500 to-blue-400 absolute -mt-40 text-white font-medium p-1">
              Classnotes
            </h5>
            <h4 className="text-gray-800">Biology for Engineers</h4>
          </div>
        </NavLink>
        <NavLink to="/ic_ee" className="no-underline">
          <div className="res_2 w-96 border-4 p-10 mt-10 h-52 grid place-items-center  shadow-xl text-center transform hover:scale-110">
            <h5 className="w-full bg-gradient-to-r from-blue-500 to-blue-400 absolute -mt-40 text-white font-medium p-1">
              Classnotes
            </h5>
            <h4 className="text-gray-800">Indian Constitution</h4>
          </div>
        </NavLink>
        <NavLink to="/nm_ee" className="no-underline">
          <div className="res_2 w-96 border-4 p-10 mt-10 h-52 grid place-items-center  shadow-xl text-center transform hover:scale-110">
            <h5 className="w-full bg-gradient-to-r from-blue-500 to-blue-400 absolute -mt-40 text-white font-medium p-1">
              Classnotes
            </h5>
            <h4 className="text-gray-800">Numerical Methods Lab</h4>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default Sem_3_ee;
