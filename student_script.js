// Function to show the selected section and hide others
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach((section) => {
      section.style.display = 'none';
    });
  
    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';
  }
  
  // Function to handle logout (simple redirect or action)
  function logout() {
    alert("Logging out...");
    // Here you can implement real logout logic like clearing session data or redirecting.
    // For now, it's just an alert.
    window.location.href = 'index.html'; // Redirect to the login page (modify as needed)
  }
  
  // Toggle Sidebar (Hamburger Menu)
  function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
  }
  
  // Toggle Notifications
  function toggleNotifications() {
    const notifications = document.getElementById("notifications");
    notifications.style.display = notifications.style.display === "block" ? "none" : "block";
  }
  
  // Close Notifications when clicked outside
  document.addEventListener("click", function(event) {
    const notifications = document.getElementById("notifications");
    const button = document.querySelector("header button");
  
    if (!notifications.contains(event.target) && event.target !== button) {
      notifications.style.display = "none";
    }
  });
  
