import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "./Loading";

const Announcements = () => {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getApiData = async () => {
      try {
        const res = await axios.get(process.env.React_App_ANNOUNCEMENT);
        setInfo(res.data.reverse());
        setLoading(true);
      } catch (error) {
        console.log(error);
      }
    };
    getApiData();
  }, []);
  //   console.log(info);
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <h6 className="p-1 text-white font-medium text-2xl text-center tracking-wider bg-gradient-to-r from-indigo-500 to-blue-400">
        Announcements
      </h6>
      <div className="w-10/12 mx-auto">
        <input
          type="text"
          placeholder="Search.........."
          className="w-full p-2 font-light border-4 rounded-full"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="w-10/12 mx-auto">
        {loading ? (
          info
            .filter((items) => {
              if (searchTerm == "") {
                return items;
              } else if (
                items.announce.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return items;
              }
            })
            .map((items, i) => {
              const { announce, select, date, id } = items;
              return (
                <>
                  <div
                    className={
                      select === "Good"
                        ? "border-4 p-5 my-5 w-full text-gray-800 border-green-200 bg-white"
                        : select === "Bad"
                        ? "border-4 p-5 my-5 text-gray-800 border-red-400 bg-white"
                        : "border-4 p-5 my-5 text-gray-800 border-yellow-300 bg-white"
                    }
                    key={i}
                  >
                    <p
                      id="announcepara"
                      className=" text-lg font-normal leading-10 tracking-wide"
                    >
                      {announce}
                    </p>

                    <h6 className="text-gray-500 float-right">{date}</h6>
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

export default Announcements;

// className={
//     select === "Good"
//       ? "border-2 p-2 mb-5 text-gray-500 border-green-200"
//       : select === "Bad"
//       ? "border-2 p-2 mb-5 text-gray-500 border-red-600"
//       : "border-2 p-2 mb-5 text-gray-500 border-yellow-300"
//   }
