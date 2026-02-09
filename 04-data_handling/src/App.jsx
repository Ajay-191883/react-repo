export default function App() {
  // const username = "Test";
  // const userObj = { name: "Some", age: 45, obj1: { a: 1 } };
  const userArr = [
    {
      name: "Test",
      age: 10,
    },
    {
      name: "John",
      age: 30,
    },
    {
      name: "Mark",
      age: 20,
    },
  ];

  userArr.forEach((elm) => {
    if (elm.name == "Mark") {
      elm.name = "Smith";
    }
    console.log(elm.name);
  });

  const newArr = userArr.map((elm) => {
    // return elm.age;  // [10, 30, 20];
    // return elm; //[{name: "Test", age: 10,}, {name: "John",age: 30,},{name: "Mark",age: 20,}]
    // return elm.name; // ["Test", "John", "Smith"]

    return { name: elm.name, age: elm.age + 10 }; // [{name: "Test", age: 20,}, {name: "John",age: 40,},{name: "Mark",age: 30,}]
  });

  newArr.forEach((elm) => {
    console.log(elm.age);
  });

  // Map for returning new values
  // Foreach for modifying actual array

  return (
    <div className="parent">
      {userArr.map((item) => {
        return (
          <div className="userDetails">
            <h1>{item.name}</h1>
            <a>{item.age}</a>
          </div>
        );
      })}
    </div>
  );
}
