import { useState } from "react";

function Education(props) {
	const [school, setSchool] = useState("");
	const [degree, setDegree] = useState("");

	const handleSchoolChange = (e) => {
		setSchool(e.target.value);
	};

	const handleDegreeChange = (e) => {
		setDegree(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		props.onSchoolChange(school);
		props.onDegreeChange(degree);
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
				<button type="submit" onClick={handleSubmit}>
					Submit
				</button>
			</form>
		</div>
	);
}

export default Education;
