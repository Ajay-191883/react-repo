import React from "react";

function App() {
  let var1 = 10; //initial state

  // useState - Managing states
  // useRef - Access DOM
  // useEffect - To perform Side effects (functionalities)

  // useContext - Made variables Global
  // useReducer - Kind of useState but can be customized

  // useCallback - caching (store&use) callback functions - means caching result of functions
  // useMemo - caching (store&use) values

  function increaseValue() {
    var1 = 15; // final state // issue
    console.log(var1);
  }

  console.log(var1);
  return (
    <div>
      App {var1}
      <button onClick={increaseValue}>Click</button>
    </div>
  );
}

export default App;
