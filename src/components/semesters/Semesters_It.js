import React from "react";
import { NavLink } from "react-router-dom";

const Semesters_It = () => {
  return (
    <>
      <div className="w-10/12 mx-auto flex flex-wrap justify-between">
        <NavLink to="/sem_1_it" className=" no-underline">
          <div className="border-4 shadow-lg p-10 w-72 border-blue-200  mt-20 transform hover:scale-110">
            <h1 className="text-gray-700">SEM - 1</h1>
            <p className="text-gray-700">
              If you are from first semester IT department then select this
              block
            </p>
          </div>
        </NavLink>
        <NavLink to="/sem_2_it" className=" no-underline">
          <div className="border-4 shadow-lg p-10 w-72 border-blue-200  mt-20 transform hover:scale-110">
            <h1 className="text-gray-700">SEM - 2</h1>
            <p className="text-gray-700">
              If you are from second semester IT department then select this
              block
            </p>
          </div>
        </NavLink>
        <NavLink to="/sem_3_it" className=" no-underline">
          <div className="border-4 shadow-lg p-10 w-72 border-blue-200  mt-20 transform hover:scale-110">
            <h1 className="text-gray-700">SEM - 3</h1>
            <p className="text-gray-700">
              If you are from third semester IT department then select this
              block
            </p>
          </div>
        </NavLink>
        <NavLink to="/sem_4_it" className=" no-underline">
          <div className="border-4 shadow-lg p-10 w-72 border-blue-200 mt-20 transform hover:scale-110">
            <h1 className="text-gray-700">SEM - 4</h1>
            <p className="text-gray-700">
              If you are from fourth semester IT department then select this
              block
            </p>
          </div>
        </NavLink>
        <NavLink to="/sem_5_it" className=" no-underline">
          <div className="border-4 shadow-lg p-10 w-72 border-blue-200 mt-10 transform hover:scale-110">
            <h1 className="text-gray-700">SEM - 5</h1>
            <p className="text-gray-700">
              If you are from fifth semester IT department then select this
              block
            </p>
          </div>
        </NavLink>
        <NavLink to="/sem_6_it" className=" no-underline">
          <div className="border-4 shadow-lg p-10 w-72 border-blue-200 mt-10 transform hover:scale-110">
            <h1 className="text-gray-700">SEM - 6</h1>
            <p className="text-gray-700">
              If you are from sixth semester IT department then select this
              block
            </p>
          </div>
        </NavLink>
        <NavLink to="/sem_7_it" className=" no-underline">
          <div className="border-4 shadow-lg p-10 w-72 border-blue-200 mt-10 transform hover:scale-110">
            <h1 className="text-gray-700">SEM - 7</h1>
            <p className="text-gray-700">
              If you are from seventh semester IT department then select this
              block
            </p>
          </div>
        </NavLink>
        <NavLink to="/sem_8_it" className=" no-underline">
          <div className="border-4 shadow-lg p-10 w-72 border-blue-200 mt-10 transform hover:scale-110">
            <h1 className="text-gray-700">SEM - 8</h1>
            <p className="text-gray-700">
              If you are from eighth semester IT department then select this
              block
            </p>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default Semesters_It;
