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
  // Add an effect -> display the character's left in the document title
  // what's the effect of the different values of the dependency array

  return (
    <section className="new-tweet">
      <header>
        <div id="error-container">
          <h4>''</h4>
        </div>
      </header>

      <form>
        <textarea name="text" placeholder="What are you humming about?" />
        <footer>
          <input className="btn-new-tweet" type="submit" value="Tweet" />
          <span className="counter"></span>
        </footer>
      </form>
    </section>
  );
};

export default Example2;
