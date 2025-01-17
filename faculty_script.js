// Function to show the selected section and hide others
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach((section) => {
        section.style.display = 'none';
    });

    const selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';
}

// Function to handle logout
function logout() {
    alert("Logging out...");
    window.location.href = 'index.html'; // Redirect to login page
}

// Toggle Sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

// Toggle Notifications
function toggleNotifications() {
    const notifications = document.getElementById("notifications");
    notifications.style.display = notifications.style.display === "block" ? "none" : "block";
}

// Close Notifications on outside click
document.addEventListener("click", function(event) {
    const notifications = document.getElementById("notifications");
    const button = document.querySelector("header button");

    if (!notifications.contains(event.target) && event.target !== button) {
        notifications.style.display = "none";
    }
});
