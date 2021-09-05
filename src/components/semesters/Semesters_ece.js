import React from "react";
import { NavLink } from "react-router-dom";

const Semesters_ece = () => {
  return (
    <>
      <div className="w-10/12 mx-auto flex flex-wrap justify-between">
        <NavLink to="/sem_1_ece" className=" no-underline">
          <div className="border-4 shadow-lg p-10 w-72 border-blue-200  mt-20 transform hover:scale-110">
            <h2 className="text-gray-700">SEM - 1</h2>
            <p className="text-gray-700">
              If you are from first semester ECE department then select this
              block
            </p>
          </div>
        </NavLink>
        <NavLink to="/sem_2_ece" className=" no-underline">
          <div className="border-4 shadow-lg p-10 w-72 border-blue-200  mt-20 transform hover:scale-110">
            <h2 className="text-gray-700">SEM - 2</h2>
            <p className="text-gray-700">
              If you are from second semester ECE department then select this
              block
            </p>
          </div>
        </NavLink>
        <NavLink to="/sem_3_ece" className=" no-underline">
          <div className="border-4 shadow-lg p-10 w-72 border-blue-200 bg-gradient-to-b from-yellow-300 via-yellow-400 to-yellow-300  mt-20 transform hover:scale-110">
            <h2 className="text-white">SEM - 3</h2>
            <p className="text-white">
              If you are from third semester ECE department then select this
              block
            </p>
          </div>
        </NavLink>
        <NavLink to="/sem_4_ece" className=" no-underline">
          <div className="border-4 shadow-lg p-10 w-72 border-blue-200 mt-20 transform hover:scale-110">
            <h2 className="text-gray-700">SEM - 4</h2>
            <p className="text-gray-700">
              If you are from fourth semester ECE department then select this
              block
            </p>
          </div>
        </NavLink>
        <NavLink to="/sem_5_ece" className=" no-underline">
          <div className="border-4 shadow-lg p-10 w-72 border-blue-200 mt-10 transform hover:scale-110">
            <h2 className="text-gray-700">SEM - 5</h2>
            <p className="text-gray-700">
              If you are from fifth semester ECE department then select this
              block
            </p>
          </div>
        </NavLink>
        <NavLink to="/sem_6_ece" className=" no-underline">
          <div className="border-4 shadow-lg p-10 w-72 border-blue-200 mt-10 transform hover:scale-110">
            <h2 className="text-gray-700">SEM - 6</h2>
            <p className="text-gray-700">
              If you are from sixth semester ECE department then select this
              block
            </p>
          </div>
        </NavLink>
        <NavLink to="/sem_7_ece" className=" no-underline">
          <div className="border-4 shadow-lg p-10 w-72 border-blue-200 mt-10 transform hover:scale-110">
            <h2 className="text-gray-700">SEM - 7</h2>
            <p className="text-gray-700">
              If you are from seventh semester ECE department then select this
              block
            </p>
          </div>
        </NavLink>
        <NavLink to="/sem_8_ece" className=" no-underline">
          <div className="border-4 shadow-lg p-10 w-72 border-blue-200 mt-10 transform hover:scale-110">
            <h2 className="text-gray-700">SEM - 8</h2>
            <p className="text-gray-700">
              If you are from eighth semester ECE department then select this
              block
            </p>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default Semesters_ece;
