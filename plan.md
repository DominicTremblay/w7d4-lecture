# Data Fetching & Other Side Effects

## Content ð

- Pure functions
- Side effects
- `useEffect` hook
- Rules of hooks
- Examples of the useEffect

## Pure Functions ð¡ï¸

Functions that does not modify the state of our app, and avoid producing any side-effects.

- The function only depends on its input parameters to return a value
- Given the same input, the function returns the same output
- It doesn't produce changes beyond its scope (side-effect)

### Side-Effects ð

A secondary effect (an interaction with the outside of the function) when running a function:

  - Setting timers or intervals
  - Modifying DOM elements not controlled by React
  - A network request
  - Connection to a socket server
  - Adding and removing event listeners
  - Logging to the console

Examples of side-effectsðï¸âð¨ï¸

```js
// push modifies the original array 
const addTodo = todo => todos.push(todo);

// Network Request
const getTweets = () => fetch('/tweets/).then(res => res.json())

// Modifying a Dom element directly
const reset = (element) => element.value = '';
```

- ð¦¹ââï¸ Side-Effects are generally undesirable because they can introduce a **lot of bugs** ð

> In React, they can disrupt the normal component rendering ð

## The useEffect Hook ð¦¸

To better handle side-effects, React encapsulates them in a `useEffect` Hook.

ð¥ It's important to understand **when** the `useEffect` happens 

Let's look at the hooks lifecycle ð

- [React Hooks Lifecycle](./hook_lifecycle.png)

`useEffect` has 3 potential actionsâ¤µï¸

  1. adding a side effect â
  2. reinvoking the side effect (or not) ð
  3. cleaning up the side effect â»ï¸


### useEffect Syntax

ð¨ Recap of The Rules of Hooks 


1ï¸â£ Don't call Hooks inside loops, conditions, or nested functions.

2ï¸â£ Only call Hooks from the top-level of a function component or a custom Hook.

3ï¸â£ The effect method that we pass to useEffect must either return `undefined` or a `function`. The easiest way to avoid issues with this rule is always to declare your effect as a `multiline` function.

The syntax of the `useEffect` is the following:


```js
useEffect(() => {
  // execute side effect here
  return () => {
    // clean up any side effect that was added (ex. removing event listeners)
  };
}, [] // dependency array);
```

1. The useEffect takes a callback function that will execute the side effect

2. It returns optionally a `clean up` function

  - The clean up function will remove any side effects that were added
  - For example, adding event listeners in the useEffect might create a memory leak
  - The clean up function allows to removes the event listener

3. The second argument to the useEffect function is a dependency array

  - [], empty array => no dependency, the useEffect will run only once and will not be re-invoked
  - [value1, value2,...] => the array has one or more dependant variable. When the variable changes value, the useEffect is re-invoked
  - no dependency array provided => the useEffect is re-invoked after each render

  - by default react invokes the effect _after the render_ 

Examples:

 ðï¸âð¨ï¸ [useEffect Intro Example](https://codesandbox.io/s/react-useeffect-intro-y8m93)
 ðï¸âð¨ï¸ [useEffect - Tweeter Character Count](https://codesandbox.io/s/useeffect-tweeter-character-count-uj3n3)
 ðï¸âð¨ï¸ [useEffect Usernames/count Example](https://codesandbox.io/s/nervous-hamilton-3ddlu)
 ðï¸âð¨ï¸ [removing eventListener](https://codesandbox.io/s/handle-resize-ytggf)

#### Fetching Data ðâð¦º

A typical use of a useEffect hook is to get the data from an API.

ðï¸âð¨ï¸ [useEffect API Request](https://codesandbox.io/s/useeffect-api-request-xbmwg)
