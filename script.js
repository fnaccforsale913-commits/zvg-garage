window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});

document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service-select').value;
    
    const textMessage = "Salut ZVG Garage! Numele meu este " + name + ". Doresc o programare pentru serviciul: " + service + ". Numarul meu de contact este: " + phone;
    
    // Folosim link-ul oficial API pentru a evita eroarea pe iPhone
    window.location.href = "https://whatsapp.com" + encodeURIComponent(textMessage);
});
