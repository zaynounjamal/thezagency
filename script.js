function addComment() {
    const commentInput = document.getElementById("comment-input");
    const commentsDisplay = document.getElementById("comments-display");
    
    if (commentInput.value.trim() !== "") {
        const newComment = document.createElement("p");
        newComment.textContent = commentInput.value;
        commentsDisplay.appendChild(newComment);
        commentInput.value = ""; // Clear the input
    }
}
// Get the modal elements
var loginModal = document.getElementById("loginModal");
var signupModal = document.getElementById("signupModal");

// Get the button elements that open the modals
var loginBtn = document.getElementById("loginBtn");
var signupBtn = document.getElementById("signupBtn");

// Get the <span> elements that close the modals
var closeLogin = document.getElementById("closeLogin");
var closeSignup = document.getElementById("closeSignup");

// When the user clicks the login button, open the login modal
loginBtn.onclick = function() {
    loginModal.style.display = "block";
}

// When the user clicks the signup button, open the signup modal
signupBtn.onclick = function() {
    signupModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modals
closeLogin.onclick = function() {
    loginModal.style.display = "none";
}

closeSignup.onclick = function() {
    signupModal.style.display = "none";
}

// When the user clicks anywhere outside of the modals, close them
window.onclick = function(event) {
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
    if (event.target == signupModal) {
        signupModal.style.display = "none";
    }
}
// JavaScript
const darkmodeBtn = document.querySelector('.darkmode-btn');
const htmlTag = document.querySelector('html');

darkmodeBtn.addEventListener('click', () => {
  const newTheme = htmlTag.dataset.theme === 'light' ? 'dark' : 'light';
  htmlTag.dataset.theme = newTheme;
  console.log(`Theme updated to ${newTheme}`);
});
// Add an event listener to the logo
document.querySelector('.logo').addEventListener('click', function() {
  // Toggle the dropdown menu
  document.querySelector('.dropdown-menu').classList.toggle('show');
});
// Add an event listener to the logo
document.querySelector('.logo').addEventListener('click', function() {
    // Toggle the dropdown menu
    document.querySelector('.logo-container .dropdown-menu').classList.toggle('show');
  });
  // Add an event listener to the logo
document.querySelector('.logo').addEventListener('click', function() {
    // Toggle the dropdown menu
    document.querySelector('.dropdown-menu').classList.toggle('show');
  });
