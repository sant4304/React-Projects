import React, { useState } from "react";

const Navar = (props) => {
  const [newTheme, setnewTheme] = useState("");
  console.log(props)
  return (

    
    <div className="nav">
      <h1>Theme is {props.theme}</h1>

      <button
        onClick={() => {
          props.setTheme("dark");
        }}
      >
        Change Theme
      </button>

      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          console.log(newTheme)
          props.changeTheme(newTheme)
          setnewTheme("");
        }}
      >
        <input
          type="text"
          placeholder="Enter Theme"
          value={newTheme}
          onChange={(e) => {
            setnewTheme(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Navar;
