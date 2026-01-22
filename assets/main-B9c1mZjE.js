import"./style-SHq9n3H5.js";var e=[`Gift Hampers`,`Ready-Made Gifts`,`Personalized Gifts`,`Bulk Orders`,`Return Gifts`],t=[`₹100–₹500`,`₹500–₹1000`,`₹1000–₹2000`,`₹2000 and above`],n=[`Pellikoothuru`,`Haldi Function`,`Birthday Party`,`Marriage`,`Bride-to-Be / Bridal Events`],r=[{name:`Luxury Hamper`,category:`Gift Hampers`,priceRange:`₹1000–₹2000`,occasion:`Marriage`,image:`/images/hamper.jpg`},{name:`Personalized Mug`,category:`Personalized Gifts`,priceRange:`₹100–₹500`,occasion:`Birthday Party`,image:`/images/mug.jpg`},{name:`Ready-Made Gift Box`,category:`Ready-Made Gifts`,priceRange:`₹500–₹1000`,occasion:`Haldi Function`,image:`/images/box.jpg`},{name:`Bulk Gift Set`,category:`Bulk Orders`,priceRange:`₹2000 and above`,occasion:`Bride-to-Be / Bridal Events`,image:`/images/bulk.jpg`},{name:`Return Gift Basket`,category:`Return Gifts`,priceRange:`₹100–₹500`,occasion:`Pellikoothuru`,image:`/images/basket.jpg`}],i=[...r];function a(){let e=document.getElementById(`gifts-container`);e.innerHTML=``,i.forEach(t=>{let n=document.createElement(`div`);n.className=`gift-item`,n.innerHTML=`
      <img src="${t.image}" alt="${t.name}">
      <h3>${t.name}</h3>
      <p>Category: ${t.category}</p>
      <p>Price: ${t.priceRange}</p>
      <p>Occasion: ${t.occasion}</p>
    `,e.appendChild(n)})}function o(){let e=document.getElementById(`category-filter`).value,t=document.getElementById(`price-filter`).value,n=document.getElementById(`occasion-filter`).value;i=r.filter(r=>(!e||r.category===e)&&(!t||r.priceRange===t)&&(!n||r.occasion===n)),a()}document.querySelector(`#app`).innerHTML=`
  <header>
    <h1>Curated Gifting Service</h1>
  </header>
  <main>
    <section id="filters">
      <select id="category-filter">
        <option value="">All Categories</option>
        ${e.map(e=>`<option value="${e}">${e}</option>`).join(``)}
      </select>
      <select id="price-filter">
        <option value="">All Prices</option>
        ${t.map(e=>`<option value="${e}">${e}</option>`).join(``)}
      </select>
      <select id="occasion-filter">
        <option value="">All Occasions</option>
        ${n.map(e=>`<option value="${e}">${e}</option>`).join(``)}
      </select>
    </section>
    <section id="gifts-container"></section>
    <section id="enquiry">
      <h2>Enquire Now</h2>
      <form id="enquiry-form">
        <input type="text" id="name" placeholder="Name" required>
        <input type="tel" id="phone" placeholder="Phone Number" required>
        <input type="email" id="email" placeholder="Email (optional)">
        <select id="enquiry-occasion" required>
          <option value="">Select Occasion</option>
          ${n.map(e=>`<option value="${e}">${e}</option>`).join(``)}
        </select>
        <select id="budget" required>
          <option value="">Select Budget Range</option>
          ${t.map(e=>`<option value="${e}">${e}</option>`).join(``)}
        </select>
        <textarea id="message" placeholder="Message / Custom Request"></textarea>
        <button type="submit">Submit Enquiry</button>
      </form>
    </section>
  </main>
`,document.getElementById(`category-filter`).addEventListener(`change`,o),document.getElementById(`price-filter`).addEventListener(`change`,o),document.getElementById(`occasion-filter`).addEventListener(`change`,o),document.getElementById(`enquiry-form`).addEventListener(`submit`,e=>{e.preventDefault();let t={name:document.getElementById(`name`).value,phone:document.getElementById(`phone`).value,email:document.getElementById(`email`).value,occasion:document.getElementById(`enquiry-occasion`).value,budget:document.getElementById(`budget`).value,message:document.getElementById(`message`).value,timestamp:new Date().toISOString()},n=JSON.parse(localStorage.getItem(`enquiries`)||`[]`);n.push(t),localStorage.setItem(`enquiries`,JSON.stringify(n)),alert(`Enquiry submitted!`),document.getElementById(`enquiry-form`).reset()}),a();