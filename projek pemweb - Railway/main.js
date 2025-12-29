// Dark Mode Toggle
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const htmlElement = document.documentElement;

    // Load saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        darkModeToggle.textContent = '☀️';
    }

    // Toggle dark mode
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            darkModeToggle.textContent = isDark ? '☀️' : '🌙';
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }

    // Form Validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            // Validation
            const errors = [];
            if (!name) errors.push('Nama tidak boleh kosong');
            if (!email) errors.push('Email tidak boleh kosong');
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Email tidak valid');
            if (!subject) errors.push('Subjek tidak boleh kosong');
            if (!message) errors.push('Pesan tidak boleh kosong');

            // Display errors or submit
            const errorAlert = document.getElementById('formError');
            if (errors.length > 0) {
                errorAlert.innerHTML = errors.map(err => `<p>${err}</p>`).join('');
                errorAlert.style.display = 'block';
            } else {
                errorAlert.style.display = 'none';
                // Simulate form submission
                const successAlert = document.getElementById('formSuccess');
                successAlert.style.display = 'block';
                contactForm.reset();
                setTimeout(() => {
                    successAlert.style.display = 'none';
                }, 5000);
            }
        });
    }

    // Modal functionality for train details
    const trainModals = document.querySelectorAll('[data-bs-toggle="modal"]');
    trainModals.forEach(btn => {
        btn.addEventListener('click', function() {
            const trainType = this.getAttribute('data-train-type');
            console.log('Opening modal for train type:', trainType);
        });
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Add active class to current page link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});



