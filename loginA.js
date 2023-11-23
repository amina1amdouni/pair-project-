 // Array to store user information
 const users = [ { username: 'admin', password:"admin" }];

   
 var user
function login() {
 const loginUsername = document.getElementById('loginUsername').value;
 const loginPassword = document.getElementById('loginPassword').value;
var array= JSON.parse(localStorage.getItem("user"))

for (var i=0;i<array.length;i++){
if(array[i].username===loginUsername && array[i].password===loginPassword){
user=array[i]
}
}
 if (user) {
     alert('Login successful!');
     // Redirect to another page after login
     window.location.href = 'page2A.html';
 } else {
     alert('Invalid username or password. Please try again.');
 }

 // Clear the login form
 document.getElementById('loginUsername').value = '';
 document.getElementById('loginPassword').value = '';
}
 var array=[]
 function signup() {
     const username = document.getElementById('signupUsername').value;
     const password = document.getElementById('signupPassword').value;
     const userType = document.querySelector('input[name="userType"]:checked').value;
     var array= JSON.parse(localStorage.getItem("user"))
     // Check if the username is already taken
     if (users.some(u => u.username === username)) {
         alert('Username is already taken. Please choose another.');
         return;
     }

     // Add user to the array

 array.push({ username:username, password:password })
 localStorage.setItem("user",JSON.stringify(array))
 users.push({ username:username, password:password });
 if(userType==="recruiter"){
    window.location.href = 'recruter.html'


 }
 else{ window.location.href = 'page2A.html';}
 console.log(users);

     alert(`Sign up successful as a ${userType}!`);
     // Redirect to another page
 
 }

 // Toggle between login and signup forms
 function toggleForms() {
     const loginForm = document.getElementById('loginForm');
     const signupForm = document.getElementById('signupForm');

     if (loginForm.style.display === 'none') {
         loginForm.style.display = 'block';
         signupForm.style.display = 'none';}

      else {
          loginForm.style.display = 'none';
          signupForm.style.display = 'block';
     }
    }