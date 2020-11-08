const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contacts: [],
			idToDelete: null
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
					body: JSON.stringify(object),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						if (!response.ok) {
							throw new Error(response.status);
						}
						return response.json();
					})
					.then(answerUpload => {
						getActions().getContacts();
						console.log("Success: ", JSON.stringify(answerUpload));
					})
					.catch(error => {
						console.log("Error status: ", error);
					});
			},
			deleteContact: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/" + getStore().idToDelete, {
					method: "DELETE"
				})
					.then(response => {
						if (!response.ok) {
							throw new Error(response.status);
						}
						return response.json();
					})
					.then(answerUpload => {
						getActions().getContacts();
						console.log(getStore().contacts);
						// console.log("Success: ", JSON.stringify(answerUpload));
					})
					.catch(error => {
						console.log("Error status: ", error);
					});
			}
		}
	};
};

export default getState;
