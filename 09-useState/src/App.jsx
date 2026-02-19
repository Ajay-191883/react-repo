import React, { useState } from "react";
import Counter from "./components/Counter";

// let num = 10;

// function changeNum() {
//   num = 20;
//   console.log(num);
// }

// function App() {
//   return (
//     <div>
//       App - {num}
//       <button onClick={changeNum}>Change Num</button>
//     </div>
//   );
// }

function App() {
  const [num, setNum] = useState(10);
  const [user, setUser] = useState("Ajay");

  // const arr1 = [1,2,3]
  const [arr1, setarr1] = useState([1, 2, 3]);

  const [obj1, setObj] = useState({ a: 1, b: 2 });

  function changeAllVariables() {
    console.log(obj1);
    setNum(20);
    setUser("Nandini");
    setarr1([10, 20, 30]);
    setObj({ a: 10, b: 20 });

    console.log(num);
    console.log(user);
    console.log(arr1);

    // for (const element of obj1) {
    //   console.log(element);
    // }

    // setTimeout(() => {
    //   console.log(obj1);
    // });
  }

  return (
    <div>
      <Counter />
      Num = {num}
      User = {user}
      Arr = {arr1}
      Obj = {JSON.stringify(obj1)}
      <button onClick={changeAllVariables}>Change All Variables</button>
    </div>
  );
}

export default App;
