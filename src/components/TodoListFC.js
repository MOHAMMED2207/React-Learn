// import React, { useState } from "react";
// import TodoForm from "../components/TodoForm";
// import Todo from "../components/Todo";
// import "./TodoStyle.css";

// function TodoList() {
//   // useState
//   const [todos, setTodo] = useState([]);
//   const [update, setUpdate] = useState("all");

//   const ADDtodo = (todo) => {
//     setTodo([todo, ...todos]);
//   };
//   const handeldelete = (id) => {
//     setTodo(todos.filter((items) => items.id !== id));
//   };

//   const updatedata = (X) => {
//     setUpdate(X);
//   };

//   const toggleComplete = (id) => {
//     setTodo(
//       todos.map((todo) => {
//         if (todo.id === id) {
//           return {
//             ...todo,
//             complete: !todo.complete,
//           };
//         } else {
//           return todo;
//         }
//       })
//     );
//   };
//   //update in state
//   // update todoToShow in state
//   if (update === "active") {
//     todos = todos.filter((todo) => todo.complete );
// } 
//   // else if (update === "complete") {
//   //   todos = todos.filter((todo) => todo.complete);
//   // }

//   return (
//     // ==3== ALL btn / all / active / complete
//     // and Remove all complete todos  //  Toggle all complete :
//     <div className="container">
//       <TodoForm onSubmit={ADDtodo} />
//       {todos.map((todo) => (
//         <Todo
//           key={todo.id}
//           todo={todo}
//           onDelete={() => handeldelete(todo.id)}
//           toggleComplete={() => toggleComplete(todo.id)}
//         />
//       ))}

//       <div>
//         <button className="update-btn btn" onClick={() => updatedata("all")}>
//           all
//         </button>
//         <button
//           className="update-btn btn"
//           onClick={() => updatedata("active")}
//         >
//           active
//         </button>
//         <button
//           className="update-btn btn"
//           onClick={() => updatedata("complete")}
//         >
//           complete
//         </button>
//       </div>

//       <button className="all-btn btn">Remove all complete todos</button>
//       <button className="all-btn btn">Toggle all complete :</button>
//     </div>
//   );
// }
// export default TodoList;
