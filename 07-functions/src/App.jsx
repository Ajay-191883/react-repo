import React from "react";
import "./App.css";

const add1 = function (a, b) {
  let sum = a + b;
  // return sum;
  console.log("ADD1", sum);
};

function add() {
  add1();
}

function App() {
  return (
    <div id="abcd">
      App
      <button
        onClick={
          // function () {
          // console.log("CLICKED");
          // }
          add
        }
        onDoubleClick={() => {
          add1(5, 7);
        }}
        onMouseOver={() => {
          console.log("MOUSE OVER");
        }}
      >
        CLICK ME
      </button>
      <div
        className="container"
        onMouseEnter={(event) => {
          event.target.style.background = "red";
        }}
        onMouseLeave={(e) => {
          e.target.style.background = "pink";
        }}
      ></div>
      Search User:
      <input
        type="text"
        placeholder="Enter name"
        onClick={() => {
          console.log("INPUT CLICKED");
        }}
        onChange={(e) => {
          console.log("USER IS TYPING", e.target.value);
        }}
      />
    </div>
  );
}

export default App;
