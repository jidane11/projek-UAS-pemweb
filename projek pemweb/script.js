document.addEventListener('DOMContentLoaded', () => {
    // 1. Dark Mode Toggle
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // Check local storage
    if (localStorage.getItem('theme') === 'dark') {
        body.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
    }

    themeToggle.addEventListener('click', () => {
        if (body.getAttribute('data-theme') === 'dark') {
            body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            themeToggle.innerHTML = '<i class="bi bi-moon-fill"></i>';
        } else {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
        }
    });

    // 2. Form Validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (validateForm()) {
                alert('Pesan berhasil dikirim!');
                contactForm.reset();
            }
        });
    }

    // 3. Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg');
            navbar.style.opacity = '0.95';
        } else {
            navbar.classList.remove('shadow-lg');
            navbar.style.opacity = '1';
        }
    });

    // 4. Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 5. Dynamic Year in Footer
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 6. Inject Social Links (External Links Requirement)
    const footerCols = document.querySelectorAll('.footer-custom .col-lg-3');
    if (footerCols.length > 0) {
        const lastCol = footerCols[footerCols.length - 1]; // Contact column
        const socialDiv = document.createElement('div');
        socialDiv.className = 'mt-3';
        socialDiv.innerHTML = `
            <h5 class="text-uppercase mb-3">Follow Us</h5>
            <a href="https://instagram.com" target="_blank" class="text-white me-3 fs-5"><i class="bi bi-instagram"></i></a>
            <a href="https://facebook.com" target="_blank" class="text-white me-3 fs-5"><i class="bi bi-facebook"></i></a>
            <a href="https://youtube.com" target="_blank" class="text-white fs-5"><i class="bi bi-youtube"></i></a>
        `;
        lastCol.appendChild(socialDiv);
    }
});

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name.length < 3) {
        alert('Nama harus lebih dari 3 karakter');
        return false;
    }
    
    if (!email.includes('@')) {
        alert('Email tidak valid');
        return false;
    }
    
    if (message.length < 10) {
        alert('Pesan harus lebih dari 10 karakter');
        return false;
    }
    
    return true;
}
