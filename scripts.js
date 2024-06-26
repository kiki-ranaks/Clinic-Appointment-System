// Function to open popup
function openPopup(popupId) {
    document.getElementById(popupId).style.display = 'block';
}

// Function to close popup
function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}

// Function to calculate age from Date of Birth
function calculateAge() {
    const dob = new Date(document.getElementById('dob').value);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    document.getElementById('age').value = age;
}

// Function to handle signup
function signup(event) {
    event.preventDefault();
    // Implement signup logic here
    // Send signup data to backend or handle as needed
    // Example:
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const gender = document.getElementById('gender').value;
    const dob = document.getElementById('dob').value;
    const age = document.getElementById('age').value;
    const address = document.getElementById('address').value;
    const contactNumber = document.getElementById('contactNumber').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    // Example of sending email notification
    sendEmailNotification(email, firstName, password);

    // Close signup popup after signup
    closePopup('signupPopup');
}

// Example function to send email notification
function sendEmailNotification(email, username, password) {
    // Implement email sending logic here (not actual implementation, just example)
    console.log(`Email sent to ${email} with username: ${username} and password: ${password}`);
}

// Function to handle login
function login(event) {
    event.preventDefault();
    // Implement login logic here
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Example validation (replace with actual logic)
    if (email === "example@example.com" && password === "Change@123") {
        // Successful login, show home page
        closePopup('loginPopup');
        showHomePage();
    } else {
        // Failed login, show error message (replace with actual UI handling)
        alert('Invalid username or password. Please try again.');
    }
}

// Function to show home page
function showHomePage() {
    document.getElementById('homePage').style.display = 'block';
    // Mock data for demonstration
    document.getElementById('bookingInfo').textContent = 'Total Bookings: 5'; // Replace with actual data
    document.getElementById('nextBookingDate').textContent = 'Next Appointment: 2024-07-01'; // Replace with actual data
}

// Function to logout
function logout() {
    // Implement logout logic here
    // For demo, just hide everything and show login popup
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('appointmentsPage').style.display = 'none';
    document.getElementById('loginPopup').style.display = 'block';
}

// Function to show appointments
function showAppointments() {
    // Implement logic to fetch and display appointments
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('appointmentsPage').style.display = 'block';
    // For demo, mock data display in appointments grid
    const appointmentsGrid = document.getElementById('appointmentsGrid');
    appointmentsGrid.innerHTML = `
        <table>
            <tr>
                <th>Appointment Date</th>
                <th>Appointment Time</th>
                <th>Patient Name</th>
                <th>Age</th>
                <th>Purpose of Visit</th>
                <th>Doctor Name</th>
            </tr>
            <tr>
                <td>2024-07-01</td>
                <td>10:00 AM</td>
                <td>John Doe</td>
                <td>35</td>
                <td>Regular Checkup</td>
                <td>Doctor 1</td>
            </tr>
            <tr>
                <td>2024-07-05</td>
                <td>11:30 AM</td>
                <td>Jane Smith</td>
                <td>28</td>
                <td>Dental Checkup</td>
                <td>Doctor 2</td>
            </tr>
        </table>
    `;
}

// Function to close appointments
function closeAppointments() {
    document.getElementById('appointmentsPage').style.display = 'none';
    document.getElementById('homePage').style.display = 'block';
}

// Initialize - show login popup initially
document.getElementById('loginPopup').style.display = 'block';