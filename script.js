// script.js
// JavaScript enhancements for the Amazon-like page

// Wait for the DOM to load
window.addEventListener('DOMContentLoaded', () => {
  // Search
  const searchInput = document.querySelector('.search-input');
  const searchBtn = document.querySelector('.search');
  searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
      // For demo, simply log or alert; replace with actual search redirect
      alert(`Searching for: ${query}`);
      // window.location.href = `https://www.amazon.in/s?k=${encodeURIComponent(query)}`;
    } else {
      alert('Please enter a search term');
    }
  });

  // Hamburger menu (navbar2) toggle
  const panel = document.querySelector('.panel');
  const navLinks = document.querySelector('.navbar2');
  panel.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Back to Top
  const backToTop = document.querySelector('.foot-panel1');
  backToTop.style.cursor = 'pointer';
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Sign-in dropdown redirect
  const signinSelect = document.querySelector('.signin_options');
  signinSelect.addEventListener('change', (e) => {
    // Placeholder: handle account/list redirects based on option value
    console.log('Selected:', e.target.value);
    // window.location.href = '/account';
  });

  // Location icon interaction
  const locIcon = document.getElementById('loc');
  const deliverText = document.querySelector('.second_name');
  locIcon.addEventListener('click', () => {
    const location = prompt('Enter your delivery location:', 'India');
    if (location) {
      deliverText.textContent = location;
    }
  });
});
