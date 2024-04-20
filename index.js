// Define personal information
const name = "Chadrack";
const surname = "Ndalamba";
const bio =
  "<b>Hello -</b> my name is Chadrack Ndalamba. I am a young, professional, hardworking individual who is always motivated to show the best version of myself.<br /><br />I am an aspiring full-stack software engineer and a quality-conscious person with top-notch teamwork and customer skills. I have excellent communication skills, very good at multitasking, and I adhere to deadlines.";

// Render personal information into HTML
document.addEventListener("DOMContentLoaded", function () {
  const bioParagraph = document.querySelector(".bio-text p");
  bioParagraph.innerHTML = bio; // Use innerHTML to render HTML content
  renderProjects();
  renderContactInfo();
});
