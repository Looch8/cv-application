import { useState } from "react";

function FullName() {
	const [name, setName] = useState("");
	const [displayedName, setDisplayedName] = useState("");

	const handleNameChange = (e) => {
		setName(e.target.value);
		setDisplayedName(e.target.value); // This is to display the name as it is being typed
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
