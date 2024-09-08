document.getElementById("resume-form")?.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting

  // Collect values from the form
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const location = (document.getElementById("location") as HTMLInputElement).value;
  const degree = (document.getElementById("degree") as HTMLInputElement).value;
  const school = (document.getElementById("school") as HTMLInputElement).value;
  const educationDescription = (document.getElementById("education-description") as HTMLTextAreaElement).value;
  const skill1 = (document.getElementById("skill1") as HTMLInputElement).value;
  const workDescription = (document.getElementById("work-description1") as HTMLTextAreaElement).value;

  // Generate editable resume
  (document.getElementById("generated-resume") as HTMLElement).innerHTML = `
    <h2>Generated Resume</h2>
    <form id="edit-resume-form">
      <div>
        <label for="edit-name">Name:</label>
        <input type="text" id="edit-name" value="${name}">
      </div>
      <div>
        <label for="edit-email">Email:</label>
        <input type="email" id="edit-email" value="${email}">
      </div>
      <div>
        <label for="edit-phone">Phone:</label>
        <input type="tel" id="edit-phone" value="${phone}">
      </div>
      <div>
        <label for="edit-location">Location:</label>
        <input type="text" id="edit-location" value="${location}">
      </div>
      <div>
        <label for="edit-degree">Degree:</label>
        <input type="text" id="edit-degree" value="${degree}">
      </div>
      <div>
        <label for="edit-school">School/University:</label>
        <input type="text" id="edit-school" value="${school}">
      </div>
      <div>
        <label for="edit-education-description">Education Description:</label>
        <textarea id="edit-education-description" rows="4">${educationDescription}</textarea>
      </div>
      <div>
        <label for="edit-skill1">Skills:</label>
        <input type="text" id="edit-skill1" value="${skill1}">
      </div>
      <div>
        <label for="edit-work-description">Work Experience:</label>
        <textarea id="edit-work-description" rows="4">${workDescription}</textarea>
      </div>
      <button type="submit">Update Resume</button>
    </form>
  `;

  // Show the generated resume
  (document.getElementById("generated-resume") as HTMLElement).style.display = "block";

  // Reset the form to clear the inputs
  (document.getElementById("resume-form") as HTMLFormElement).reset();

  // Update the resume with new values after editing
  document.getElementById("edit-resume-form")?.addEventListener("submit", function (event) {
    event.preventDefault();

    const updatedName = (document.getElementById("edit-name") as HTMLInputElement).value;
    const updatedEmail = (document.getElementById("edit-email") as HTMLInputElement).value;
    const updatedPhone = (document.getElementById("edit-phone") as HTMLInputElement).value;
    const updatedLocation = (document.getElementById("edit-location") as HTMLInputElement).value;
    const updatedDegree = (document.getElementById("edit-degree") as HTMLInputElement).value;
    const updatedSchool = (document.getElementById("edit-school") as HTMLInputElement).value;
    const updatedEducationDescription = (document.getElementById("edit-education-description") as HTMLTextAreaElement).value;
    const updatedSkill = (document.getElementById("edit-skill1") as HTMLInputElement).value;
    const updatedWorkDescription = (document.getElementById("edit-work-description") as HTMLTextAreaElement).value;

    // Display updated values
    alert(`Resume Updated Successfully:
      Name: ${updatedName}
      Email: ${updatedEmail}
      Phone: ${updatedPhone}
      Location: ${updatedLocation}
      Degree: ${updatedDegree}
      School: ${updatedSchool}
      Education Description: ${updatedEducationDescription}
      Skills: ${updatedSkill}
      Work Experience: ${updatedWorkDescription}
    `);
  });
});
