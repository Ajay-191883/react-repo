import React from "react";

function Counter() {
  let counterNumber = 0;
  return (
    <div>
      <div className="container">{counterNumber}</div>
      <button>Increase</button>
      <button>Decrease</button>
    </div>
  );
}

export default Counter;
