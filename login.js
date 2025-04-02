document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("form");
    const emailField = document.getElementById("first");
    const passwordField = document.getElementById("password");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents page reload

        const email = emailField.value.trim();
        const password = passwordField.value.trim();

        if (email === "" || password === "") {
            alert("Please fill in both fields.");
            return;
        }

        // Retrieve users from localStorage
        const users = JSON.parse(localStorage.getItem("users")) || [];
        console.log("Users retrieved from localStorage:", users);

        // Check if user exists and if the password matches
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            alert("Login successful! Welcome, " + user.name);
            window.location.href = "Website for final project index.html"; // Redirect to homepage after successful login
        } else {
            alert("Invalid email or password. Please try again.");
        }
    });
});
