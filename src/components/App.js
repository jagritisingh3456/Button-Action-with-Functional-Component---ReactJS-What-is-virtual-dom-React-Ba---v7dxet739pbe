import React, {Component, useState} from "react";
import "./../styles/App.css";

// function App() {
//   return (
//     <div id="main">
//     <p id="para"> Hello, I've learnt to use the full-stack evaluation
//      tool. This makes me so happy</p>
//         <button onClick={para}>Click</button>
//     </div>
//   );
// }



function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("The new counter value is ", counter);
  }, [counter]);

  return (
    <div>
      <h1>Counter</h1>
      <p>current value: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Click</button>
    </div>
  );
}

export default App;
