import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

export const EditContact = () => {
	const { store, actions } = useContext(Context);
	let [fullName, setFullName] = useState(store.contacts[store.indexToEdit].full_name);
	let [email, setEmail] = useState(store.contacts[store.indexToEdit].email);
	let [address, setAddress] = useState(store.contacts[store.indexToEdit].address);
	let [phone, setPhone] = useState(store.contacts[store.indexToEdit].phone);

	const editingContact = () => {
		let nameValue = document.querySelector("#name").value;
		let emailValue = document.querySelector("#email").value;
		let addressValue = document.querySelector("#address").value;
		let phoneValue = document.querySelector("#phone").value;
		return {
			full_name: nameValue,
			email: emailValue,
			agenda_slug: "cris_agenda",
			address: addressValue,
			phone: phoneValue
		};
	};

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Edit the contact</h1>
				<form
					onSubmit={event => {
						actions.editContact(editingContact());
						console.log(editingContact());
						event.preventDefault();
					}}>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							id="name"
							value={fullName}
							onChange={event => setFullName(event.target.fullName)}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							id="email"
							value={email}
							onChange={event => setEmail(event.target.email)}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							id="phone"
							value={phone}
							onChange={event => setPhone(event.target.phone)}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							id="address"
							value={address}
							onChange={event => setAddress(event.target.address)}
						/>
					</div>
					<Link to="/">
						<button
							type="submit"
							className="btn btn-primary form-control"
							onClick={() => {
								actions.editContact(editingContact());
								event.preventDefault();
							}}>
							Save
						</button>
					</Link>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
