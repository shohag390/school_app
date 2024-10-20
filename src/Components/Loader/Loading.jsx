import React from "react";
import GridLoader from "react-spinners/GridLoader";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-[90vh]">
      <GridLoader color="#ffa03a" size={16} />
    </div>
  );
};

export default Loading;
