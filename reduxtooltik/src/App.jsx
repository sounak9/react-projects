import { useState } from "react";

import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>learn about redux toolkit</h2>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
