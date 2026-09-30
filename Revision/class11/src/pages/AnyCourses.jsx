import React from "react";
import { useParams } from "react-router-dom";

const AnyCourses = () => {
    const param = useParams()
    console.log(param.id)
  return (
    <div>
      <h1 className="text-5xl whitespace-nowrap underline font-bold fixed   left-[50vw] -translate-x-1/2">
       
        Courses Page {param.id}
      </h1>
    </div>
  );
};

export default AnyCourses;
