const loginForm = document.getElementById('login-form');

// Define sample users with roles (you can replace this with your database or backend logic)
const users = {
  student: { username: "student", password: "studentPass123", role: "student" },
  faculty: { username: "faculty", password: "facultyPass123", role: "faculty" },
  admin: { username: "admin", password: "adminPass123", role: "admin" },
};

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('uname').value;  // username field
  const password = document.getElementById('login-password').value;

  // Check if the username exists and password matches
  for (const user in users) {
    if (users[user].username === username && users[user].password === password) {
      alert(`${users[user].role.charAt(0).toUpperCase() + users[user].role.slice(1)} login successful!`);
      
      // Redirect based on role
      if (users[user].role === "student") {
        window.location.href = 'student_dsb.html';
      } else if (users[user].role === "faculty") {
        window.location.href = 'faculty_dsb.html';
      } else if (users[user].role === "admin") {
        window.location.href = 'admin_dsb.html';
      }
      return;
    }
  }

  alert('Invalid username or password! Please try again.');
});
