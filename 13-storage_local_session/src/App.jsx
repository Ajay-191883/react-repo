import React, { useState, useEffect } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [userData, setuserData] = useState({
    name: "Test",
    class: 10,
    age: 20
  });

  useEffect(() => {
    async function fetchUserName() {
      setUsername(localStorage.getItem("name"));

      const convertedUserData = JSON.stringify(userData);

      console.log(convertedUserData);

      localStorage.setItem("userData", convertedUserData);
    }

    //JSON.stringify Object into string
    //JSON.parse string into object

    fetchUserName();
  }, []); // runs only once after first render

  // localstorage have 4 methods
  // getItem, setItem, removeItem, clear (localstorage.setItem())

  const login = () => {
    localStorage.setItem("name", "Ajay");

    setUsername(localStorage.getItem("name"));

    sessionStorage.setItem("TEMPO", "KHJFKSHDFJFHJKHJKSH");
  };

  const logout = () => {
    localStorage.removeItem("name");

    setUsername("");
  };

  const clearLocalstorage = () => {
    localStorage.clear();

    setUsername("");
  };

  function useUserdata() {
    const parsedUserData = JSON.parse(localStorage.getItem("userData"));

    setuserData(parsedUserData);
  }

  return (
    <div>
      USER LOGGED IN -- <br></br>
      NAME -- {userData.name}
      <br></br>
      CLASS -- {userData.class}
      <br></br>
      AGE -- {userData.age}
      <br></br>
      {username}
      <button onClick={login}>LOGIN</button>
      <button onClick={logout}>LOGOUT</button>
      <button onClick={clearLocalstorage}>CLEAR</button>
      <button onClick={useUserdata}>USE USERDATA</button>
    </div>
  );
}

export default App;
