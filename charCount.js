import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const NewTweet = ({ tweetSubmit }) => {
	const MAX_COUNT = 140;
	const [ text, setText ] = useState('');
	const [ counter, setCounter ] = useState(MAX_COUNT);
	const [ errorMsg, setErrorMsg ] = useState('');

	// Add an effect -> display the character's left in the document title
	// what's the effect of the different values of the dependency array

	useEffect(
		() => {
			document.title = `${counter} characters left`;
		},
		[ counter ]
	);

	const validateTweet = (content) => {
		if (content.length <= 0) {
			console.log('<0');
			setErrorMsg('Please write a tweet before submitting.');
			return false;
		}

		if (content.length > MAX_COUNT) {
			setErrorMsg('Please write a tweet less than 140 characters.');
			return false;
		}
		return true;
	};

	const handleTweet = (event) => {
		console.log('handleTweet');
		event.preventDefault();
		if (validateTweet(text)) {
			tweetSubmit(text);
			setText('');
			setCounter(MAX_COUNT);
		}
	};

	return (
		<section className='new-tweet'>
			<header>
				<div id='error-container'>
					<h4>{errorMsg}</h4>
				</div>
			</header>

			<form method='POST' action='/tweets' onSubmit={handleTweet}>
				<textarea
					name='text'
					placeholder='What are you humming about?'
					value={text}
					onChange={(event) => setText(event.target.value)}
					onKeyUp={(event) => setCounter(MAX_COUNT - text.length)}
				/>
				<footer>
					<input className='btn-new-tweet' type='submit' value='Tweet' />
					<span className='counter' style={text.length > MAX_COUNT ? { color: 'red' } : null}>
						{counter}
					</span>
				</footer>
			</form>
		</section>
	);
};
const rootElement = document.getElementById('root');
ReactDOM.render(<NewTweet />, rootElement);
