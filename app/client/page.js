"use client";
import { useState } from "react";

const client = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-7xl font-bold mb-4">{count}</h1>
      <div className="flex justify-evenly w-80">
        <button className="btn btn-primary" onClick={() => setCount(count - 1)}>
          decrease
        </button>
        <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
          increase
        </button>
      </div>
    </div>
  );
};
export default client;
