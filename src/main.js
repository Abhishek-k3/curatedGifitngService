import './style.css';

// Data
const categories = ['Gift Hampers', 'Ready-Made Gifts', 'Personalized Gifts', 'Bulk Orders', 'Return Gifts'];
const priceRanges = ['₹100–₹500', '₹500–₹1000', '₹1000–₹2000', '₹2000 and above'];
const occasions = ['Pellikoothuru', 'Haldi Function', 'Birthday Party', 'Marriage', 'Bride-to-Be / Bridal Events'];

const gifts = [
  { name: 'Luxury Hamper', category: 'Gift Hampers', priceRange: '₹1000–₹2000', occasion: 'Marriage', image: 'images/hamper.jpg' },
  { name: 'Customized Gifts', category: 'Personalized Gifts', priceRange: '₹100–₹500', occasion: 'Birthday Party', image: 'images/hamper.jpg' },
  { name: 'Ready-Made Gift Box', category: 'Ready-Made Gifts', priceRange: '₹500–₹1000', occasion: 'Haldi Function', image: 'images/hamper.jpg' },
  { name: 'Bulk Gift Set', category: 'Bulk Orders', priceRange: '₹2000 and above', occasion: 'Bride-to-Be / Bridal Events', image: 'images/hamper.jpg' },
  { name: 'Return Gift Basket', category: 'Return Gifts', priceRange: '₹100–₹500', occasion: 'Pellikoothuru', image: 'images/hamper.jpg' },
];

let filteredGifts = [...gifts];

function renderGifts() {
  const container = document.getElementById('gifts-container');
  container.innerHTML = '';

  filteredGifts.forEach(gift => {
    const div = document.createElement('div');
    div.className = 'gift-item';
    div.innerHTML = `
      <img src="${gift.image}" alt="${gift.name}">
      <h3>${gift.name}</h3>
      <p>Category: ${gift.category}</p>
      <p>Price: ${gift.priceRange}</p>
      <p>Occasion: ${gift.occasion}</p>
    `;
    container.appendChild(div);
  });
}

function filterGifts() {
  const category = document.getElementById('category-filter').value;
  const price = document.getElementById('price-filter').value;
  const occasion = document.getElementById('occasion-filter').value;
  filteredGifts = gifts.filter(gift => {
    return (!category || gift.category === category) &&
           (!price || gift.priceRange === price) &&
           (!occasion || gift.occasion === occasion);
  });
  renderGifts();
}

