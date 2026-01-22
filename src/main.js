import './style.css';

// Data
const categories = ['Gift Hampers', 'Ready-Made Gifts', 'Personalized Gifts', 'Bulk Orders', 'Return Gifts'];
const priceRanges = ['₹100–₹500', '₹500–₹1000', '₹1000–₹2000', '₹2000 and above'];
const occasions = ['Pellikoothuru', 'Haldi Function', 'Birthday Party', 'Marriage', 'Bride-to-Be / Bridal Events'];

const gifts = [
  { name: 'Luxury Hamper', category: 'Gift Hampers', priceRange: '₹1000–₹2000', occasion: 'Marriage', image: '/images/hamper.jpg' },
  { name: 'Personalized Mug', category: 'Personalized Gifts', priceRange: '₹100–₹500', occasion: 'Birthday Party', image: '/images/mug.jpg' },
  { name: 'Ready-Made Gift Box', category: 'Ready-Made Gifts', priceRange: '₹500–₹1000', occasion: 'Haldi Function', image: '/images/box.jpg' },
  { name: 'Bulk Gift Set', category: 'Bulk Orders', priceRange: '₹2000 and above', occasion: 'Bride-to-Be / Bridal Events', image: '/images/bulk.jpg' },
  { name: 'Return Gift Basket', category: 'Return Gifts', priceRange: '₹100–₹500', occasion: 'Pellikoothuru', image: '/images/basket.jpg' },
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
    <h1>Curated Gifting Service</h1>
  </header>
  <main>
    <section id="filters">
      <select id="category-filter">
        <option value="">All Categories</option>
        ${categories.map(c => `<option value="${c}">${c}</option>`).join('')}
      </select>
      <select id="price-filter">
        <option value="">All Prices</option>
        ${priceRanges.map(p => `<option value="${p}">${p}</option>`).join('')}
      </select>
      <select id="occasion-filter">
        <option value="">All Occasions</option>
        ${occasions.map(o => `<option value="${o}">${o}</option>`).join('')}
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
          ${occasions.map(o => `<option value="${o}">${o}</option>`).join('')}
        </select>
        <select id="budget" required>
          <option value="">Select Budget Range</option>
          ${priceRanges.map(p => `<option value="${p}">${p}</option>`).join('')}
        </select>
        <textarea id="message" placeholder="Message / Custom Request"></textarea>
        <button type="submit">Submit Enquiry</button>
      </form>
    </section>
  </main>
`;

document.getElementById('category-filter').addEventListener('change', filterGifts);
document.getElementById('price-filter').addEventListener('change', filterGifts);
document.getElementById('occasion-filter').addEventListener('change', filterGifts);

document.getElementById('enquiry-form').addEventListener('submit', (e) => {
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
  const enquiries = JSON.parse(localStorage.getItem('enquiries') || '[]');
  enquiries.push(enquiry);
  localStorage.setItem('enquiries', JSON.stringify(enquiries));
  alert('Enquiry submitted!');
  document.getElementById('enquiry-form').reset();
});

renderGifts();
