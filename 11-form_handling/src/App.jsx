import React from "react";
import { useState } from "react";

function App() {
  // useState;

  const [name, setName] = useState("Nandini");
  // name variable with initial value = ""

  function submitForm(e) {
    e.preventDefault(); // THIS WILL STOP ANY DEFAULT BEHAVIOUR OF EVENT

    console.log("Form is submitted", name);
  }

  function typingInput(e) {
    console.log("TYPING...", e.target.value);
    setName(e.target.value);
  }

  return (
    <div>
      <form
        // onSubmit={(e) => {
        //   submitForm(e);
        // }}
        onSubmit={(e) => {
          submitForm(e);
        }}
      >
        <input
          type="text"
          placeholder="ENter value"
          onChange={(e) => {
            typingInput(e);
          }}
          value={name}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
