import React from "react";

const Navar = (props) => {
  console.log(props.color)
  return (
    <div style={{backgroundColor:props.color}}  className="bg-pink-700 mb-1 flex item-center justify-between text-white px-8 py-3 ">
      <h2>{props.title}</h2>
      <div className="flex  gap-10 pr- 5">
       {props.links.map(function(ele,idx){
             return <h2 key={idx}>{ele}</h2>
       })}
      </div>
    </div>
  );
};

export default Navar;
