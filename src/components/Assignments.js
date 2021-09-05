import React from "react";
import { NavLink } from "react-router-dom";

const Assignments = () => {
  return (
    <>
      <div className="w-10/12 mx-auto flex justify-between flex-wrap mt-20">
        <NavLink
          to="/sem_task_cse"
          className="no-underline transform hover:scale-110"
        >
          <div className="responsiveBoxes rounded-2xl border-4 bg-gradient-to-tl from-yellow-500 via-yellow-400 to-yellow-500 shadow-lg p-10 w-96">
            <h2 className="text-white tracking-wide">CSE</h2>
            <p className="text-white font-normal">
              If you are from Computer Science and Engineering Department then
              select this block
            </p>
          </div>
        </NavLink>
        <NavLink
          to="/sem_task_it"
          className="no-underline transform hover:scale-110"
        >
          <div className="responsiveBoxes rounded-2xl border-4 bg-gradient-to-tl from-green-500 via-green-400 to-green-500 shadow-lg p-10 w-96 ">
            <h2 className="text-white tracking-wide">IT</h2>
            <p className="text-white font-normal">
              If you are from Information Technology Department then select this
              block
            </p>
          </div>
        </NavLink>
        <NavLink
          to="/sem_task_ece"
          className="no-underline transform  hover:scale-110"
        >
          <div className="responsiveBoxes rounded-2xl border-4 bg-gradient-to-tl from-red-500 via-red-400 to-red-500 opacity-90 shadow-lg p-10 w-96 ">
            <h2 className="text-white tracking-wide">ECE</h2>
            <p className="text-white font-normal">
              If you are from Electronics and Communication Engineering
              Department then select this block
            </p>
          </div>
        </NavLink>
        <NavLink
          to="/sem_task_ee"
          className="no-underline transform hover:scale-110"
        >
          <div className="responsiveBoxes rounded-2xl border-4 bg-gradient-to-tl from-blue-500 via-blue-400 to-blue-500 shadow-lg p-10 w-96 mt-10">
            <h2 className="text-white tracking-wide">EE</h2>
            <p className="text-white font-normal">
              If you are from Electrical Engineering Department then select this
              block
            </p>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default Assignments;
