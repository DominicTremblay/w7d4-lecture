import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './styles.css';

// We want to list the contributors to the tweeter repo
// We need to issue a request to the following url
// https://api.github.com/repos/lighthouse-labs/tweeter/contributors

function App() {
	const [ contributors, setContributors ] = useState([]);
	const [ loading, setLoading ] = useState(true);
	const [ error, setError ] = useState(null);

	useEffect(() => {
		setLoading(true);
		axios
			.get('https://api.github.com/repos/lighthouse-labs/tweeter/contributors')
			.then((result) => {
				setContributors(result.data);
				setLoading(false);
			})
			.catch((err) => {
				setLoading(false);
				setError('Error loading data');
				console.log(err);
			});
	}, []);

	const contributorsList = contributors.map((contrib) => (
		<li key={contrib.login}>
			<img src={contrib.avatar_url} alt={contrib.login} /> {contrib.login}
		</li>
	));

	return (
		<div className='App'>
			<h1>Contributors to the repo</h1>
			<ul>{loading ? <li>Loading...</li> : contributorsList}</ul>
		</div>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
