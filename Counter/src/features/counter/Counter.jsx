import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementAmount, SetIncrementAmount] = useState(0);

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    SetIncrementAmount(0);
    dispatch(reset());
  };

  return (
    <section>
      <p>{count}</p>
      <div className="controller">
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>

      <input 
        type="text"
        value={incrementAmount}
        onChange={(e) => SetIncrementAmount(e.target.value)}
        />

        <div className="controller">
          <button onClick={()=> dispatch(incrementByAmount(addValue))}>Add Amount</button>
          <button onClick={resetAll}>reset</button>
        </div>
    </section>
  );
};

export default Counter;
