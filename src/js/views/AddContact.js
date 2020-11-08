import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

export const AddContact = () => {
	const { store, actions } = useContext(Context);

	const fillingContact = () => {
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
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form
					onSubmit={event => {
						actions.addContact(fillingContact());
						event.preventDefault();
					}}>
					{console.log(store.contacts)}
					<div className="form-group">
						<label>Full Name</label>
						<input type="text" className="form-control" placeholder="Full Name" id="name" value={null} />
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							id="email"
							value={null}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							id="phone"
							value={null}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							id="address"
							value={null}
						/>
					</div>
					{/* <Link to="/"> */}
					<button type="submit" className="btn btn-primary form-control">
						Save
					</button>
					{/* </Link> */}
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
