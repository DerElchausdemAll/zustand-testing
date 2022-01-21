import create from "zustand";

const useStore = create(set => ({
	people: ["Flo", "Carlo", "Bea", "Claudio", "Uwe"],
	addPerson: person => set(state => ({ people: [...state.people, person] })),
	removeAllPeople: () => set({ people: [] }),
	filterPeople: () =>
		set(state => ({ people: state.people.filter(person => person.length === 3) })),
	// filterPeople: () => set(state => ({ people: [...(state.people.length === 3)] })),
	// filterPeople: filter => set(state => ({ people: [...state.people, filter] })),
	darkMode: false,
	toggleDarkMode: () => set(state => ({ darkMode: !state.darkMode })),
}));

export default useStore;
