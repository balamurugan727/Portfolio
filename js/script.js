// Wait for the document to fully load
document.addEventListener('DOMContentLoaded', () => {
  // Highlight the active nav link based on current page
  const currentPage = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.style.borderBottom = '2px solid white';
    }
  });

  // Optional: Alert when certificate download starts
  const downloadLinks = document.querySelectorAll('a[download]');
  downloadLinks.forEach(link => {
    link.addEventListener('click', () => {
      alert('Your certificate is being downloaded!');
    });
  });
});
