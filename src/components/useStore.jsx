import create from "zustand";

const useStore = create(set => ({
	people: ["Flo", "Carlo", "Bea", "Claudio", "Uwe"],
	addPerson: person => set(state => ({ people: [...state.people, person] })),
	removeAllPeople: () => set({ people: [] }),
	filterPeople: () =>
		set(state => ({ people: state.people.filter(person => person.length === 3) })),

	//nochmal drüber schauen
	toggleDarkMode: () => set(state => ({ darkMode: !state.darkMode })),
	//nochmal drüber schauen
}));

export default useStore;
