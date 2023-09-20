import { useState } from "react";

function Experience() {
	const [company, setCompany] = useState("");
	const [position, setPosition] = useState("");

	const handleCompanyChange = (e) => {
		setCompany(e.target.value);
	};

	const handlePositionChange = (e) => {
		setPosition(e.target.value);
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
			{company && position && (
				<div>
					<h2>Company: {company}</h2>
					<h2>Position: {position}</h2>
				</div>
			)}
		</div>
	);
}

export default Experience;
