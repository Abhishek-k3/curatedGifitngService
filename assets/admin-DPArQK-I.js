import"./style-SHq9n3H5.js";var e=`admin`,t=`admin`;function n(){document.querySelector(`#app`).innerHTML=`
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
  `,document.getElementById(`login-form`).addEventListener(`submit`,n=>{n.preventDefault();let i=document.getElementById(`username`).value,a=document.getElementById(`password`).value;i===e&&a===t?(localStorage.setItem(`adminLoggedIn`,`true`),r()):alert(`Invalid credentials`)})}function r(){let e=JSON.parse(localStorage.getItem(`enquiries`)||`[]`);e.sort((e,t)=>new Date(t.timestamp)-new Date(e.timestamp)),document.querySelector(`#app`).innerHTML=`
    <header>
      <h1>Admin Dashboard</h1>
      <button id="logout">Logout</button>
    </header>
    <main>
      <h2>Enquiries</h2>
      <div id="enquiries-list">
        ${e.map(e=>`
          <div class="enquiry">
            <p><strong>Name:</strong> ${e.name}</p>
            <p><strong>Phone:</strong> ${e.phone}</p>
            <p><strong>Email:</strong> ${e.email||`N/A`}</p>
            <p><strong>Occasion:</strong> ${e.occasion}</p>
            <p><strong>Budget:</strong> ${e.budget}</p>
            <p><strong>Message:</strong> ${e.message||`N/A`}</p>
            <p><strong>Time:</strong> ${new Date(e.timestamp).toLocaleString()}</p>
          </div>
        `).join(``)}
      </div>
    </main>
  `,document.getElementById(`logout`).addEventListener(`click`,()=>{localStorage.removeItem(`adminLoggedIn`),n()})}localStorage.getItem(`adminLoggedIn`)===`true`?r():n();