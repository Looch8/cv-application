import "./App.css";
import Personal from "./components/Personal";
// import React from "react";

// Section to add general information - name, edmail, phone number etc
// Section to add education (school name, title of study, date of study)
// Section to add practical experience (Company name, title of position, date of employment, description of duties)

// Include edit and submit button for each seciton to allow for editing and saving of information
// Submit button should submit form and display the value of input fields in HTML elements.
// Edit button should add back (display) the input fields, with the previous displayed information as values in the input fields.
// in the input fields, you should be able to edit and resubmit the content.
// Make heavy use of state and props

function App() {
	return (
		<>
			<h1>Resume</h1>
			<section className="forms">
				<Personal />
			</section>
		</>
	);
}

export default App;
