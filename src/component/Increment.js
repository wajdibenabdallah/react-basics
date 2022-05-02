import * as React from "react";
const Task1 = () => {
  const [counter, setCounter] = React.useState(0);
  const Increment = (e) => {
    setCounter(counter + 1);
  };
  return (
    <React.Fragment>
      <pre>Incrémenter</pre>
      <button onClick={Increment}>Incrémenter</button>
      {counter}
    </React.Fragment>
  );
};

export default Task1;
