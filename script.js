// Select form element
const form = document.querySelector('form');

// Select form inputs
const nameInput = form.querySelector('#name');
const emailInput = form.querySelector('#email');
const messageInput = form.querySelector('#message');

// Add event listener to form submission
form.addEventListener('submit', (event) => {
	// Prevent default form submission
	event.preventDefault();

	// Validate name input
	if (nameInput.value.trim() === '') {
		alert('Please enter your name');
		nameInput.focus();
		return;
	}

	// Validate email input
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(emailInput.value)) {
		alert('Please enter a valid email address');
		emailInput.focus();
		return;
	}

	// Validate message input
	if (messageInput.value.trim() === '') {
		alert('Please enter a message');
		messageInput.focus();
		return;
	}

	// Submit the form
	form.submit();
});
