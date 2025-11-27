document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Animate Day Cards
  document.querySelectorAll('.day-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    card.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(card);
  });

  // Animate Flight Card
  const flightCard = document.querySelector('.flight-card');
  if (flightCard) {
    flightCard.style.opacity = '0';
    flightCard.style.transform = 'translateY(30px)';
    flightCard.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    observer.observe(flightCard);
  }
});
