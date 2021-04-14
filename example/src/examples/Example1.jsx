import React, { useState, useEffect } from 'react';

const Example1 = (props) => {
 // Syntax of useEffect
  const [msg, setMsg] = useState("No message yet!");
  const [error, setError] = useState("No error yet!");

  // dependency [] will contains the dependencies (state, props values)
  // in the scope of the useEffect
  // When the dependency is changing, the useEffect is re-invoked
  // When there is no dependency [] => the useEffect is not re-invoked
  // no dependency array => any state change, the useEffect is reinvoked
  // useEffect can optionally return a clean-up function

  useEffect(() => {
    console.log(`The 1st useEffect is invoked - msg: ${msg}`);
    const timer = setTimeout(() => {
      setMsg("Hey Bob!");
    }, 3000);

    return () => clearTimeout(timer);
  }, [msg]);

  useEffect(() => {
    console.log(`The 2nd useEffect is invoked - error: ${error}`);
    const timer = setTimeout(() => {
      setError("Changed the error message");
    }, 3000);

    return () => clearTimeout(timer);
  }, [error]);

  return (
    <div className="App">
      <h1>useEffect Hook</h1>
      <h2>The useEffect executes after the rendering of the component</h2>
      <h3>Message</h3>

      <p style={{ color: "royalblue" }}>{msg}</p>

      <button onClick={(evt) => setMsg("Hey Mario")}>Change Msg</button>

      <p style={{ color: "indianred" }}>{error}</p>

      <button onClick={(evt) => setError("Nope!")}>Trigger Error</button>
    </div>
  );
};

export default Example1;
