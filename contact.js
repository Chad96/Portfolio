// Define personal information variables
const firstName = "YourFirstName";
const lastName = "YourLastName";
const address = "748 Park Street Arcadia, Pretoria";
const emailAddress = "chadrackndalamba@gmail.com";
const phoneNumber = "078-129-1867";

// Render personal information dynamically
const contactDetails = document.getElementById("contactDetails");
contactDetails.innerHTML = `
  <li>Address: ${address}</li>
  <li>Email Address: ${emailAddress}</li>
  <li>Phone: ${phoneNumber}</li>
`;

// Define and include all projects in an array
const projects = ["Project 1", "Project 2", "Project 3"];

// Form submission handling
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  // Collect form data
  const formData = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    email: document.getElementById("email").value,
    contactNumber: document.getElementById("contactNumber").value,
    message: document.getElementById("message").value,
  };

  // Send form data to Formspree API (not implemented here)
  console.log("Form Data:", formData);
  // Implement Formspree API integration here
});
