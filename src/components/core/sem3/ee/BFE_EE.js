import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const BFE_EE = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    const getApiData = async () => {
      try {
        const res = await axios.get(process.env.React_App_BFE_EE);
        setInfo(res.data.reverse());
      } catch (error) {
        console.log(error);
      }
    };
    getApiData();
  }, []);
  return (
    <>
      <div className="w-10/12 mx-auto">
        <h4 className="text-center text-white font-medium bg-gradient-to-r from-indigo-500 to-indigo-400 p-2">
          SUBJECT CODE : BS-302
        </h4>
        {info.map((elem, id) => {
          const { topic, link, date, time } = elem;
          return (
            <>
              <div
                className="w-full border-2 shadow-lg mt-10 p-10 h-auto "
                key={id}
              >
                <h1 className="text-2xl text-gray-700 border-2 p-1 font-montserrat ">
                  {topic}
                </h1>
                <button className="float-right my-5 font-medium tracking-wide p-2 bg-gradient-to-r w-40 rounded from-blue-700 to-blue-500">
                  <a
                    className="no-underline text-white"
                    target="_blank"
                    href={link}
                  >
                    Download
                  </a>
                </button>
                <div className="flex w-48 justify-between flex-wrap mt-20 text-yellow-600 font-light">
                  <h6>{date}</h6>
                  <h6>{time}</h6>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default BFE_EE;
