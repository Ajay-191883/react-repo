import React, { useState } from "react";

function App() {
  const [num, setnum] = useState(10);

  const [user, setuser] = useState({ name: "Ajay", age: 10 });

  const [arr, setarr] = useState([1, 2, 3]);

  function updateValues() {
    // console.log(num);

    // Batch operation
    // setnum(num + 1);
    // setnum(num + 1);
    // setnum(num + 1); // 13 NOT WORKING AS EXPECTED GETTING 11

    setnum((prev) => prev + 1);
    setnum((prev) => prev + 1);
    setnum((prev) => prev + 1);

    // setuser({ name: "Ajay", age: 30 });
    // console.log(num);

    // let obj1 = { a: 1, b: 2 };

    // // let obj2 = obj1; // FAKE DUPLICATE (SAME MEMORY ADDRESS)

    // // Destructuring Objects {...obj} Arrays [...arr] - FOR ACTUAL DUPLICATE
    // let obj2 = { ...obj1 };

    // obj2.a = 10;

    // console.log(obj1, obj2);

    // const userNew = { ...user };
    // userNew.age = 100;
    // setuser(userNew);

    setuser((prev) => ({ ...prev, age: 15, name: "Nandini", email: "jhgjh" }));

    // console.log(user, userNew);

    let arrNew = [...arr];
    arrNew.push(4);
    setarr(arrNew);

    console.log(arr, arrNew);
  }

  return (
    <div>
      NUM IS = {num} <br />
      USER IS = {user.name}, {user.age}, {user.email}
      <br />
      ARRAY IS = {arr}
      <br />
      <button onClick={updateValues}>CLICK TO UPDATE VALUES</button>
    </div>
  );
}

export default App;
