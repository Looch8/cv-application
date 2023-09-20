import { useState } from "react";
import "./App.css";
import FullName from "./components/personal-info/FullName";
import Email from "./components/personal-info/Email";
import Education from "./components/Education";
import Experience from "./components/Experience";
import ResumeSummary from "./components/ResumeSummary";
// import React from "react";

function App() {
	const [resumeData, setResumeData] = useState({
		fullName: "",
		email: "",
		school: "",
		degree: "",
		company: "",
		position: "",
	});

	//Functions to update resume data
	const updateFullName = (name) => {
		setResumeData((prevData) => ({ ...prevData, fullName: name }));
	};

	const updateEmail = (email) => {
		setResumeData((prevData) => ({ ...prevData, email: email }));
	};

	const updateSchool = (school) => {
		setResumeData((prevData) => ({ ...prevData, school: school }));
	};

	const updateDegree = (degree) => {
		setResumeData((prevData) => ({ ...prevData, degree: degree }));
	};

	const updateCompany = (company) => {
		setResumeData((prevData) => ({ ...prevData, company: company }));
	};

	const updatePosition = (position) => {
		setResumeData((prevData) => ({ ...prevData, position: position }));
	};
	return (
		<>
			<h1>Resume</h1>
			<section className="forms">
				<FullName onNameChange={updateFullName} />
				<Email onEmailChange={updateEmail} />
				<Education
					onSchoolChange={updateSchool}
					onDegreeChange={updateDegree}
				/>
				<Experience
					onCompanyChange={updateCompany}
					onPositionChange={updatePosition}
				/>
			</section>
			<ResumeSummary {...resumeData} />
		</>
	);
}

export default App;
