import { useState } from "react";

import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    // console.log("clicked", counter);
    counter = counter + 1;
    setCounter(counter);
  };
  const decreaseValue = () => {
    // console.log("clicked", counter);
    counter = counter - 1;
    setCounter(counter);
  };

  return (
    <>
      <h1>test counter</h1>
      <h2>counter value : {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={decreaseValue}>decrease value</button>
    </>
  );
}

export default App;
