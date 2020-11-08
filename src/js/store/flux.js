const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contacts: []
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			getContacts: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/cris_agenda")
					.then(response => {
						if (!response.ok) {
							throw new Error(response.status);
						}
						return response.json();
					})
					.then(jsonContacts => {
						setStore({ contacts: jsonContacts });
					})
					.catch(error => {
						console.log("Error status: ", error);
					});
			},
			addContact: object => {
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					body: JSON.stringify(object)
				})
					.then(response => {
						if (!response.ok) {
							throw new Error(response.status);
						}
						return response.json();
					})
					.catch(error => {
						console.log("Error status: ", error);
					});
			},
			deleteContact: () => {}
		}
	};
};

export default getState;
