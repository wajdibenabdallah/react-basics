import * as React from "react";
const Todo = () => {
  const [list, setList] = React.useState([]);
  const inputTask = React.useRef(null);

  const deleteTask = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

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
        {list.map((item, index) => (
          <React.Fragment key={index}>
            <li>{item}</li>
            <button onClick={() => deleteTask(index)}>X</button>
          </React.Fragment>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default Todo;
