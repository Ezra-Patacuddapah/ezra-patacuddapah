// Function to set the active link based on hash
function setActiveFromHash() {
  let currentHash = window.location.hash || '#home';
  setActiveLink(currentHash);
}

// Function to set the active link based on scroll position
function setActiveFromScroll() {
  const sections = document.querySelectorAll('section');
  let currentSection = '#home'; // default

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    // If the section is at the top of the viewport (top <= 0 and bottom > 0)
    if (rect.top <= 100 && rect.bottom >= 100) { // 100px threshold for better UX
      currentSection = '#' + section.id;
    }
  });

  setActiveLink(currentSection);
}

// Helper function to set the active class on the matching nav link
function setActiveLink(targetHash) {
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    if (link.getAttribute('href') === targetHash) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Run the functions when the page loads
document.addEventListener('DOMContentLoaded', () => {
  setActiveFromHash();
  setActiveFromScroll();
});

// Update on hash change
window.addEventListener('hashchange', setActiveFromHash);

// Update on scroll
window.addEventListener('scroll', setActiveFromScroll);
