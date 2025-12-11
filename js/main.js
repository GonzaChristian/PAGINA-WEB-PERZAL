// Event Listeners and Initialization
document.addEventListener('DOMContentLoaded', function() {
    
    // Login button
    document.getElementById('loginBtn').addEventListener('click', () => {
        window.location.hash = 'login';
    });

    // Cart button
    document.getElementById('cartBtn').addEventListener('click', () => {
        document.getElementById('cartModal').classList.add('active');
    });

    // Close cart
    document.getElementById('closeCart').addEventListener('click', () => {
        document.getElementById('cartModal').classList.remove('active');
    });

    // User button (logout)
    document.getElementById('userBtn').addEventListener('click', () => {
        if (confirm('¿Deseas cerrar sesión?')) {
            storage.currentUser = null;
            saveToStorage();
            updateUserUI();
            alert('Sesión cerrada exitosamente');
        }
    });

    // Search functionality
    document.getElementById('searchInput').addEventListener('input', (e) => {
        const hash = window.location.hash.slice(1);
        if (hash.startsWith('category/')) {
            const category = hash.split('/')[1];
            applyFilters(category);
        } else if (hash === 'home' || !hash) {
            const searchTerm = e.target.value.toLowerCase();
            if (searchTerm.length > 2) {
                const allProducts = getAllProducts();
                const results = filterProducts(allProducts, searchTerm);
                if (results.length > 0) {
                    const category = results[0].category;
                    window.location.hash = `category/${category}`;
                }
            }
        }
    });

    // Close modal when clicking outside
    document.getElementById('cartModal').addEventListener('click', (e) => {
        if (e.target.id === 'cartModal') {
            document.getElementById('cartModal').classList.remove('active');
        }
    });

    // Initialize
    window.addEventListener('hashchange', navigate);
    navigate();
    updateUserUI();
    updateCartUI();
});

// Navigation function
function navigate() {
    const hash = window.location.hash.slice(1) || 'home';
    const mainContent = document.getElementById('mainContent');
    
    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + hash) {
            link.classList.add('active');
        }
    });

    // Clear any existing carousel interval
    if (window.carouselInterval) {
        clearInterval(window.carouselInterval);
    }

    if (hash === 'home') {
        mainContent.innerHTML = renderHome();
        // Inicializar el carrusel después de renderizar
        setTimeout(() => {
            initCarousel();
        }, 100);
    } else if (hash.startsWith('category/')) {
        const category = hash.split('/')[1];
        mainContent.innerHTML = renderCategoryPage(category);
        setupFilters(category);
    } else if (hash === 'login') {
        mainContent.innerHTML = renderLoginPage();
        setupLoginForms();
    } else if (hash === 'stores') {
        mainContent.innerHTML = renderStoresPage();
        initMaps();
    }
}

// Add animation for notification
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);