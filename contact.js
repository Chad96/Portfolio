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

function handleFormSubmit(event) {
  // Prevent the form from submitting normally
  event.preventDefault();

  // Get the email and message inputs from the form
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  // Check if the email input is not empty and is valid
  const isEmailValid =
    emailInput.value.trim() !== "" && emailInput.validity.valid;

  // Check if the message input is not empty
  const isMessageValid = messageInput.value.trim() !== "";

  // Check if both email and message are valid
  const isFormValid = isEmailValid && isMessageValid;

  if (isFormValid) {
    // If the form is valid, send the form data to Formspree
    const formData = new FormData(event.target);
    fetch("https://formspree.io/f/xdoqyzgk", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // If the email is successfully sent, show a success message
        if (data.ok) {
          alert("Email successfully sent");
        }
      });
  } else {
    // If the form is invalid, show error messages
    if (!isEmailValid) {
      const emailSpan = document.getElementById("email-span");
      emailSpan.classList.remove("hidden");
    }
    if (!isMessageValid) {
      const messageSpan = document.getElementById("message-span");
      messageSpan.classList.remove("hidden");
    }
  }
}

// Attach event listener to the form
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", handleFormSubmit);
