import"./style-CsjF0D4m.js";var e=`admin`,t=`admin`;function n(){document.querySelector(`#app`).innerHTML=`
    <div class="login-container">
      <h1>Admin Access</h1>
      <form id="login-form" class="login-form">
        <input type="text" id="username" placeholder="Username" required>
        <input type="password" id="password" placeholder="Password" required>
        <button type="submit">Login</button>
      </form>
    </div>
  `,document.getElementById(`login-form`).addEventListener(`submit`,n=>{n.preventDefault();let i=document.getElementById(`username`).value,a=document.getElementById(`password`).value;i===e&&a===t?(localStorage.setItem(`adminLoggedIn`,`true`),r()):alert(`Invalid credentials`)})}function r(){let e=JSON.parse(localStorage.getItem(`enquiries`)||`[]`);e.sort((e,t)=>new Date(t.timestamp)-new Date(e.timestamp)),e.forEach(e=>{e.status||=`pending`}),localStorage.setItem(`enquiries`,JSON.stringify(e)),document.querySelector(`#app`).innerHTML=`
    <header class="admin-header">
      <h1>Admin Dashboard</h1>
      <button id="logout" class="logout-btn">Logout</button>
    </header>
    <main class="admin-main">
      <section class="enquiries-section">
        <h2>Customer Enquiries</h2>
        ${e.length===0?`<p class="no-enquiries">No enquiries yet.</p>`:`<table class="enquiries-table">
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
              ${e.map((e,t)=>`
                <tr class="enquiry-row ${e.status}">
                  <td><strong>${e.name}</strong></td>
                  <td>${e.phone}</td>
                  <td>${e.email||`N/A`}</td>
                  <td>${e.occasion}</td>
                  <td>${e.budget}</td>
                  <td>${e.message||`N/A`}</td>
                  <td><span class="status-badge status-${e.status}">${e.status}</span></td>
                  <td>${new Date(e.timestamp).toLocaleString()}</td>
                  <td class="actions">
                    <button class="action-btn resolve-btn" data-index="${t}" ${e.status===`resolved`?`disabled`:``}>Resolve</button>
                    <button class="action-btn followup-btn" data-index="${t}" ${e.status===`follow-up`?`disabled`:``}>Follow-up</button>
                  </td>
                </tr>
              `).join(``)}
            </tbody>
          </table>`}
      </section>
    </main>
  `,document.querySelectorAll(`.resolve-btn`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.target.dataset.index;i(t,`resolved`)})}),document.querySelectorAll(`.followup-btn`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.target.dataset.index;i(t,`follow-up`)})}),document.getElementById(`logout`).addEventListener(`click`,()=>{localStorage.removeItem(`adminLoggedIn`),n()})}function i(e,t){let n=JSON.parse(localStorage.getItem(`enquiries`)||`[]`);n[e].status=t,localStorage.setItem(`enquiries`,JSON.stringify(n)),r()}localStorage.getItem(`adminLoggedIn`)===`true`?r():n();