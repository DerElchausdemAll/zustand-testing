import React from "react";

import useStore from "./useStore";

const People = () => {
	const people = useStore(state => state.people);
	const removeAllPeople = useStore(state => state.removeAllPeople);
	const filterPeople = useStore(state => state.filterPeople);

	return (
		<div>
			<p>We have {people.length} people in our Team</p>
			<ul>
				{people.map(p => (
					<li>{p}</li>
				))}
			</ul>
			<button onClick={filterPeople}>Filter People with 3 character</button>
			<br />
			<br />
			<button onClick={removeAllPeople}>Delete Team</button>
		</div>
	);
};

export default People;
