document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the form from submitting the traditional way

        // Get form data
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        // Create FormData object
        const formData = new FormData();
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('message', message);

        // Create XMLHttpRequest to send the data via AJAX
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'send_email.php', true);

        // Handle the server response
        xhr.onload = function() {
            if (xhr.status === 200) {
                alert('Message sent successfully!');
                form.reset(); // Optionally reset the form
            } else {
                alert('Error sending message. Please try again later.');
            }
        };

        // Send the request
        xhr.send(formData);
    });
});
