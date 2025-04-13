
        // Function to handle image preview when the user selects a file
        document.getElementById('image').addEventListener('change', function(event) {
            const file = event.target.files[0];
            const reader = new FileReader();
            
            reader.onload = function(e) {
                const imagePreview = document.getElementById('image-preview');
                imagePreview.src = e.target.result;
                imagePreview.style.display = 'block'; // Show the preview image
            };
            
            if (file) {
                reader.readAsDataURL(file); // Read the image file
            } else {
                document.getElementById('image-preview').style.display = 'none'; // Hide preview if no file selected
            }
        });

        // Function to save form data to localStorage
        document.getElementById('report-form').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the form from submitting normally
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                itemFound: document.getElementById('item-found').value,
                itemDescription: document.getElementById('item-description').value,
                location: document.getElementById('location').value,
                date: document.getElementById('date').value,
                status: document.getElementById('status').value,
                additionalInfo: document.getElementById('additional-info').value,
                image: document.getElementById('image').files[0] ? document.getElementById('image').files[0].name : null // Save image file name
            };

            // Save to localStorage
            localStorage.setItem('lostAndFoundReport', JSON.stringify(formData));

            // Show a success message
            document.getElementById('success-message').style.display = 'block';

            // Clear the form fields (optional)
            document.getElementById('report-form').reset();
            document.getElementById('image-preview').style.display = 'none'; // Hide image preview
        });

        // Load and display stored report data (if any)
        window.addEventListener('load', function() {
            const storedReport = JSON.parse(localStorage.getItem('lostAndFoundReport'));
            if (storedReport) {
                console.log('Stored Report:', storedReport); // For debugging purposes
            }
        });