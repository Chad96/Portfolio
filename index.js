// JavaScript code in index.js

document.addEventListener("DOMContentLoaded", function () {
  // Variables for dropdowns
  var dropbtns = document.querySelectorAll(".dropbtn");

  // Function to toggle dropdown
  function toggleDropdown(event) {
    event.currentTarget.nextElementSibling.classList.toggle("show");
  }

  // Add event listener to each dropdown button
  dropbtns.forEach(function (dropbtn) {
    dropbtn.addEventListener("click", toggleDropdown);
  });

  // Close the dropdown if the user clicks outside of it
  window.addEventListener("click", function (event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.querySelectorAll(".dropdown-content");
      dropdowns.forEach(function (dropdown) {
        if (dropdown.classList.contains("show")) {
          dropdown.classList.remove("show");
        }
      });
    }
  });
});
