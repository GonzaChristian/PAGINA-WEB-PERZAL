// Render Functions
function renderHome() {
    const offers = getAllProducts().slice(0, 5);
    const newProducts = getAllProducts().slice(5, 10);

    return `
        <!-- Carrusel de imágenes -->
        <div class="carousel-container">
            <div class="carousel-slide active" style="background-image: url('images/banner1.jpg');">
                <div class="carousel-overlay"></div>
                <div class="carousel-content">
                    <h1>Bienvenido a Perzal</h1>
                    <p>Tu librería de confianza con los mejores productos escolares y de oficina</p>
                    <button class="btn-carousel" onclick="window.location.hash='category/utiles'">Ver Útiles</button>
                </div>
            </div>
            <div class="carousel-slide" style="background-image: url('images/banner2.jpg');">
                <div class="carousel-overlay"></div>
                <div class="carousel-content">
                    <h1>¡Nuevos Ingresos!</h1>
                    <p>Descubre los últimos productos que llegaron a nuestra tienda</p>
                    <button class="btn-carousel" onclick="window.location.hash='category/arte-diseno'">Ver Arte y Diseño</button>
                </div>
            </div>
            <div class="carousel-slide" style="background-image: url('images/banner3.jpg');">
                <div class="carousel-overlay"></div>
                <div class="carousel-content">
                    <h1>Ofertas Especiales</h1>
                    <p>Hasta 30% de descuento en productos seleccionados</p>
                    <button class="btn-carousel" onclick="window.location.hash='category/editorial'">Ver Editorial</button>
                </div>
            </div>
            <div class="carousel-slide" style="background-image: url('images/banner4.jpg');">
                <div class="carousel-overlay"></div>
                <div class="carousel-content">
                    <h1>Mochilas y Loncheras</h1>
                    <p>Prepárate para el regreso a clases con estilo</p>
                    <button class="btn-carousel" onclick="window.location.hash='category/mochilas'">Ver Mochilas</button>
                </div>
            </div>
            
            <!-- Controles del carrusel -->
            <button class="carousel-control prev" onclick="changeSlide(-1)">❮</button>
            <button class="carousel-control next" onclick="changeSlide(1)">❯</button>
            
            <!-- Indicadores -->
            <div class="carousel-indicators">
                <span class="dot active" onclick="currentSlide(0)"></span>
                <span class="dot" onclick="currentSlide(1)"></span>
                <span class="dot" onclick="currentSlide(2)"></span>
                <span class="dot" onclick="currentSlide(3)"></span>
            </div>
        </div>

        <section class="offers-section">
            <h2 class="section-title">OFERTAS DE ESTE MES</h2>
            <div class="products-grid">
                ${offers.map(product => `
                    <div class="product-card">
                        <div class="product-image">
                            <img src="${product.image}" 
                                 alt="${product.name}" 
                                 onerror="this.style.display='none'; this.parentElement.innerHTML='${product.icon}';"
                                 style="width:100%; height:100%; object-fit:cover; border-radius:4px;">
                        </div>
                        <div class="product-brand">${product.brand}</div>
                        <div class="product-name">${product.name}</div>
                        <div class="product-price">
                            <span class="old-price">S/ ${(product.price * 1.3).toFixed(2)}</span>
                            S/ ${product.price.toFixed(2)}
                        </div>
                        <button class="btn-add-cart" onclick="addToCart(${product.id})">Añadir al carrito</button>
                    </div>
                `).join('')}
            </div>
        </section>

        <section class="new-products-section">
            <h2 class="section-title">NUEVOS INGRESOS</h2>
            <div class="products-grid">
                ${newProducts.map(product => `
                    <div class="product-card">
                        <div class="product-image">
                            <img src="${product.image}" 
                                 alt="${product.name}" 
                                 onerror="this.style.display='none'; this.parentElement.innerHTML='${product.icon}';"
                                 style="width:100%; height:100%; object-fit:cover; border-radius:4px;">
                        </div>
                        <div class="product-brand">${product.brand}</div>
                        <div class="product-name">${product.name}</div>
                        <div class="product-price">S/ ${product.price.toFixed(2)}</div>
                        <button class="btn-add-cart" onclick="addToCart(${product.id})">Añadir al carrito</button>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
}

