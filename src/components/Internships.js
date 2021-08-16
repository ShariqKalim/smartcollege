import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";

const Internships = () => {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getInfo = async () => {
      const res = await axios.get(process.env.React_App_INTERNSHIP);
      setInfo(res.data.reverse());
      setLoading(true);
    };
    getInfo();
  }, []);
  const [searchterm, setSearchterm] = useState("");
  return (
    <>
      <h3 className="text-center p-1 text-white bg-gradient-to-r from-yellow-300 via-yellow-400 to to-yellow-300 font-medium font-sans tracking-wider text-md ">
        Internships
      </h3>
      <div className="w-10/12 mx-auto">
        <input
          type="text"
          placeholder="Search....."
          className="p-2 rounded-full border-4 w-full mb-3"
          onChange={(e) => setSearchterm(e.target.value)}
        />
      </div>
      <div className="w-10/12 mx-auto flex flex-wrap justify-between">
        {loading ? (
          info
            .filter((elem) => {
              if (searchterm == "") {
                return elem;
              } else if (
                elem.topic.toLowerCase().includes(searchterm.toLowerCase())
              ) {
                return elem;
              }
            })
            .map((elem, i) => {
              const { topic, main, link, date, ratings, logoid } = elem;
              return (
                <>
                  <div className="w-80 shadow p-8 mb-10 border-4 bg-white">
                    <div className="flex justify-between">
                      <h6 className="text-yellow-700 font-medium mb-3 text-md">
                        {topic}
                      </h6>
                      <img
                        src={`https://drive.google.com/thumbnail?id=${logoid}`}
                        alt="logo"
                        width="70"
                        height="70"
                      />
                    </div>
                    <h6 className="text-sm text-gray-600 font-medium mb-5">
                      {main}
                    </h6>
                    <button className="p-1 border-2 bg-white  border-blue-500 float-right">
                      <a
                        href={link}
                        className="text-blue-500 font-medium no-underline text-sm"
                      >
                        continue
                      </a>
                    </button>
                    <div className="flex mt-28 justify-between">
                      <h6>{date}</h6>
                      <h6 className="w-20 text-center p-1 bg-gradient-to-r from-yellow-500 to-yellow-400 text-white tracking-wider font-medium rounded-full text-sm">
                        {ratings}
                      </h6>
                    </div>
                  </div>
                </>
              );
            })
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default Internships;
