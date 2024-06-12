import React from "react";
import Todoitems from "./Todoitems";

const Todo = () => {
  return (
    <div className="bg-white place-self-center  w-11/12 max-w-md flex flex-col p-10 rounded-xl">
      {/*-------------- title  -------------*/}
      <div>
        <h1 className="text-center font-semibold text-blue-500 text-3xl font-Rubik">
          to-do list
        </h1>
        {/*----------------- input box  -----------*/}
        <div
          className="input bg-white border border-blue-400 flex gap-1 items-center justify-between w-full h-10 rounded-md p-1 mt-6 shadow-inner;

"
        >
          <input
            id="input"
            type="text"
            className="h-full ps-1 text-sm w-full border focus:border-blue-200 rounded outline-none bg-transparent"
            placeholder="Add your task"
          />
          <label
            htmlFor="input"
            className="bg-blue-400 cursor-pointer hover:bg-blue-500 duration-300 px-6 rounded-md h-full text-center text-white"
          >
            ADD
          </label>
        </div>
        {/*-----------------  input box list  -----------*/}
        <div className="mt-6 flex flex-col gap-4">
          <Todoitems />
        </div>
      </div>
    </div>
  );
};

export default Todo;
