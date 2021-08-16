import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "./Loading";

const About = () => {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getApiData = async () => {
      try {
        const res = await axios.get(process.env.React_App_ABOUT);
        setInfo(res.data);
        setLoading(true);
      } catch (error) {
        console.log(error);
      }
    };
    getApiData();
  }, []);
  return (
    <>
      <h1 className="mb-5 bg-white font-monoton text-center border-4  mt-4 tracking-widest text-blue-600 shadow-2xl p-2 w-96 mx-auto">
        ABOUT US
      </h1>
      <div className="w-10/12 mx-auto flex justify-around flex-wrap">
        {loading ? (
          info.map((items) => {
            const { username, userrole, userimage, id } = items;
            return (
              <>
                <div
                  className="w-80 shadow-lg border-4 text-center p-8 bg-white mb-10"
                  key={id}
                >
                  <img
                    src={`https://drive.google.com/thumbnail?id=${userimage}`}
                    alt="photo"
                    className="mx-auto mb-5 w-80 h-32"
                  />
                  <h6>{username}</h6>
                  <h5 className="font-normal text-md mt-3 border-4 p-2">
                    {userrole}
                  </h5>
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

export default About;

// @import url('https://fonts.googleapis.com/css2?family=Monoton&display=swap');
