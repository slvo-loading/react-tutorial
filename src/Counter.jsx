import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);

  function increment() {
    setCount(count + incrementBy);
  }

  function decrement() {
    setCount(count - incrementBy);
  }

  function increaseIncrement() {
    setIncrementBy(incrementBy + 1);
  }

  function decreaseIncrement() {
    setIncrementBy(incrementBy - 1);
  }

  return (
    <div>
      <h1>I &lt;{count} My Wife</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>

      <h1>we are incrementing the value by {incrementBy}</h1>
      <button onClick={increaseIncrement}>Increase</button>
      <button onClick={decreaseIncrement}>Decrease</button>
    </div>
  );
}
