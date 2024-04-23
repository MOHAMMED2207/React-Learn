// import { React, useState } from "react";

// function TodoForm(props) {
//   const [Text, setText] = useState("");

//   const handelsumbit = (e) => {
//     e.preventDefault();
//     const id = Date.now();

//     props.onSubmit({
//       id: id,
//       text: Text,
//       complete: false,
//     });

//     setText("");
//   };
//   return (
//     // ==1== btn add list and input text data
//     <form onSubmit={handelsumbit}>
//       <input
//         className="input-field"
//         onChange={(e) => setText(e.target.value)}
//         type="text"
//         value={Text}
//       />
//       <button onClick={handelsumbit} className="btn">
//         Add Todo
//       </button>
//     </form>
//   );
// }
// export default TodoForm;
