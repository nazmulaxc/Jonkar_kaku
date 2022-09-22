document.getElementById('btn').addEventListener('click', function () {
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    if (email.value=='nazmulaxc@gmail.com' && password.value == '1234') {
        window.location.href = "success.html";
    } else {
        document.querySelector('p').innerHTML = "User email or password invalids"
    }
});




















