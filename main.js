var userData = [
    {
        username: 'sam',
        password: '1234'
    },
    {
        username: 'james',
        password: '5678'
    },
    {
        username: 'sam',
        password: '91011'
    }
];

var submitBtn = document.getElementById('btn').addEventListener('click', (event) => {
    event.preventDefault();

    var userName = document.getElementById('userName').value;
    var passWord = document.getElementById('passWord').value;

    var isLoggedIn = false;

    for (var i = 0; i < userData.length; i++) {
        if (userName === userData[i].username && passWord === userData[i].password) {
            isLoggedIn = true;
            break; // Exit the loop if user is found
        }
    }

    if (isLoggedIn) {
        window.location.href = 'signup.html'; // Redirect to the desired page when logged in
    } else {
        alert('Wrong username or password. Please try again.'); // Show error message and prompt the user to try again
    }
});
