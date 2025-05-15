document.addEventListener("DOMContentLoaded", function () {
    const createForm = document.getElementById("createForm");
    const submitButton = document.getElementById("submitButton");

    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const passwordField = document.getElementById("password");

    createForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload

        const name = nameField.value.trim();
        const email = emailField.value.trim();
        const password = passwordField.value.trim();

        if (name === "" || email === "" || password === "") {
            alert("Please fill in all fields.");
            return;
        }

        // Email domain validation
        const domain = "@usc.edu.ph";
        if (!email.endsWith(domain)) {
            alert(`Email must end with ${domain}`);
            return;
        }

        // Get existing users from localStorage or initialize an empty array
        const users = JSON.parse(localStorage.getItem("users")) || [];

        // Add the new user to the array
        users.push({ name, email, password });

        // Store the updated users list in localStorage
        localStorage.setItem("users", JSON.stringify(users));

        console.log("Account Created!");
        console.log("Users stored in localStorage:", users);

        alert("Account Created!");
        window.location.href = "welcome.html"; // Redirect to login page after signup
    });
});
