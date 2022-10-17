import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  return (
    <div id="main">
    <p id="para"> Hello, I've learnt to use the full-stack evaluation
     tool. This makes me so happy</p>
        <button onClick={para}>Click</button>
    </div>
  );
}
export default App;


// import React, { Component } from 'react';

// class App extends Component {
//   constructor() {
//     super();
//     this.createText = this.createText.bind(this);
//   }


//   createText() {
//     return(
//       <p>hello friend</p>
//     )
//   }


//   render() {
//     return (
//       <div className="App">
//         <button onClick={this.createText}>Click</button>
//       </div>
//     );
//   }
// }

// export default App;