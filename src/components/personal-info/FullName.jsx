import { useState } from "react";

function FullName() {
	const [name, setName] = useState("");
	const [displayedName, setDisplayedName] = useState("");

	const handleNameChange = (e) => {
		const newName = e.target.value;
		setName(newName);
		props.onNameChange(newName); // Call the update function passed in as a prop
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div>
			<h1>Personal Information</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={name}
					required
					onChange={handleNameChange}
				/>
				<button type="submit">Submit</button>
			</form>
			{displayedName && <h2>{displayedName}</h2>}
		</div>
	);
}

export default FullName;
