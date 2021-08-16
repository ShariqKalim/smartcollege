import React from "react";

const Loading = () => {
  return (
    <>
      <div className="h-screen w-screen grid place-items-center">
        <div>
          <img
            src="images/loading.gif"
            alt="loading"
            className="-mt-40 -ml-6"
          />
        </div>
      </div>
    </>
  );
};

export default Loading;
