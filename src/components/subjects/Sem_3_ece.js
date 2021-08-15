import React from "react";
import { NavLink } from "react-router-dom";

const Sem_3_ece = () => {
  return (
    <>
      <div className="w-10/12 justify-between flex flex-wrap mx-auto">
        <NavLink to="/nt_ece" className="no-underline">
          <div className="res_1 w-96 border-4 p-10  h-52 grid place-items-center mb-10 mt-24 shadow-xl text-center transform hover:scale-110">
            <h5 className="w-full bg-gradient-to-r from-blue-500 to-blue-400 absolute -mt-40 text-white font-medium p-1">
              Classnotes
            </h5>
            <h4 className="text-gray-800">Network Theory</h4>
          </div>
        </NavLink>
        <NavLink to="/ed_ece" className="no-underline">
          <div className="res_1 w-96 border-4 p-10  h-52 grid place-items-center mb-10 mt-24 shadow-xl text-center transform hover:scale-110">
            <h5 className="w-full bg-gradient-to-r from-blue-500 to-blue-400 absolute -mt-40 text-white font-medium p-1">
              Classnotes
            </h5>
            <h4 className="text-gray-800">Electronic Devices</h4>
          </div>
        </NavLink>
        <NavLink to="/ss_ece" className="no-underline">
          <div className="res_1 w-96 border-4 p-10  h-52 grid place-items-center mb-10 mt-24 shadow-xl text-center transform hover:scale-110">
            <h5 className="w-full bg-gradient-to-r from-blue-500 to-blue-400 absolute -mt-40 text-white font-medium p-1">
              Classnotes
            </h5>
            <h4 className="text-gray-800">Signals & Systems</h4>
          </div>
        </NavLink>
        <NavLink to="/dsd_ece" className="no-underline">
          <div className="res_2 w-96 border-4 p-10  h-52 grid place-items-center  shadow-xl text-center transform hover:scale-110">
            <h5 className="w-full bg-gradient-to-r from-blue-500 to-blue-400 absolute -mt-40 text-white font-medium p-1">
              Classnotes
            </h5>
            <h4 className="text-gray-800">Digital System Design</h4>
          </div>
        </NavLink>
        <NavLink to="/dsa_ece" className="no-underline">
          <div className="res_2 w-96 border-4 p-10  h-52 grid place-items-center  shadow-xl text-center transform hover:scale-110">
            <h5 className="w-full bg-gradient-to-r from-blue-500 to-blue-400 absolute -mt-40 text-white font-medium p-1">
              Classnotes
            </h5>
            <h4 className="text-gray-800">Data Structure & Algorithm (ES)</h4>
          </div>
        </NavLink>
        <NavLink to="/math_ece" className="no-underline">
          <div className="res_2 w-96 border-4 p-10  h-52 grid place-items-center  shadow-xl text-center transform hover:scale-110">
            <h5 className="w-full bg-gradient-to-r from-blue-500 to-blue-400 absolute -mt-40 text-white font-medium p-1">
              Classnotes
            </h5>
            <h4 className="text-gray-800">
              Mathematics III (Probability & Statistics)
            </h4>
          </div>
        </NavLink>
        <NavLink to="/es_ece" className="no-underline">
          <div className="res_2 w-96 border-4 p-10 mt-10 h-52 grid place-items-center  shadow-xl text-center transform hover:scale-110">
            <h5 className="w-full bg-gradient-to-r from-blue-500 to-blue-400 absolute -mt-40 text-white font-medium p-1">
              Classnotes
            </h5>
            <h4 className="text-gray-800">Environmental Science</h4>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default Sem_3_ece;