document.querySelector('#app').innerHTML = `
  <header>
    <div class="heritage-icon">
      <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" stroke="var(--ivory)" stroke-width="4" fill="var(--primary-color)"/>
        <path d="M30 40 L50 20 L70 40 L70 70 L30 70 Z" fill="var(--ivory)"/>
        <circle cx="50" cy="35" r="3" fill="var(--secondary-color)"/>
        <rect x="45" y="45" width="10" height="15" fill="var(--secondary-color)"/>
      </svg>
    </div>
    <h1>Curated Gifting Service</h1>
    <p class="tagline">Celebrating Indian Heritage Through Thoughtful Gifts</p>
  </header>

  <nav class="main-nav">
    <a href="#about">About Us</a>
    <a href="#services">Our Services</a>
    <a href="#gallery">Gift Gallery</a>
    <a href="#testimonials">Testimonials</a>
    <a href="#contact">Contact</a>
  </nav>

  <section id="about" class="about-section">
    <div class="container">
      <h2 class="heritage-heading">About Our Heritage</h2>
      <div class="about-content">
        <div class="about-text">
          <p>Rooted in India's rich cultural heritage, we curate gifts that tell stories of tradition, craftsmanship, and celebration. From wedding hampers to festival offerings, each gift reflects the essence of Indian artistry and warmth.</p>
          <p>Our collection celebrates the diversity of Indian culture - from the intricate designs of Rajasthan to the vibrant colors of Kerala, from the spiritual symbols of Varanasi to the festive spirit of Diwali.</p>
        </div>
        <div class="heritage-symbols">
          <div class="symbol">
            <img width="100" height="100" src="public/images/heart-sutra-om-mani-padme-hum-mantra-sanskrit-sanskrit-six-types-of-mantra-63d54216451533505bed997d44ddf172.png" class="heritage-icon" />
            <p>Dharma</p>
          </div>
          <div class="symbol">
            <img width="100" height="100" src="public/images/buddhist-symbolism-dharmachakra-buddhism-wheel-of-dharma-f4ded094ccbe75ce53895c16ed0f4205.png" class="heritage-icon" />
            <p>Sanskriti</p>
          </div>
          <div class="symbol">
            <img width="100" height="100" src="public/images/upanishads-hindu-scriptures-hindu-texts-hinduism-religious-text-hinduism-6a483f0dff7b8d950f476a4c67cef771.png" class="heritage-icon" />
            <p>Parampara</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="services" class="services-section">
    <div class="container">
      <h2>Our Curated Services</h2>
      <div class="services-grid">
        <div class="service-card">
          <div class="service-icon">
            <svg width="60" height="60" viewBox="0 0 100 100">
              <rect x="20" y="30" width="60" height="40" fill="var(--primary-color)" rx="5"/>
              <rect x="30" y="40" width="40" height="20" fill="var(--ivory)"/>
              <circle cx="35" cy="45" r="3" fill="var(--secondary-color)"/>
              <circle cx="45" cy="45" r="3" fill="var(--secondary-color)"/>
              <circle cx="55" cy="45" r="3" fill="var(--secondary-color)"/>
            </svg>
          </div>
          <h3>Gift Hampers</h3>
          <p>Luxurious collections of traditional Indian sweets, handicrafts, and wellness products.</p>
        </div>
        <div class="service-card">
          <div class="service-icon">
            <svg width="60" height="60" viewBox="0 0 100 100">
              <circle cx="50" cy="40" r="25" fill="var(--secondary-color)"/>
              <rect x="40" y="65" width="20" height="25" fill="var(--primary-color)"/>
              <circle cx="50" cy="75" r="8" fill="var(--ivory)"/>
            </svg>
          </div>
          <h3>Personalized Gifts</h3>
          <p>Custom-engraved items with names, dates, and traditional motifs.</p>
        </div>
        <div class="service-card">
          <div class="service-icon">
            <svg width="60" height="60" viewBox="0 0 100 100">
              <rect x="15" y="20" width="70" height="60" fill="var(--heritage-green)" rx="8"/>
              <rect x="25" y="30" width="50" height="8" fill="var(--ivory)"/>
              <rect x="25" y="45" width="50" height="8" fill="var(--ivory)"/>
              <rect x="25" y="60" width="50" height="8" fill="var(--ivory)"/>
            </svg>
          </div>
          <h3>Ready-Made Gifts</h3>
          <p>Pre-curated gift boxes for various occasions and budgets.</p>
        </div>
        <div class="service-card">
          <div class="service-icon">
            <svg width="60" height="60" viewBox="0 0 100 100">
              <circle cx="30" cy="30" r="8" fill="var(--accent-color)"/>
              <circle cx="70" cy="30" r="8" fill="var(--accent-color)"/>
              <circle cx="50" cy="50" r="8" fill="var(--accent-color)"/>
              <circle cx="30" cy="70" r="8" fill="var(--accent-color)"/>
              <circle cx="70" cy="70" r="8" fill="var(--accent-color)"/>
            </svg>
          </div>
          <h3>Bulk Orders</h3>
          <p>Corporate gifting and large-scale orders for events.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="gallery" class="gallery-section">
    <div class="container">
      <h2>Gift Gallery</h2>
      <div id="filters"></div>
      <div id="gifts-container"></div>
    </div>
  </section>

  <section id="testimonials" class="testimonials-section">
    <div class="container">
      <h2>What Our Customers Say</h2>
      <div class="testimonials-grid">
        <div class="testimonial-card">
          <div class="testimonial-content">
            <p>"The Diwali hamper was absolutely perfect! The traditional sweets and decorative items captured the festival's essence beautifully."</p>
          </div>
          <div class="testimonial-author">
            <strong>Priya Sharma</strong>
            <span>Mumbai</span>
          </div>
        </div>
        <div class="testimonial-card">
          <div class="testimonial-content">
            <p>"Their personalized wedding gifts with traditional motifs were a hit at our reception. Truly authentic and meaningful."</p>
          </div>
          <div class="testimonial-author">
            <strong>Rajesh Kumar</strong>
            <span>Delhi</span>
          </div>
        </div>
        <div class="testimonial-card">
          <div class="testimonial-content">
            <p>"The attention to detail in their festival collections is remarkable. Each item tells a story of our rich heritage."</p>
          </div>
          <div class="testimonial-author">
            <strong>Anjali Patel</strong>
            <span>Ahmedabad</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="contact" class="contact-section">
    <div class="container">
      <h2>Get In Touch</h2>
      <div class="contact-content">
        <div class="contact-info">
          <div class="contact-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--primary-color)">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span>Bengaluru, Karnataka, India</span>
          </div>
          <div class="contact-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--primary-color)">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            <span>+91-8296604013</span>
          </div>
          <div class="contact-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--primary-color)">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <span>lakshmi.kothakota@gmail.com</span>
          </div>
        </div>
        <div id="enquiry"></div>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="container">
      <p>&copy; 2024 Curated Gifting Service. Celebrating India's Rich Heritage Through Thoughtful Gifts.</p>
      <div class="footer-links">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  </footer>
`;

