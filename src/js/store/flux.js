const getState = ({ getStore, setStore, getActions }) => {
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
			// fillingContact: () => {
			// 	let nameValue = document.querySelector("#name").value;
			// 	let emailValue = document.querySelector("#email").value;
			// 	let addressValue = document.querySelector("#address").value;
			// 	let phoneValue = document.querySelector("#phone").value;

			// 	return {
			// 		full_name: nameValue,
			// 		email: emailValue,
			// 		agenda_slug: "cris_agenda",
			// 		address: addressValue,
			// 		phone: phoneValue
			// 	};
			// },
			deleteContact: () => {}
		}
	};
};

export default getState;
