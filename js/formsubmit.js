
function validateForm(event)
{
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Check if all fields are filled
    if (!email || !subject || !message) {
        alert('Please fill in all fields.');
        event.preventDefault(); // Prevent form submission
        return false;
    }

    // If all fields are filled, prevent page reload and simulate submission
    event.preventDefault();
    alert('Form submitted successfully!');

    // Additional logic (e.g., send form data to a server) could go here
    return false;
}