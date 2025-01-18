// Function to show the options based on the selected category
function showOptions(option) {
    // Hide all options by default
    document.getElementById('notes-options').classList.remove('active');
    document.getElementById('pyqs-options').classList.remove('active');
    document.getElementById('group-options').classList.remove('active');

    // Show the selected option
    if (option === 'notes') {
        document.getElementById('notes-options').classList.add('active');
    } else if (option === 'pyqs') {
        document.getElementById('pyqs-options').classList.add('active');
    } else if (option === 'group') {
        document.getElementById('group-options').classList.add('active');
    }
}

// Function to show the year selection alert
function showYear(year) {
    alert(`You selected ${year} Year.`);
}
