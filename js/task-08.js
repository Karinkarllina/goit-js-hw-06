const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onFormSubmit)



function onFormSubmit(event) {
    event.preventDefault();
    const {
    elements: { email, password }
    } = event.currentTarget;
    
    if (email.value === '' || password.value === '') {
        alert('Будь ласка, заповніть всі поля форми!')
    } 
    else {
        const formData = {
            email: email.value,
            password: password.value,
        }
        console.log(`Login: ${formData.email}, Password: ${formData.password}`);
    }
    event.currentTarget.reset();
}
