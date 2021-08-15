// import React from "react";

// const Homemain = () => {
//   return (
//     <>
//       <div
//         className="w-11/12 flex justify-between flex-wrap mx-auto mt-10"
//         id="content_boxes"
//       >
//         <a href="/classnotes" className="no-underline">
//           <div className=" flex w-96 border-4 bg-white cursor-pointer  p-16 shadow-md mb-5 transform hover:scale-110">
//             <img src="images/classnotes.jpg" alt="logo" width="100" />
//             <h3 className="mt-4 ml-3 text-md font-medium text-gray-800 tracking-wide">
//               Classnotes
//             </h3>
//           </div>
//         </a>

//         <a href="/assignments" className="no-underline">
//           <div className=" flex w-96 border-4 bg-white cursor-pointer  p-16 shadow-md mb-5 transform hover:scale-110">
//             <img src="images/assignments1.jpg" alt="logo" width="100" />
//             <h3 className="mt-4 ml-2 text-md font-medium text-gray-800 tracking-wide">
//               Assignments
//             </h3>
//           </div>
//         </a>

//         <a href="/announcements" className="no-underline">
//           <div className=" flex w-96 border-4 bg-white cursor-pointer  p-16 shadow-md mb-5 transform hover:scale-110">
//             <img
//               src="images/announcements.jfif"
//               alt="logo"
//               width="100"
//               className="-ml-8"
//             />
//             <h3 className="mt-4 ml-1 text-md font-medium text-gray-800 tracking-wide">
//               Announcements
//             </h3>
//           </div>
//         </a>

//         <a href="/challenges" className="no-underline">
//           <div className=" flex w-96 border-4 bg-white cursor-pointer mb-5 p-16 shadow-md transform hover:scale-110">
//             <img src="images/challenges.png" alt="logo" width="100" />
//             <h3 className="mt-4 ml-3 text-md font-medium text-gray-800 tracking-wide">
//               Challenges
//             </h3>
//           </div>
//         </a>

//         <a href="/internships" className="no-underline">
//           <div className=" flex w-96 border-4 bg-white cursor-pointer mb-5  p-16 shadow-md transform hover:scale-110">
//             <img src="images/internship.jfif" alt="logo" width="100" />
//             <h3 className="mt-4 ml-3 text-md font-medium text-gray-800 tracking-wide">
//               Internships
//             </h3>
//           </div>
//         </a>

//         <a href="/courses" className="no-underline">
//           <div className=" flex w-96 border-4 bg-white cursor-pointer mb-5  p-16 shadow-md transform hover:scale-110">
//             <img src="images/courses.svg" alt="logo" width="100" />
//             <h3 className="mt-4 ml-3 text-md font-medium text-gray-800 tracking-wide">
//               Courses
//             </h3>
//           </div>
//         </a>
//       </div>
//     </>
//   );
// };

// export default Homemain;

import React from "react";
import { NavLink } from "react-router-dom";

const Homemain = () => {
  return (
    <>
      <div
        className="w-full h-96 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-700 text-white flex justify-around"
        id="responsiveHome1"
      >
        <div className="mt-32 text-center">
          <h1 className="font-bold text-6xl">WELCOME TO SMARTCOLLEGE</h1>
          <h5 className="mt-10 text-3xl">"Made For STCET Students"</h5>
        </div>
        <div
          className="text-center bg-gradient-to-r from-blue-400 to-blue-300 px-10 "
          id="responsiveHome2"
        >
          <iframe
            width="400"
            height="300"
            src="https://www.youtube.com/embed/BF7VOacFNwA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="my-10 mx-auto"
          ></iframe>
        </div>
      </div>
      <div className="flex p-3 -ml-20">
        <div>
          <img
            src="images/450.jpg"
            alt="boypic"
            className="h-96"
            id="boyimage"
          />
        </div>
        <div
          className="flex w-8/12 flex-wrap justify-around"
          id="responsiveHome3"
        >
          <NavLink to="/classnotes" className="no-underline">
            <div className="flex border-4 w-72 p-4 mb-5 cursor-pointer hover:bg-indigo-100">
              <img src="images/classnotes.jpg" alt="" className="w-24" />
              <h5 className="mt-10 ml-3 text-gray-900">Classnotes</h5>
            </div>
          </NavLink>
          <NavLink to="/assignments" className="no-underline">
            <div className="flex border-4 w-72 p-4 mb-5 cursor-pointer hover:bg-indigo-100">
              <img src="images/assignments1.jpg" alt="" className="w-24" />
              <h5 className="mt-10 ml-3 text-gray-900">Assignments</h5>
            </div>
          </NavLink>
          <NavLink to="/announcements" className="no-underline">
            <div className="flex border-4 w-72 p-4 mb-5 cursor-pointer hover:bg-indigo-100">
              <img src="images/announcements.jfif" alt="" className="w-24" />
              <h5 className="mt-10 ml-1 text-gray-900">Announcements</h5>
            </div>
          </NavLink>
          <NavLink to="/challenges" className="no-underline">
            <div className="flex border-4 w-72 p-4 mb-5 cursor-pointer hover:bg-indigo-100">
              <img src="images/challenges.png" alt="" className="w-24" />
              <h5 className="mt-10 ml-3 text-gray-900">Challenges</h5>
            </div>
          </NavLink>
          <NavLink to="/internships" className="no-underline">
            <div className="flex border-4 w-72 p-4 mb-5 cursor-pointer hover:bg-indigo-100">
              <img src="images/internship.jfif" alt="" className="w-24" />
              <h5 className="mt-10 ml-3 text-gray-900">Internships</h5>
            </div>
          </NavLink>
          <NavLink to="/courses" className="no-underline">
            <div className="flex border-4 w-72 p-4 mb-5 cursor-pointer hover:bg-indigo-100">
              <img src="images/courses.svg" alt="" className="w-24" />
              <h5 className="mt-10 ml-3 text-gray-900">Courses</h5>
            </div>
          </NavLink>
        </div>
      </div>
      <h1 className="text-sm text-white font-medium text-center p-2 bg-gray-800">
        Copyright Reserved &copy; - smartcollege 2021
      </h1>
    </>
  );
};

export default Homemain;
