document.addEventListener('DOMContentLoaded', () => {
    // Selectores

    const inputName = document.querySelector('#name');
    const inputLastName = document.querySelector('#last-name');
    const inputEmail = document.querySelector('#email');
    const queryType = document.querySelector('.select-query-type');
    const enquiryRadio = document.querySelector('#general-enquiry');
    const supportRadio = document.querySelector('#support-request');
    const inputMessage = document.querySelector('#message');
    const consentCheck = document.querySelector('#consent-input');
    const submitButton = document.querySelector('.submit-button');
    const form = document.querySelector('#form');

    inputName.addEventListener('input', inputValueData);
    inputLastName.addEventListener('input', inputValueData);
    inputEmail.addEventListener('input', inputValueData);
    inputMessage.addEventListener('input', inputValueData);
    enquiryRadio.addEventListener('input', inputValueData);
    supportRadio.addEventListener('input', inputValueData);
    consentCheck.addEventListener('change', inputValueData);

    const inputValues = {
        name: '',
        lastName: '',
        email: '',
        message: '',
        enquiry: '',
        support: '',
        consent: ''
    };

    form.addEventListener('submit', validateForm);

    function validateForm(e) {
        e.preventDefault();       

        let validForm = true;
        
        document.querySelectorAll('.alert').forEach(alert => alert.remove());        

        if (inputValues.name === '') {
            alertMessage('This field is required', inputName);
            validForm = false;
        }
        
        if (inputValues.lastName === '') {
            alertMessage('This field is required', inputLastName);
            validForm = false;
        }

        if (inputEmail.value.trim() === '' || !validateEmail(inputEmail.value)) {
            alertMessage('Please enter a valid email address', inputEmail);
            validForm = false;
        }

        if (!enquiryRadio.checked && !supportRadio.checked) {
            alertMessage('Please select a query type', queryType);
            validForm = false;
        }

        if (inputValues.message === '') {
            alertMessage('This field is required', inputMessage);
            validForm = false;
        }

        if (!inputValues.consent) {
            alertMessage('To submit this form, please consent to being contacted', consentCheck.parentNode);
            validForm = false;
        }

        if (validForm) {

           submitButton.addEventListener('click', ()=>{

            const messageSent = document.querySelector('.message-sent');

            messageSent.classList.remove('hidden');

            setTimeout(() => {
            messageSent.classList.add('hidden');                
            }, 5000);

           });
           
        }
    }

    function inputValueData(e) {

            inputValues[e.target.name] = e.target.value;
    }

    function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
}


    function alertMessage(message, reference) {
        const alert = document.createElement('P');
        alert.classList.add('text-red', 'alert', 'font-medium');
        alert.textContent = message;

        reference.parentNode.appendChild(alert);

        reference.classList.add('border-red');

        setTimeout(() => {
            alert.remove();
            reference.classList.remove('border-red');
        }, 5000);
    }
});


