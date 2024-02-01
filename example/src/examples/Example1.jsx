import { useEffect, useState } from 'react';

const Example1 = (props) => {
  const [msg, setMsg] = useState('Hello, Mario!');
  const [errMsg, setErrMsg] = useState('');
  const [text, setText] = useState('');

  // when we don't have a dependancy array (2nd parameter)
  // the useEffect will be re-invoke after each render or re-render
  // empty array [] as the dependancy array, is not going to re-invoke the useEffect
  // [stateVariable] in the dependancy array => re-invoke the useEffect only when stateVariable changes

  const printMsg = (message) => console.log({ message });

  useEffect(() => {
    console.log('Invoking the useEffect');
    
    const timeout = setTimeout(() => {

      printMsg(msg);
    }, 3000)
    


    return () => clearTimeout(timeout)

  }, [msg]);



  useEffect(() => {
    if (errMsg) {
      printMsg(errMsg);
    }
  }, [errMsg]);

  console.log('Rendering the component...');

  return (
    <div className="App">
      <h1>useEffect Hook</h1>
      <h2>The useEffect executes after the rendering of the component</h2>
      <h3>Message</h3>

      <p style={{ color: 'royalblue' }}>{msg}</p>

      <button onClick={(event) => setMsg('Hello, Luigi!')}>Change Msg</button>

      <p style={{ color: 'darkred' }}>{errMsg || 'All Clear!'}</p>

      <button onClick={(event) => setErrMsg('Oh no! Mario is down!')}>
        Change Msg
      </button>

      <p style={{ color: 'purple' }}>{text || 'Bowser is coming!'}</p>

      <button onClick={(event) => setText('Go away Bowser!')}>
        Change Msg
      </button>
    </div>
  );
};

export default Example1;
