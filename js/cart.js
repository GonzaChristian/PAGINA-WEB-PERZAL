// Simulated storage (replace with localStorage in production)
const storage = {
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    users: JSON.parse(localStorage.getItem('users')) || [],
    currentUser: JSON.parse(localStorage.getItem('currentUser')) || null
};

// Save to localStorage
function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(storage.cart));
    localStorage.setItem('users', JSON.stringify(storage.users));
    localStorage.setItem('currentUser', JSON.stringify(storage.currentUser));
}

// Cart Functions
function addToCart(productId) {
    const allProducts = getAllProducts();
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;

    const existingItem = storage.cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        storage.cart.push({ ...product, quantity: 1 });
    }
    saveToStorage();
    updateCartUI();
    
    // Show feedback
    showNotification('Producto agregado al carrito');
}

function removeFromCart(productId) {
    storage.cart = storage.cart.filter(item => item.id !== productId);
    saveToStorage();
    updateCartUI();
}

function updateQuantity(productId, change) {
    const item = storage.cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveToStorage();
            updateCartUI();
        }
    }
}

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const totalItems = storage.cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    if (storage.cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align:center;padding:2rem;color:#7f8c8d;">Tu carrito está vacío</p>';
        cartTotal.textContent = '0.00';
        return;
    }

    cartItems.innerHTML = storage.cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image}" 
                     alt="${item.name}" 
                     onerror="this.style.display='none'; this.parentElement.innerHTML='${item.icon}';"
                     style="width:100%; height:100%; object-fit:cover; border-radius:4px;">
            </div>
            <div class="cart-item-info">
                <div class="product-name">${item.name}</div>
                <div class="product-brand">${item.brand}</div>
                <div class="product-price">S/ ${item.price.toFixed(2)}</div>
            </div>
            <div class="cart-item-actions">
                <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                <button class="qty-btn" style="background:#e74c3c;" onclick="removeFromCart(${item.id})">🗑️</button>
            </div>
        </div>
    `).join('');

    const total = storage.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toFixed(2);
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #27ae60;
        color: white;
        padding: 1rem 2rem;
        border-radius: 4px;
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 2000);
}