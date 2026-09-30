import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [allData, setallData] = useState([]);
  
  async function getData() {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=10",
    );
    console.log(response.data)
    setallData(response.data)
  }

  return (
    <div>
      <h1>Hello</h1>
      <button
        onClick={getData}
        className="bg-red-500 py-2 text-xs font-semibold px-4 mt-2 rounded px-8 text-amber-800 mx-2
      active:scale-95"
      >
        k
      </button>
      {allData.map(function (elem, idx) {
        return <h1 key={idx}>hii {elem.author}</h1>;
      })}
    </div>
  );
};

export default App;
