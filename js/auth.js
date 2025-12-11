// Authentication Functions
function setupLoginForms() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('loginUsername').value;
            const password = document.getElementById('loginPassword').value;

            const user = storage.users.find(u => 
                (u.email === username || u.username === username) && u.password === password
            );

            if (user) {
                storage.currentUser = user;
                saveToStorage();
                alert('¡Inicio de sesión exitoso!');
                updateUserUI();
                window.location.hash = 'home';
            } else {
                alert('Usuario o contraseña incorrectos');
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('registerEmail').value;

            if (storage.users.find(u => u.email === email)) {
                alert('Este correo ya está registrado');
                return;
            }

            const newUser = {
                id: Date.now(),
                email: email,
                username: email.split('@')[0],
                password: 'password123'
            };

            storage.users.push(newUser);
            saveToStorage();
            alert('¡Registro exitoso! Tu contraseña temporal es: password123');
            document.getElementById('registerForm').reset();
        });
    }
}

function updateUserUI() {
    const loginBtn = document.getElementById('loginBtn');
    const userBtn = document.getElementById('userBtn');

    if (storage.currentUser) {
        loginBtn.style.display = 'none';
        userBtn.style.display = 'block';
    } else {
        loginBtn.style.display = 'block';
        userBtn.style.display = 'none';
    }
}