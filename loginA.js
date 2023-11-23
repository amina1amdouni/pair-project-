
var users = [];

var array = JSON.parse(localStorage.getItem("user")) || [];
users = array;

var user;

function login() {
    var loginUsername = document.getElementById('loginUsername').value;
    var loginPassword = document.getElementById('loginPassword').value;

    for (var i = 0; i < users.length; i++) {
        if (users[i].username === loginUsername && users[i].password === loginPassword) {
            user = users[i];
        }
    }

    if (user) {
        alert('Login successful!');
       
        window.location.href = 'page2A.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }

    
    document.getElementById('loginUsername').value = '';
    document.getElementById('loginPassword').value = '';
}

function signup() {
    var username = document.getElementById('signupUsername').value;
    var password = document.getElementById('signupPassword').value;
    var userType = document.querySelector('input[name="userType"]:checked').value;

    // Check if the username is already taken
    if (users.some(u => u.username === username)) {
        alert('Username is already taken. Please choose another.');
        return;
    }

   
    users.push({ username: username, password: password });
    localStorage.setItem("user", JSON.stringify(users));

    localStorage.setItem('current', JSON.stringify(username));

    if (userType === "recruiter") {
        window.location.href = 'recruiter.html';
    } else {
        window.location.href = 'page2A.html';
    }

    alert(`Sign up successful as a ${userType}!`);
}

function toggleForms() {
    var loginForm = document.getElementById('loginForm');
    var signupForm = document.getElementById('signupForm');

    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
    } else {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    }
}
