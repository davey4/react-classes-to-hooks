// import React, { Component } from 'react'

// class Tasks extends Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     return (
//       <ul>
//         {this.props.tasks.map((task, index) => (
//           <li key={index}>{task}</li>
//         ))}
//       </ul>
//     )
//   }
// }

// export default Tasks

import React from "react";

const Tasks = (props) => {
  return (
    <ul>
      {props.tasks.map((element, i) => (
        <li key={i}>
          {element} <button onClick={() => props.removeTask(i)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default Tasks;
