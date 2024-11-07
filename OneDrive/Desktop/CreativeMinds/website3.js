<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Creative Minds</title>
    <style>
        body { font-family: Arial, sans-serif; }
        #talentList { margin-top: 20px; }
        .talent-entry { border-bottom: 1px solid #ccc; padding: 10px 0; }
    </style>
</head>
<body>
    <h1>Welcome to Creative Minds</h1>
    <p>Share your talents and explore others' creations!</p>

    <h2>Showcase Your Talent</h2>
    <form id="talentForm">
        <label for="talentName">Your Name:</label><br>
        <input type="text" id="talentName" required><br><br>

        <label for="talentDescription">Description of Talent:</label><br>
        <textarea id="talentDescription" required></textarea><br><br>

        <button type="submit">Add Talent</button>
    </form>

    <h2>Talent Showcase</h2>
    <div id="talentList">
        <!-- JavaScript will insert talent entries here -->
    </div>

    <script src="script.js"></script>
	// script.js

// Select the form and talent list elements
const talentForm = document.getElementById('talentForm');
const talentList = document.getElementById('talentList');

// Function to add a new talent entry
function addTalent(name, description) {
    const entry = document.createElement('div');
    entry.classList.add('talent-entry');
    entry.innerHTML = `<strong>${name}</strong><p>${description}</p>`;
    talentList.appendChild(entry);
}

// Event listener for the form submission
talentForm.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent page from reloading on submit

    // Get values from the input fields
    const name = document.getElementById('talentName').value;
    const description = document.getElementById('talentDescription').value;

    // Add the new talent entry to the list
    addTalent(name, description);

    // Clear the form fields
    talentForm.reset();
});

</body>
</html>
