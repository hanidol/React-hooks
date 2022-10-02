//import React, { useState } from "react";
import Rate from "./Rate";

const Filter = (props) => {
  const handleChange = (e) => {
    console.log(e.target.value);
    props.setText(e.target.value);
  };

  return (
    <form>
      <div className="search-btn">
        <input
          className="inputText"
          placeholder="Enter Movie Name "
          type="text"
          value={props.text}
          onChange={handleChange}
        />
        <button>
          <i class="fas fa-search"></i>
        </button>
        <div className="rating">
          <Rate rating={props.rating} setRating={props.setRating} />
        </div>
      </div>
    </form>
  );
};
export default Filter;
