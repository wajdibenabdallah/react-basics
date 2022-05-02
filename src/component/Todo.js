import * as React from "react";
const Todo = () => {
  const [list, setList] = React.useState([]);
  const inputTask = React.useRef(null);
  return (
    <React.Fragment>
      <pre>Task 2 : TodoList</pre>
      <input type="text" ref={inputTask} />
      <button
        onClick={() => {
          inputTask.current.value &&
            setList([...list, inputTask.current.value]);
          inputTask.current.value = null;
        }}
      >
        Ajouter
      </button>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default Todo;
