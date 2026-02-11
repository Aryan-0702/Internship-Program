import { useState } from "react";

export default function Counter(){

  const [count,setCount] = useState(0);

  const increase = () => setCount(count+1);
  const decrease = () => setCount(count-1);
  const reset = () => setCount(0);

  const limit = 10;

  return (
    <div className="card">

      <h1>Counter App</h1>

      <div className="count">{count}</div>

      <div className="btns">
        <button className="dec" onClick={decrease} disabled={count===0}>
          −
        </button>

        <button className="reset" onClick={reset}>
          Reset
        </button>

        <button className="inc" onClick={increase}>
          +
        </button>
      </div>

      {/* Conditional Rendering */}
      {count > limit && (
        <p className="warning">
          ⚠ Limit exceeded!
        </p>
      )}

    </div>
  );
}