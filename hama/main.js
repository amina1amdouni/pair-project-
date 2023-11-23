
function validateLogin(event) {
    event.preventDefault()
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
if ( username === 'amina' && password === '123456') {
    alert('Login successful!')
    window.open('http://127.0.0.1:3000/mainPage.html', '_blank');
} else {
    //alert('Invalid username or password. Please try again.');
}
    if (username === 'mohamed' && password === '00000') {
        alert('Login successful!')
        window.open('https://www.tunisietravail.net/category/concours-fonction-publiques/', '_blank');
    } else {
        alert('Invalid username or password. Please try again.');
    }
}
