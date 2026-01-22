import './style.css';

const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'admin';

function showLogin() {
  document.querySelector('#app').innerHTML = `
    <header>
      <h1>Admin Access</h1>
    </header>
    <main>
      <form id="login-form">
        <input type="text" id="username" placeholder="Username" required>
        <input type="password" id="password" placeholder="Password" required>
        <button type="submit">Login</button>
      </form>
    </main>
  `;

  document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      localStorage.setItem('adminLoggedIn', 'true');
      showDashboard();
    } else {
      alert('Invalid credentials');
    }
  });
}

function showDashboard() {
  const enquiries = JSON.parse(localStorage.getItem('enquiries') || '[]');
  enquiries.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

  document.querySelector('#app').innerHTML = `
    <header>
      <h1>Admin Dashboard</h1>
      <button id="logout">Logout</button>
    </header>
    <main>
      <h2>Enquiries</h2>
      <div id="enquiries-list">
        ${enquiries.map(enq => `
          <div class="enquiry">
            <p><strong>Name:</strong> ${enq.name}</p>
            <p><strong>Phone:</strong> ${enq.phone}</p>
            <p><strong>Email:</strong> ${enq.email || 'N/A'}</p>
            <p><strong>Occasion:</strong> ${enq.occasion}</p>
            <p><strong>Budget:</strong> ${enq.budget}</p>
            <p><strong>Message:</strong> ${enq.message || 'N/A'}</p>
            <p><strong>Time:</strong> ${new Date(enq.timestamp).toLocaleString()}</p>
          </div>
        `).join('')}
      </div>
    </main>
  `;

  document.getElementById('logout').addEventListener('click', () => {
    localStorage.removeItem('adminLoggedIn');
    showLogin();
  });
}

if (localStorage.getItem('adminLoggedIn') === 'true') {
  showDashboard();
} else {
  showLogin();
}