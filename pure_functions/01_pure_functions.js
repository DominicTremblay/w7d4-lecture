// What is a pure function ?

// Is this a pure function? Yes!
const add = (a, b) => a + b;

add(3, 4); // 7
add(3, 4); // 7
add(3, 4); // 7

let total = 0;

// Is this a pure function?
const addTotal = (nb) => (total += nb);

addTotal(3); // => 3
addTotal(3); // => 6

// Is this a pure function? No
const addTodo = (todos) => todos.push('Walk the dog');

addTodo([]);

// Is this a pure function? no.
const add = (a, b) => {
  console.log(a + b); // <= side-effect
  return a + b;
};

// Is this a pure function? no
// network request is a side effect
const getTweets = () => fetch('/tweets').then(res => res.json)

// Is this a pure function? No
// changing the DOM structure is a side-effect
const reset = domElement => domElement.value ='';