import { useEffect, useState } from 'react';

const Example1 = (props) => {
  const [msg, setMsg] = useState('Hello! Mario.');
  const [errMsg, setErrMsg] = useState('');
  const [text, setText] = useState('Bowser is coming!');

  const printMsg = (message) => console.log({ message });

  useEffect(() => {
    console.log('-'.repeat(20));
    console.log('Invoking useEffect');

    console.log(
      'Without any dependency, useEffect is triggered after each render'
    );
    printMsg(msg);
    console.log('-'.repeat(20));
  }, [msg]);

  useEffect(() => {
    if (errMsg) {
      printMsg(errMsg);
    }

    const timeOut = setTimeout(() => {
      setErrMsg('');
    }, 5000);

    return () => clearTimeout(timeOut);
  }, [errMsg]);

  console.log('The useEffect comes after the render...');
  console.log('Rendering the component...');

  return (
    <div className="App">
      <h1>useEffect Hook</h1>
      <h2>The useEffect executes after the rendering of the component</h2>
      <h3>Message</h3>

      <p style={{ color: 'royalblue' }}>{msg}</p>

      <button onClick={() => setMsg('Hello Luigi')}>Change Msg</button>

      <p style={{ color: 'red' }}>{errMsg || 'All Clear!'}</p>

      <button onClick={() => setErrMsg('Oh no! Mario is down')}>
        Change Msg
      </button>

      <p style={{ color: 'purple' }}>{text}</p>

      <button onClick={() => setText('Bowser, go away!')}>Change Text</button>
    </div>
  );
};

export default Example1;
