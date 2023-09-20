import React from "react";

function ResumeSummary({ fullName, email, school, degree, company, position }) {
	return (
		<div className="summary">
			<h1>Resume</h1>
			<h2>Personal Information</h2>
			<p>Full Name: {fullName}</p>
			<p>Email: {email}</p>
			<h2>Education</h2>
			<p>School: {school}</p>
			<p>Degree: {degree}</p>
			<h2>Experience</h2>
			<p>Company: {company}</p>
			<p>Position: {position}</p>
		</div>
	);
}

export default ResumeSummary;
