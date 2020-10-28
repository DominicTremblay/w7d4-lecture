import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

const Todo = (props) => {
	const [ todos, setTodos ] = useState([]);
	const [ text, setText ] = useState('');

	console.log(text);
	/*
  INSTRUCTIONS:
  Create a "todo" app with the following criteria.
    1. The user can add new todo items
    2. The user can remove todo items
*/

	const addTodo = (event) => {
		// create a new todo using text
		const newTodo = {
			id: Math.random().toString(36).substr(0, 4),
			task: text
		};
		// update our todos

		setTodos([ ...todos, newTodo ]);
		setText('');
	};

	const removeTodo = (id) => {
		const filteredTodos = todos.filter((todoObj) => todoObj.id !== id);
		setTodos(filteredTodos);
	};

	const todoList = todos.map(({ id, task }) => (
		<li key={id}>
			{task} <button onClick={() => removeTodo(id)}>x</button>
		</li>
	));

	return (
		<div>
			<h3>todos</h3>

			<ul>{todoList}</ul>

			<input
				type='text'
				name='todo'
				value={text}
				placeholder='Please add some todo'
				onChange={(event) => setText(event.target.value)}
			/>
			<input type='button' value='Add Todo' onClick={addTodo} />
		</div>
	);
};

const rootElement = document.getElementById('root');
ReactDOM.render(<Todo />, rootElement);
