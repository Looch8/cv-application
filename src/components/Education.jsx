import { useState } from "react";

function Education() {
	const [school, setSchool] = useState("");
	const [degree, setDegree] = useState("");

	const handleSchoolChange = (e) => {
		setSchool(e.target.value);
	};

	const handleDegreeChange = (e) => {
		setDegree(e.target.value);
	};

	return (
		<div>
			<h1>Education</h1>
			<form>
				<input
					type="text"
					placeholder="School"
					value={school}
					onChange={handleSchoolChange}
				/>
				<input
					type="text"
					placeholder="Degree"
					value={degree}
					onChange={handleDegreeChange}
				/>
			</form>
			{school && degree && (
				<div>
					<h2>School: {school}</h2>
					<h2>Degree: {degree}</h2>
				</div>
			)}
		</div>
	);
}

export default Education;
