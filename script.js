document.addEventListener('DOMContentLoaded', () => {
    checkLoginStatus();
});

function login(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin123') {
        localStorage.setItem('loggedInUser', username);
        checkLoginStatus();
    } else {
        document.getElementById('error-message').textContent = 'Invalid username or password';
    }
}

function logout() {
    localStorage.removeItem('loggedInUser');
    checkLoginStatus();
}

function checkLoginStatus() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    const loginForm = document.getElementById('login-form');
    const logoutForm = document.getElementById('logout-form');
    const usernameDisplay = document.getElementById('username-display');

    if (loggedInUser) {
        loginForm.classList.add('hidden');
        logoutForm.classList.remove('hidden');
        usernameDisplay.textContent = loggedInUser;
    } else {
        loginForm.classList.remove('hidden');
        logoutForm.classList.add('hidden');
        document.getElementById('error-message').textContent = '';
    }
}