function renderFilters() {
  const filtersContainer = document.getElementById('filters');
  filtersContainer.innerHTML = `
    <select id="category-filter">
      <option value="">All Categories</option>
      ${categories.map(c => `<option value="${c}">${c}</option>`).join('')}
    </select>
    <select id="price-filter">
      <option value="">All Price Ranges</option>
      ${priceRanges.map(p => `<option value="${p}">${p}</option>`).join('')}
    </select>
    <select id="occasion-filter">
      <option value="">All Occasions</option>
      ${occasions.map(o => `<option value="${o}">${o}</option>`).join('')}
    </select>
  `;
}

function renderEnquiryForm() {
  const enquiryContainer = document.getElementById('enquiry');
  enquiryContainer.innerHTML = `
    <h3>Send Us Your Enquiry</h3>
    <form id="enquiry-form">
      <input type="text" id="name" placeholder="Full Name" required>
      <input type="tel" id="phone" placeholder="Phone Number" required>
      <input type="email" id="email" placeholder="Email Address (Optional)">
      <select id="enquiry-occasion" required>
        <option value="">Select Occasion</option>
        ${occasions.map(o => `<option value="${o}">${o}</option>`).join('')}
      </select>
      <select id="budget" required>
        <option value="">Select Budget Range</option>
        ${priceRanges.map(p => `<option value="${p}">${p}</option>`).join('')}
      </select>
      <textarea id="message" placeholder="Tell us about your requirements..."></textarea>
      <button type="submit">Submit Enquiry</button>
    </form>
  `;
}

renderFilters();
renderEnquiryForm();
renderGifts();

// Add event listeners after elements are rendered
document.getElementById('category-filter').addEventListener('change', filterGifts);
document.getElementById('price-filter').addEventListener('change', filterGifts);
document.getElementById('occasion-filter').addEventListener('change', filterGifts);

document.getElementById('enquiry-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const enquiry = {
    name: document.getElementById('name').value,
    phone: document.getElementById('phone').value,
    email: document.getElementById('email').value,
    occasion: document.getElementById('enquiry-occasion').value,
    budget: document.getElementById('budget').value,
    message: document.getElementById('message').value,
    timestamp: new Date().toISOString()
  };
   const response = await fetch('https://curatedgifitngservice-backend.onrender.com/send-enquiry', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(enquiry)
});


  if (response.ok) {
    alert('Enquiry sent successfully!');
    e.target.reset();
  } else {
    alert('Failed to send enquiry');
  }
});
