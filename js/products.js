// Products Database
const productsDB = {
    'arte-diseno': [
        { id: 1, name: 'Acuarelas Profesionales Set 24', brand: 'Faber-Castell', price: 45.90, category: 'arte-diseno', icon: '🎨', image: 'images/acuarelas.jpg' },
        { id: 2, name: 'Block de Dibujo A3', brand: 'Canson', price: 22.50, category: 'arte-diseno', icon: '📝', image: 'images/block-dibujo.jpg' },
        { id: 3, name: 'Lápices de Colores x36', brand: 'Prismacolor', price: 89.90, category: 'arte-diseno', icon: '✏️', image: 'images/lapices-colores.jpg' },
        { id: 4, name: 'Pinceles Set x12', brand: 'Da Vinci', price: 65.00, category: 'arte-diseno', icon: '🖌️', image: 'images/pinceles.png' },
        { id: 5, name: 'Témperas x12 colores', brand: 'Artesco', price: 28.90, category: 'arte-diseno', icon: '🎨', image: 'images/temperas.jpg' },
        { id: 6, name: 'Plastilina Set x10', brand: 'Play-Doh', price: 15.90, category: 'arte-diseno', icon: '🧱', image: 'images/plastilina.jpg' },
        { id: 7, name: 'Marcadores Permanentes x24', brand: 'Sharpie', price: 42.00, category: 'arte-diseno', icon: '🖊️', image: 'images/marcadores.webp' },
        { id: 8, name: 'Cartulina de Colores x50', brand: 'Copy-Lar', price: 18.50, category: 'arte-diseno', icon: '📄', image: 'images/cartulina.jpeg' }
    ],
    'utiles': [
        { id: 9, name: 'Cuaderno Cuadriculado A4', brand: 'Loro', price: 8.50, category: 'utiles', icon: '📓', image: 'images/cuaderno.png' },
        { id: 10, name: 'Lapiceros Azul x12', brand: 'Faber', price: 12.00, category: 'utiles', icon: '🖊️', image: 'images/lapiceros.webp' },
        { id: 11, name: 'Corrector Líquido', brand: 'Liquid Paper', price: 4.50, category: 'utiles', icon: '⚪', image: 'images/corrector.jpeg' },
        { id: 12, name: 'Borrador Blanco x3', brand: 'Artesco', price: 3.00, category: 'utiles', icon: '◻️', image: 'images/borrador.jpg' },
        { id: 13, name: 'Tajador Metálico', brand: 'Maped', price: 5.90, category: 'utiles', icon: '⚙️', image: 'images/tajador.webp' },
        { id: 14, name: 'Regla 30cm', brand: 'Artesco', price: 2.50, category: 'utiles', icon: '📏', image: 'images/regla.jpeg' },
        { id: 15, name: 'Compás Escolar', brand: 'Staedtler', price: 18.90, category: 'utiles', icon: '📐', image: 'images/compas.jpg' },
        { id: 16, name: 'Tijera Escolar', brand: 'Maped', price: 6.90, category: 'utiles', icon: '✂️', image: 'images/tijera.jpg' }
    ],
    'editorial': [
        { id: 17, name: 'Libro Matemática 5° Primaria', brand: 'Santillana', price: 58.00, category: 'editorial', icon: '📚', image: 'images/libro-matematica.png' },
        { id: 18, name: 'Diccionario Español', brand: 'RAE', price: 72.00, category: 'editorial', icon: '📖', image: 'images/diccionario.webp' },
        { id: 19, name: 'Atlas Mundial', brand: 'National Geographic', price: 95.00, category: 'editorial', icon: '🗺️', image: 'images/atlas.jpeg' },
        { id: 20, name: 'Libro Comunicación 6° Primaria', brand: 'Norma', price: 62.00, category: 'editorial', icon: '📕', image: 'images/libro-comunicacion.jpeg' },
        { id: 21, name: 'Guía de Ciencias Naturales', brand: 'Lumbreras', price: 48.00, category: 'editorial', icon: '🔬', image: 'images/guia-ciencias.jpeg' },
        { id: 22, name: 'Libro Personal Social 4° Primaria', brand: 'Santillana', price: 55.00, category: 'editorial', icon: '🌍', image: 'images/libro-social.jpeg' }
    ],
    'mochilas': [
        { id: 23, name: 'Mochila Escolar 3D', brand: 'Totto', price: 120.00, category: 'mochilas', icon: '🎒', image: 'images/mochila-3d.jpeg' },
        { id: 24, name: 'Lonchera Térmica', brand: 'Thermos', price: 45.00, category: 'mochilas', icon: '🍱', image: 'images/lonchera-termica.jpg' },
        { id: 25, name: 'Mochila con Ruedas', brand: 'Samsonite', price: 180.00, category: 'mochilas', icon: '🎒', image: 'images/mochila-ruedas.jpeg' },
        { id: 26, name: 'Lonchera Diseños Infantiles', brand: 'Disney', price: 38.00, category: 'mochilas', icon: '🍱', image: 'images/lonchera-disney.jpeg' },
        { id: 27, name: 'Mochila Deportiva', brand: 'Nike', price: 95.00, category: 'mochilas', icon: '⚽', image: 'images/mochila-deportiva.webp' },
        { id: 28, name: 'Cartuchera 3 Pisos', brand: 'Totto', price: 28.00, category: 'mochilas', icon: '📦', image: 'images/cartuchera.webp' }
    ],
    'bazar': [
        { id: 29, name: 'Goma Escarchada x6', brand: 'UHU', price: 12.50, category: 'bazar', icon: '💎', image: 'images/goma-escarchada.webp' },
        { id: 30, name: 'Cinta Adhesiva x3', brand: 'Scotch', price: 8.90, category: 'bazar', icon: '📼', image: 'images/cinta-adhesiva.webp' },
        { id: 31, name: 'Pegamento Barra x12', brand: 'Pritt', price: 24.00, category: 'bazar', icon: '📏', image: 'images/pegamento.jpeg' },
        { id: 32, name: 'Papel Bond A4 x500', brand: 'Chamex', price: 18.50, category: 'bazar', icon: '📄', image: 'images/papel-bond.jpeg' },
        { id: 33, name: 'Folder Manila A4 x50', brand: 'Vinifan', price: 15.00, category: 'bazar', icon: '📁', image: 'images/folder.png' },
        { id: 34, name: 'Clips Metálicos x100', brand: 'Artesco', price: 4.50, category: 'bazar', icon: '📎', image: 'images/clips.png' }
    ],
    'didacticos': [
        { id: 35, name: 'Bloques de Construcción', brand: 'Lego', price: 85.00, category: 'didacticos', icon: '🧱', image: 'images/bloques-lego.jpg' },
        { id: 36, name: 'Tangram 20x20cm', brand: 'Didacti', price: 15.00, category: 'didacticos', icon: '🔷', image: 'images/tangram.webp' },
        { id: 37, name: 'Ábaco Escolar', brand: 'Melissa & Doug', price: 32.00, category: 'didacticos', icon: '🧮', image: 'images/abaco.jpg' },
        { id: 38, name: 'Rompecabezas 500 piezas', brand: 'Ravensburger', price: 42.00, category: 'didacticos', icon: '🧩', image: 'images/rompecabezas.webp' },
        { id: 39, name: 'Geoplano con Ligas', brand: 'Learning Resources', price: 28.00, category: 'didacticos', icon: '📊', image: 'images/geoplano.jpg' },
        { id: 40, name: 'Alfabeto Magnético', brand: 'Melissa & Doug', price: 38.00, category: 'didacticos', icon: '🔤', image: 'images/alfabeto-magnetico.webp' }
    ]
};

// Get all products
function getAllProducts() {
    return Object.values(productsDB).flat();
}

// Get products by category
function getProductsByCategory(category) {
    return productsDB[category] || [];
}

// Filter products
function filterProducts(products, searchTerm, priceRange, subcategories) {
    return products.filter(product => {
        const matchesSearch = !searchTerm || 
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.brand.toLowerCase().includes(searchTerm.toLowerCase());
        
        const matchesPrice = !priceRange || product.price <= priceRange;
        
        return matchesSearch && matchesPrice;
    });
}