// Define personal information
const name = "Chadrack";
const surname = "Ndalamba";
const bio =
  "Hello - my name is Chadrack Ndalamba. I am a young, professional, hardworking individual who is always motivated to show the best version of myself...";

// Render personal information into HTML
document.addEventListener("DOMContentLoaded", function () {
  const bioParagraph = document.querySelector(".bio-text p");
  const boldHello = "<b>Hello</b>"; // Bold "Hello"
  const updatedBio = bio.replace("Hello", boldHello); // Replaced "Hello" with bold version

  document.querySelector(".bio-text h2").textContent = `${name} ${surname}`;
  bioParagraph.innerHTML = updatedBio; // Use innerHTML to render HTML content
  renderProjects();
});
