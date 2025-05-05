"use client";

import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState<number>(0);
  return (
    <>
      <div>
        <button onClick={() => setCounter((prev) => prev + 1)}>
          Increment by 1
        </button>
      </div>
      <p>Counter value: {counter}</p>
      <div>
        <button onClick={() => setCounter((prev) => prev - 1)}>
          Decrement by 1
        </button>
      </div>
    </>
  );
};
