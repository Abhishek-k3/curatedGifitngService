import './style.css';

const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'admin';

function showLogin() {
  document.querySelector('#app').innerHTML = `
    <div class="login-container">
      <h1>Admin Access</h1>
      <form id="login-form" class="login-form">
        <input type="text" id="username" placeholder="Username" required>
        <input type="password" id="password" placeholder="Password" required>
        <button type="submit">Login</button>
      </form>
    </div>
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

  // Ensure all enquiries have a status
  enquiries.forEach(enq => {
    if (!enq.status) enq.status = 'pending';
  });
  localStorage.setItem('enquiries', JSON.stringify(enquiries));

  document.querySelector('#app').innerHTML = `
    <header class="admin-header">
      <h1>Admin Dashboard</h1>
      <button id="logout" class="logout-btn">Logout</button>
    </header>
    <main class="admin-main">
      <section class="enquiries-section">
        <h2>Customer Enquiries</h2>
        ${enquiries.length === 0 ? 
          '<p class="no-enquiries">No enquiries yet.</p>' :
          `<table class="enquiries-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Occasion</th>
                <th>Budget</th>
                <th>Message</th>
                <th>Status</th>
                <th>Submitted</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${enquiries.map((enq, index) => `
                <tr class="enquiry-row ${enq.status}">
                  <td><strong>${enq.name}</strong></td>
                  <td>${enq.phone}</td>
                  <td>${enq.email || 'N/A'}</td>
                  <td>${enq.occasion}</td>
                  <td>${enq.budget}</td>
                  <td>${enq.message || 'N/A'}</td>
                  <td><span class="status-badge status-${enq.status}">${enq.status}</span></td>
                  <td>${new Date(enq.timestamp).toLocaleString()}</td>
                  <td class="actions">
                    <button class="action-btn resolve-btn" data-index="${index}" ${enq.status === 'resolved' ? 'disabled' : ''}>Resolve</button>
                    <button class="action-btn followup-btn" data-index="${index}" ${enq.status === 'follow-up' ? 'disabled' : ''}>Follow-up</button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>`
        }
      </section>
    </main>
  `;

  // Add event listeners for action buttons
  document.querySelectorAll('.resolve-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const index = e.target.dataset.index;
      updateEnquiryStatus(index, 'resolved');
    });
  });

  document.querySelectorAll('.followup-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const index = e.target.dataset.index;
      updateEnquiryStatus(index, 'follow-up');
    });
  });

  document.getElementById('logout').addEventListener('click', () => {
    localStorage.removeItem('adminLoggedIn');
    showLogin();
  });
}

function updateEnquiryStatus(index, status) {
  const enquiries = JSON.parse(localStorage.getItem('enquiries') || '[]');
  enquiries[index].status = status;
  localStorage.setItem('enquiries', JSON.stringify(enquiries));
  showDashboard(); // Refresh the dashboard
}

if (localStorage.getItem('adminLoggedIn') === 'true') {
  showDashboard();
} else {
  showLogin();
}