function renderCategoryPage(category) {
    const categoryNames = {
        'arte-diseno': 'ARTE Y DISEÑO',
        'utiles': 'ÚTILES',
        'editorial': 'EDITORIAL',
        'mochilas': 'MOCHILAS Y LONCHERAS',
        'bazar': 'BAZAR',
        'didacticos': 'DIDÁCTICOS'
    };

    const products = getProductsByCategory(category);
    const brands = [...new Set(products.map(p => p.brand))];

    return `
        <div class="category-header">
            <h1>${categoryNames[category]}</h1>
        </div>
        <div class="products-page">
            <aside class="filters-sidebar">
                <div class="filter-section">
                    <h3>FILTRAR POR:</h3>
                    <label>Precio</label>
                    <input type="range" min="0" max="200" value="200" class="price-slider" id="priceFilter">
                    <div>Hasta S/ <span id="priceValue">200</span></div>
                </div>
                <div class="filter-section">
                    <h3>Subcategoría</h3>
                    ${brands.map(brand => `
                        <div class="filter-option">
                            <input type="checkbox" value="${brand}" class="brand-filter">
                            <label>${brand}</label>
                        </div>
                    `).join('')}
                </div>
            </aside>
            <div>
                <div class="products-grid" id="productsGrid">
                    ${products.map(product => `
                        <div class="product-card">
                            <div class="product-image">
                                <img src="${product.image}" 
                                     alt="${product.name}" 
                                     onerror="this.style.display='none'; this.parentElement.innerHTML='${product.icon}';"
                                     style="width:100%; height:100%; object-fit:cover; border-radius:4px;">
                            </div>
                            <div class="product-brand">${product.brand}</div>
                            <div class="product-name">${product.name}</div>
                            <div class="product-price">S/ ${product.price.toFixed(2)}</div>
                            <button class="btn-add-cart" onclick="addToCart(${product.id})">Añadir al carrito</button>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function renderLoginPage() {
    return `
        <div class="login-page">
            <div class="login-header">
                <h1>INICIAR SESIÓN</h1>
            </div>
            <div class="login-container">
                <div class="login-section">
                    <h2>ACCEDER</h2>
                    <form id="loginForm">
                        <div class="form-group">
                            <label>Nombre usuario o correo electrónico *</label>
                            <input type="text" id="loginUsername" required>
                        </div>
                        <div class="form-group">
                            <label>Contraseña *</label>
                            <input type="password" id="loginPassword" required>
                        </div>
                        <div class="form-group">
                            <input type="checkbox" id="rememberMe">
                            <label for="rememberMe">Recuérdame</label>
                        </div>
                        <button type="submit" class="btn-submit">ACCESO</button>
                        <a href="#" class="forgot-password">¿Olvidaste la contraseña?</a>
                    </form>
                </div>
                <div class="register-section">
                    <h2>REGISTRARSE</h2>
                    <form id="registerForm">
                        <div class="form-group">
                            <label>Dirección de correo electrónico *</label>
                            <input type="email" id="registerEmail" required>
                            <small>Se enviará un enlace a tu dirección de correo electrónico para establecer una nueva contraseña.</small>
                        </div>
                        <div class="form-group">
                            <small>Sus datos personales se utilizarán para respaldar su experiencia en este sitio web, para administrar el acceso a su cuenta y para otros fines descritos en nuestra política de privacidad.</small>
                        </div>
                        <button type="submit" class="btn-submit">REGISTRARSE</button>
                    </form>
                </div>
            </div>
        </div>
    `;
}

function renderStoresPage() {
    return `
        <div class="stores-header">
            <h1 class="section-title">NUESTRAS TIENDAS</h1>
        </div>
        <div class="store-card">
            <h2>TIENDA PRINCIPAL - SAN ISIDRO</h2>
            <div class="store-info">
                <div class="store-info-item">
                    <span>📍</span>
                    <span>Av. Javier Prado Este 2465, San Isidro, Lima</span>
                </div>
                <div class="store-info-item">
                    <span>📱</span>
                    <span>Celular: 986 913 482</span>
                </div>
                <div class="store-info-item">
                    <span>🕐</span>
                    <span>Horario de Atención: Lun-Vie 9:00-19:00, Sáb 9:00-14:00</span>
                </div>
            </div>
            <div id="map1" class="store-map"></div>
        </div>
        <div class="store-card">
            <h2>TIENDA MIRAFLORES</h2>
            <div class="store-info">
                <div class="store-info-item">
                    <span>📍</span>
                    <span>Av. Larco 1301, Miraflores, Lima</span>
                </div>
                <div class="store-info-item">
                    <span>📱</span>
                    <span>Celular: 940 242 094</span>
                </div>
                <div class="store-info-item">
                    <span>🕐</span>
                    <span>Horario de Atención: Lun-Dom 10:00-21:00</span>
                </div>
            </div>
            <div id="map2" class="store-map"></div>
        </div>
    `;
}

// Setup Filters
function setupFilters(category) {
    const priceFilter = document.getElementById('priceFilter');
    const priceValue = document.getElementById('priceValue');
    const brandFilters = document.querySelectorAll('.brand-filter');

    if (priceFilter) {
        priceFilter.addEventListener('input', (e) => {
            priceValue.textContent = e.target.value;
            applyFilters(category);
        });
    }

    brandFilters.forEach(filter => {
        filter.addEventListener('change', () => applyFilters(category));
    });
}

function applyFilters(category) {
    const priceFilter = document.getElementById('priceFilter');
    const brandFilters = document.querySelectorAll('.brand-filter:checked');
    const searchTerm = document.getElementById('searchInput').value;

    let products = getProductsByCategory(category);

    if (priceFilter) {
        products = products.filter(p => p.price <= parseFloat(priceFilter.value));
    }

    if (brandFilters.length > 0) {
        const selectedBrands = Array.from(brandFilters).map(f => f.value);
        products = products.filter(p => selectedBrands.includes(p.brand));
    }

    if (searchTerm) {
        products = filterProducts(products, searchTerm);
    }

    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" 
                     alt="${product.name}" 
                     onerror="this.style.display='none'; this.parentElement.innerHTML='${product.icon}';"
                     style="width:100%; height:100%; object-fit:cover; border-radius:4px;">
            </div>
            <div class="product-brand">${product.brand}</div>
            <div class="product-name">${product.name}</div>
            <div class="product-price">S/ ${product.price.toFixed(2)}</div>
            <button class="btn-add-cart" onclick="addToCart(${product.id})">Añadir al carrito</button>
        </div>
    `).join('');
}

// Initialize Google Maps
function initMaps() {
    const map1 = document.getElementById('map1');
    const map2 = document.getElementById('map2');

    if (map1) {
        map1.innerHTML = `
            <iframe 
                width="100%" 
                height="400" 
                frameborder="0" 
                style="border:0;border-radius:8px;" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.3718957709657!2d-77.00445597419038!3d-12.086673188153265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7d30196c5e9%3A0xbceee46e31a1a968!2sAv.%20Javier%20Prado%20Este%202465%2C%20San%20Borja%2015021!5e0!3m2!1ses!2spe!4v1765436116721!5m2!1ses!2spe"
                allowfullscreen>
            </iframe>
        `;
    }

    if (map2) {
        map2.innerHTML = `
            <iframe 
                width="100%" 
                height="400" 
                frameborder="0" 
                style="border:0;border-radius:8px;" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.7211132151037!2d-77.03207662418977!3d-12.131224388112296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b7e1c44d21db%3A0x84c5e34edb4f7b28!2sAv.%20Jos%C3%A9%20Larco%201301%2C%20Miraflores%2015074!5e0!3m2!1ses!2spe!4v1765436252969!5m2!1ses!2spe" 
                allowfullscreen>
                
            </iframe>
        `;
    }
}