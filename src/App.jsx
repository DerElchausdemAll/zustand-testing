/////////////////////////////// Zustand Vol. 1	///////////////////////////////

// import React from "react";
// import create from "zustand";

// const useStore = create(set => ({
// 	bears: 0,
// 	increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
// 	removeAllBears: () => set({ bears: 0 }),
// }));

// const App = () => {
// 	const bears = useStore(state => state.bears);
// 	const increasePopulation = useStore(state => state.increasePopulation);
// 	const removeAllBears = useStore(state => state.removeAllBears);
// 	return (
// 		<div>
// 			<h1>{bears} around here ...</h1>
// 			<button onClick={increasePopulation}>one up</button>
// 			<button onClick={removeAllBears}>Delete all</button>
// 		</div>
// 	);
// };

// export default App;

/////////////////////////////// Zustand Vol. 2	///////////////////////////////
import React, { useEffect } from "react";
import People from "./components/People";
import Input from "./components/input";
import "./style.css";
import useStore from "./components/useStore";

const App = () => {
	const toggleDarkMode = useStore(state => state.toggleDarkMode);
	const darkMode = useStore(state => state.darkMode);

	useEffect(() => {
		if (darkMode) {
			document.querySelector("body").classList.add("dark");
		} else {
			document.querySelector("body").classList.remove("dark");
		}
	}, [darkMode]);

	return (
		<div>
			<button onClick={toggleDarkMode}>{!darkMode ? "Dark Mode" : "Normal Mode"}</button>
			<p>Our Team</p>
			<Input />
			<People />
		</div>
	);
};

export default App;
