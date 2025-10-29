document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const message = document.getElementById('message').value;

      const subject = 'Nouveau message depuis le site SAC3';
      const body = `Nom: ${name}%0D%0AEmail: ${email}%0D%0ATéléphone: ${phone}%0D%0A%0D%0AMessage:%0D%0A${message}`;

      window.location.href = `mailto:bienvenueboswa@gmail.com?subject=${subject}&body=${body}`;

      alert('Votre client de messagerie va s\'ouvrir. Si cela ne fonctionne pas, veuillez nous contacter directement à bienvenueboswa@gmail.com');

      contactForm.reset();
    });
  }

  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      if (this.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
});
