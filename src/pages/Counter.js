import React from "react";

function Counter() {
  let [count, setCount] = React.useState(1);
  let increment = () => {
    if (count === 10) {
      alert("number can no longer be added");
      return false;
    }
    return setCount(count + 1);
  };
  let decrement = () => {
    if (count === 1) {
      alert("number can no longer be reduced");
      return false;
    }
    return setCount(count - 1);
  };
  return (
    <div className="container">
      <h1 className="text-2xl font-bold m-2">Counter Page</h1>
      <div className="main">
        <button onClick={decrement}>Dec</button>
        <div>{count}</div>
        <button onClick={increment}>Inc</button>
      </div>
    </div>
  );
}

export default Counter;
