var _a;
(_a = document.getElementById("resume-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault(); // Prevent the form from submitting
    // Collect values from the form
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var location = document.getElementById("location").value;
    var degree = document.getElementById("degree").value;
    var school = document.getElementById("school").value;
    var educationDescription = document.getElementById("education-description").value;
    var skill1 = document.getElementById("skill1").value;
    var workDescription = document.getElementById("work-description1").value;
    // Generate editable resume
    document.getElementById("generated-resume").innerHTML = "\n    <h2>Generated Resume</h2>\n    <form id=\"edit-resume-form\">\n      <div>\n        <label for=\"edit-name\">Name:</label>\n        <input type=\"text\" id=\"edit-name\" value=\"".concat(name, "\">\n      </div>\n      <div>\n        <label for=\"edit-email\">Email:</label>\n        <input type=\"email\" id=\"edit-email\" value=\"").concat(email, "\">\n      </div>\n      <div>\n        <label for=\"edit-phone\">Phone:</label>\n        <input type=\"tel\" id=\"edit-phone\" value=\"").concat(phone, "\">\n      </div>\n      <div>\n        <label for=\"edit-location\">Location:</label>\n        <input type=\"text\" id=\"edit-location\" value=\"").concat(location, "\">\n      </div>\n      <div>\n        <label for=\"edit-degree\">Degree:</label>\n        <input type=\"text\" id=\"edit-degree\" value=\"").concat(degree, "\">\n      </div>\n      <div>\n        <label for=\"edit-school\">School/University:</label>\n        <input type=\"text\" id=\"edit-school\" value=\"").concat(school, "\">\n      </div>\n      <div>\n        <label for=\"edit-education-description\">Education Description:</label>\n        <textarea id=\"edit-education-description\" rows=\"4\">").concat(educationDescription, "</textarea>\n      </div>\n      <div>\n        <label for=\"edit-skill1\">Skills:</label>\n        <input type=\"text\" id=\"edit-skill1\" value=\"").concat(skill1, "\">\n      </div>\n      <div>\n        <label for=\"edit-work-description\">Work Experience:</label>\n        <textarea id=\"edit-work-description\" rows=\"4\">").concat(workDescription, "</textarea>\n      </div>\n      <button type=\"submit\">Update Resume</button>\n    </form>\n  ");
    // Show the generated resume
    document.getElementById("generated-resume").style.display = "block";
    // Reset the form to clear the inputs
    document.getElementById("resume-form").reset();
    // Update the resume with new values after editing
    (_a = document.getElementById("edit-resume-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
        event.preventDefault();
        var updatedName = document.getElementById("edit-name").value;
        var updatedEmail = document.getElementById("edit-email").value;
        var updatedPhone = document.getElementById("edit-phone").value;
        var updatedLocation = document.getElementById("edit-location").value;
        var updatedDegree = document.getElementById("edit-degree").value;
        var updatedSchool = document.getElementById("edit-school").value;
        var updatedEducationDescription = document.getElementById("edit-education-description").value;
        var updatedSkill = document.getElementById("edit-skill1").value;
        var updatedWorkDescription = document.getElementById("edit-work-description").value;
        // Display updated values
        alert("Resume Updated Successfully:\n      Name: ".concat(updatedName, "\n      Email: ").concat(updatedEmail, "\n      Phone: ").concat(updatedPhone, "\n      Location: ").concat(updatedLocation, "\n      Degree: ").concat(updatedDegree, "\n      School: ").concat(updatedSchool, "\n      Education Description: ").concat(updatedEducationDescription, "\n      Skills: ").concat(updatedSkill, "\n      Work Experience: ").concat(updatedWorkDescription, "\n    "));
    });
});
