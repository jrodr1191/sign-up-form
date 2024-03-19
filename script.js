const mismatch = document.querySelector('.not-match');
const password = document.querySelector('#user-password');
const confirmPassword = document.querySelector('#confirm-password');
const createAccount = document.querySelector('.create');

createAccount.addEventListener('click', (event) => {
    if(password.value !== confirmPassword.value) {
        mismatch.textContent = '* Passwords do not match';
        confirmPassword.style.borderColor = 'red';
        password.style.borderColor = 'red';
        event.preventDefault();
    }
});

mismatch.style.fontSize = '14px';
mismatch.style.color = "red";
mismatch.style.margin = "-6px 0 0 12px";