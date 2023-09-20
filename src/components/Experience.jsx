import { useState } from "react";

function Experience(props) {
	const [company, setCompany] = useState("");
	const [position, setPosition] = useState("");

	const handleCompanyChange = (e) => {
		setCompany(e.target.value);
	};

	const handlePositionChange = (e) => {
		setPosition(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		props.onCompanyChange(company);
		props.onPositionChange(position);
	};

	return (
		<div>
			<h1>Experience</h1>
			<form>
				<input
					type="text"
					placeholder="Company"
					value={company}
					onChange={handleCompanyChange}
				/>
				<input
					type="text"
					placeholder="Position"
					value={position}
					onChange={handlePositionChange}
				/>
			</form>
			<button type="submit" onClick={handleSubmit}>
				Submit
			</button>
		</div>
	);
}

export default Experience;
