// What is a pure function ?

// is this a pure function ?
const add = (a, b) => a + b;

let total = 0;
// is this a pure function ?

const addTotal = (nb) => (total += nb);

// is this a pure function ?
const add = (a, b) => {
  console.log(`adding: ${a} to ${b}`);
  return a + b;
};

// is this a pure function ?
const addTodo = todo => todos.push(todo);

// is this a pure function ?
const getTweets = () => fetch('/tweets/').then(res => res.json())

// is this a pure function ?
const reset = (domElement) => domElement.value = '';