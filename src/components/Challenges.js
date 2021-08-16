import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";

const Courses = () => {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getApiData = async () => {
      try {
        const res = await axios.get(process.env.React_App_CHALLENGES);
        setInfo(res.data.reverse());
        setLoading(true);
      } catch (err) {
        console.log(err);
      }
    };
    getApiData();
  }, []);
  const [searchterm, setSearchterm] = useState("");
  return (
    <>
      <div>
        <h3 className="text-center tracking-wider p-1 text-md text-white bg-gradient-to-r from-pink-400 to-pink-300">
          Challenges
        </h3>
      </div>
      <div className="mx-auto w-10/12">
        <input
          type="text"
          className="w-full p-2 font-light border-4 rounded-full"
          placeholder="Search......"
          onChange={(e) => setSearchterm(e.target.value)}
        />
      </div>
      <div className="w-11/12 mx-auto flex justify-between flex-wrap">
        {loading ? (
          info
            .filter((Items) => {
              if (searchterm == "") {
                return Items;
              } else if (
                Items.topic.toLowerCase().includes(searchterm.toLowerCase())
              ) {
                return Items;
              }
            })
            .map((Items, i) => {
              const { id, topic, main, date, ratings, logoid, link } = Items;
              return (
                <>
                  <div
                    className=" bg-white w-96 shadow p-5 mt-3 border-4 mb-3 rounded-3xl"
                    key={id}
                  >
                    <div className="flex justify-between">
                      <h6 className="text-sm mb-4 text-yellow-700">{topic}</h6>
                      <img
                        src={`https://drive.google.com/thumbnail?id=${logoid}`}
                        alt="logo"
                        width="90"
                      />
                    </div>
                    <h6 className="mb-4 text-sm">{main}</h6>

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
            })
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default Courses;
