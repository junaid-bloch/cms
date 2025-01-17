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
    window.location.href = 'login.html'; // Redirect to the login page
  }
  
  // Toggle Sidebar (Hamburger Menu)
  function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
  }
  
  // Toggle Notifications
  function toggleNotifications() {
    const notificationPanel = document.getElementById('notification-panel');
    notificationPanel.style.display = notificationPanel.style.display === 'block' ? 'none' : 'block';
  }
  
  // Close Notifications when clicked outside
  document.addEventListener("click", function(event) {
    const notificationPanel = document.getElementById("notification-panel");
    const button = document.querySelector("header button");
  
    if (!notificationPanel.contains(event.target) && event.target !== button) {
      notificationPanel.style.display = "none";
    }
  });
  