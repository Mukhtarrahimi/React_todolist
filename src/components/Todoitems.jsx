import React from "react";
import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import delete_icon from "../assets/delete.png";

const Todoitems = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4 cursor-pointer">
        <img src={tick} className="w-8" alt="" />
        <p>learn coding</p>
      </div>
      <img src={delete_icon} className="w-4 cursor-pointer" alt="" />
    </div>
  );
};

export default Todoitems;
