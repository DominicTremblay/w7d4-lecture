import React, { useState, useEffect } from 'react';
import './example2.css';

// 1. Create a controlled Input on the textarea
// 2. Add a state for text, errorMsg, counter
// 3. Update the counter as we type with onKeyUp
// 4. Change the styling if over the limit
// 5. Handling the submssion of the form
// 5.1 Validate the tweet and display an errorMsg accordingly
// 6. Create a side effect. Display the remaining characters in the title of the document

const Example2 = () => {
  const MAX_COUNT = 10;

  const [text, setText] = useState('');
  const [counter, setCounter] = useState(MAX_COUNT);
  const [err, setErr] = useState('');

  // Add an effect -> display the character's left in the document title
  // what's the effect of the different values of the dependency array

  const validateTweet = (tweet) => {
    if (tweet.length < 1) {
      setErr('Please, enter a tweet');
    } else if (tweet.length > MAX_COUNT) {
      setErr(`Please, enter less than ${MAX_COUNT} characters`);
    } else {
      setErr('');
    }
  };

  useEffect(() => {
    setCounter(MAX_COUNT - text.length);
    validateTweet(text);
  }, [text]);

  const handleSubmit = (event) => {
    event.preventDefault();
    validateTweet(text);
    if (!err) {
      console.log('submitting tweet');
    } else {
      console.log(err);
    }
  };

  return (
    <section className="new-tweet">
      <header>
        <div id="error-container">
          <h4>{err}</h4>
        </div>
      </header>

      <form onSubmit={handleSubmit}>
        <textarea
          name="text"
          placeholder="What are you humming about?"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <footer>
          <input className="btn-new-tweet" type="submit" value="Tweet" />
          <span className="counter" style={{ color: err ? 'red' : 'black' }}>
            {counter}
          </span>
        </footer>
      </form>
    </section>
  );
};

export default Example2;
