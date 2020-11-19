// import React, { Component } from 'react'

// class Input extends Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     return (
//       <div>
//         <label>Input Task: </label>
//         <input type="text" name="task" />
//         <button>Add</button>
//       </div>
//     )
//   }
// }

// export default Input

import React from "react";

const Input = (props) => {
  return (
    <div>
      <label>Input Task: </label>
      <input
        onChange={props.handleChange}
        value={props.value}
        type="text"
        name="task"
      />
      <button onClick={props.addTask}>Add</button>
    </div>
  );
};

export default Input;
