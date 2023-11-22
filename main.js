var users = [ 
    { username: 'admin', password:"admin" }
];

function showSignupForm() {
    document.getElementById('signupForm').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
}

function showLoginForm() {
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}
var array=[]
function signup() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    var array= JSON.parse(localStorage.getItem("user"))
    // Check if the username is already taken
    // if (users.some(user => user.username === username)) {
    //     alert('Username already taken. Please choose another username.');
    //     return;
    // }

    // Add the new user to the array
array.push({ username:username, password:password })
    localStorage.setItem("user",JSON.stringify(array))
    users.push({ username:username, password:password });
    console.log(users);

    // Redirect to another page after signup
    window.location.href = 'index2.html'; 
}
var user
function login() {
    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;
var array= JSON.parse(localStorage.getItem("user"))
    // Check if the entered credentials match any user in the array
    // const user = users.find(u => u.username === loginUsername && u.password === loginPassword);
for (var i=0;i<array.length;i++){
if(array[i].username===loginUsername && array[i].password===loginPassword){
 user=array[i]
}
}
    if (user) {
        alert('Login successful!');
        // Redirect to another page after login
        window.location.href = 'index2.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }

    // Clear the login form
    document.getElementById('loginUsername').value = '';
    document.getElementById('loginPassword').value = '';
}
