import React from "react";
import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import delete_icon from "../assets/delete.png";

const Todoitems = ({ text, id, isComplate, deleteTask , toggle}) => {
  return (
    <div className="flex items-center justify-between">
      <div onClick={() => toggle(id)} className="flex items-center gap-4 cursor-pointer">
        <img src={isComplate ? tick : not_tick} className="w-6" alt="" />
        <p className={`font-Rubik  decoration-gray-500 ${isComplate ? 'line-through text-gray-500': ''}`}>{text}</p>
      </div>
      <img
        src={delete_icon}
        onClick={() => deleteTask(id)}
        className="w-4 cursor-pointer"
        alt=""
      />
    </div>
  );
};

export default Todoitems;
