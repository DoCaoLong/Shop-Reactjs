const localStore = {
	local() {
		return fetch(`/LocalStore.json`).then((res) => res.json());
	},
};
export default localStore;
