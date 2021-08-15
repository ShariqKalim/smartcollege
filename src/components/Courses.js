import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Courses = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    const getApiData = async () => {
      try {
        const res = await axios.get(process.env.React_App_COURSES);
        setInfo(res.data.reverse());
      } catch (err) {
        console.log(err);
      }
    };
    getApiData();
  }, []);
  const [searchterm, setSearchterm] = useState("");
  return (
    <>
      <h3 className="text-center tracking-wide p-1 text-md text-white bg-gradient-to-r from-green-400 via-green-500 to-green-300">
        Courses
      </h3>
      <div className="w-10/12 mx-auto">
        <input
          type="text"
          placeholder="Search....."
          className="w-full p-2 border-4 rounded-full"
          onChange={(e) => setSearchterm(e.target.value)}
        />
      </div>
      <div className="w-11/12 mx-auto flex justify-between flex-wrap">
        {info
          .filter((Items) => {
            if (searchterm == "") {
              return Items;
            } else if (
              Items.courseName.toLowerCase().includes(searchterm.toLowerCase())
            ) {
              return Items;
            }
          })
          .map((Items, i) => {
            const { id, courseName, description, date, ratings, logoid, link } =
              Items;
            return (
              <>
                <div
                  className=" bg-white w-96 shadow p-5 mt-3 border-4 mb-3"
                  key={id}
                >
                  <div className="flex justify-between">
                    <h6 className="text-sm mb-4 text-yellow-700">
                      {courseName}
                    </h6>
                    <img
                      src={`https://drive.google.com/thumbnail?id=${logoid}`}
                      alt="logo"
                      width="90"
                    />
                  </div>
                  <h6 className="mb-4 text-sm ">{description}</h6>

                  <button className=" mb-3 p-1 w-28 bg-gradient-to-r from-blue-500 to-blue-400">
                    <a href={link} className="no-underline text-white">
                      continue
                    </a>
                  </button>

                  <div className="flex justify-between">
                    <h6 className="text-sm text-gray-600 p-2">{date}</h6>
                    <h6 className="p-2 w-14 text-center rounded-full text-white text-sm bg-gradient-to-r from-yellow-600 to-yellow-500">
                      {ratings}
                    </h6>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default Courses;
