// import React, { Component } from "react";
// import Tasks from "./Tasks";
// import Input from "./Input";
//
// class Todolist extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       tasks: []
//     }
//   }

//   render() {
//     return (
//       <div className="list">
//         <Input />
//         <Tasks tasks={this.state.tasks} />
//       </div>
//     )
//   }
// }

// export default Todolist

import React, { useEffect, useState } from "react";
import Tasks from "./Tasks";
import Input from "./Input";

const Todolist = () => {
  const [tasks, manageTasks] = useState([
    "Wow Much Do",
    "Much Do Wow",
    "Walk the doge",
    "Pet the doge",
  ]);
  const [task, manageTask] = useState("");

  const addTask = () => {
    if (task) {
      let myNewList = [...tasks, task];
      manageTasks(myNewList);
      manageTask("");
      console.log(tasks);
    }
  };

  const handleChange = (e) => {
    manageTask(e.target.value);
  };

  const removeTask = (i) => {
    const tasksArr = [...tasks];
    tasksArr.splice(i, 1);
    // console.log(tasksArr);
    manageTasks(tasksArr);
  };

  return (
    <div className="list">
      <Input handleChange={handleChange} value={task} addTask={addTask} />
      <Tasks tasks={tasks || []} removeTask={removeTask} />
    </div>
  );
};

export default Todolist;
