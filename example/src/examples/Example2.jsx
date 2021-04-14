import React, { useState, useEffect } from 'react';
import './example2.css';

// 1. Create a controlled Input on the textarea
// 2. Add a state for text, errorMsg, counter
// 3. Update the counter as we type with onKeyUp
// 4. Change the styling if over the limit
// 5. Handling the submssion of the form
// 5.1 Validate the tweet and display an errorMsg accordingly
// 6. Create a side effect. Display the remaining characters in the title of the document

const Example2 = ({ tweetSubmit }) => {
  const MAX_COUNT = 10;
  const [text, setText] = useState('');
  const [msg, setMsg] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [counter, setCounter] = useState(MAX_COUNT);

  // Add an effect -> display the character's left in the document title
  // what's the effect of the different values of the dependency array

  useEffect(() => {
    document.title = `${counter} characters remaining`;
  }, [counter]);

  useEffect(() => {
    if (errMsg) {
      document.title = `${errMsg}`;
    }
  }, [errMsg]);

  const validateTweet = (content) => {
    const errors = {
      overLimit: 'Please write less than 140 chars!',
      empty: 'Please provide a tweet!',
    };

    const error =
      (content.length > MAX_COUNT && 'overLimit') ||
      (content === '' && 'empty');

    return errors[error];
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const error = validateTweet(text);
    if (!error) {
      setMsg('Tweet Submitted!');
      setErrMsg('');
      setText('');
    } else {
      setErrMsg(error);
      setMsg('');
    }
  };

  const handleKeyUp = (event) => {
    setCounter(MAX_COUNT - text.length);
  };

  return (
    <section className="new-tweet">
      <header>
        <div id="error-container">
          {errMsg && <h4>{errMsg}</h4>}
          {msg && <h4>{msg}</h4>}
        </div>
      </header>

      <form onSubmit={handleSubmit}>
        <textarea
          name="text"
          placeholder="What are you humming about?"
          value={text}
          onChange={(evt) => setText(evt.target.value)}
          onKeyUp={handleKeyUp}
        />
        <footer>
          <input className="btn-new-tweet" type="submit" value="Tweet" />
          <span
            className="counter"
            style={counter < 0 ? { color: 'red' } : { color: 'black' }}
          >
            {counter}
          </span>
        </footer>
      </form>
    </section>
  );
};

export default Example2;
