import React from "react";
import "../../App.scss";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click {count} times{" "}
      </button>
    </div>
  );
}
