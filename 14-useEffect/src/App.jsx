import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function ValueOfNumModified() {
  console.log("ValueOfNumModified");
}
function FetchUsersData() {
  console.log("FetchUsersData");
}

function App() {
  const [num, setnum] = useState(0);
  const [user, setuser] = useState(["1", "2", "3"]);

  ValueOfNumModified();
  // FetchUsersData();

  useEffect(() => {
    FetchUsersData();
  }, [user]);

  return (
    <div>
      NUM is {num} <br></br>
      <button
        onClick={() => {
          setnum(num + 1);
        }}
      >
        UPDATE NUM
      </button>
      <br />
      USER IS {user} <br />
      <button
        onClick={() => {
          setuser(["1", "2"]);
        }}
      >
        UPDATE USER
      </button>
    </div>
  );
}

export default App;
