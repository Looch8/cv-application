import { useState } from "react";

function Email(props) {
	const [email, setEmail] = useState("");
	const [displayedEmail, setDisplayedEmail] = useState("");

	const handleEmailChange = (e) => {
		const newEmail = e.target.value;
		setEmail(newEmail);
		setDisplayedEmail(newEmail);
		props.onEmailChange(newEmail);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div>
			<h1>Email</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={email}
					required
					onChange={handleEmailChange}
				/>
				<button type="submit">Submit</button>
			</form>
			{displayedEmail && <h2>{displayedEmail}</h2>}
		</div>
	);
}

export default Email;
