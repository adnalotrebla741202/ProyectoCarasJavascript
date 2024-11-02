document.addEventListener('DOMContentLoaded', () =>
{
    const form = document.querySelector('.form');

    const errorMessageContainer = document.createElement('div'); 
    errorMessageContainer.classList.add('error-message'); 

    form.addEventListener('submit', event =>
    {
        // Limpiar mensajes anteriores
        errorMessageContainer.innerHTML = ''; 
        form.appendChild(errorMessageContainer); 

        // Prevenir el envío del formulario
        event.preventDefault();
        
        // Limpiar mensajes de error previos
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(msg => msg.textContent = '');

        let isValid = true;

        // Validar nombre
        const name = document.getElementById('name').value;
        if (name.trim() === '') 
        {
            document.getElementById('name-error').textContent = 'El nombre es obligatorio.';
            isValid = false;
        }

        // Validar correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const email = document.getElementById('email').value;
        // if (email.trim() === '') 
        if (!emailRegex.test(email)) 
        {
            document.getElementById('email-error').textContent = 'El formato del correo electrónico es inválido.';
            isValid = false;
        }

        // Validar teléfono
        const phone = document.getElementById('phone').value;
        if (phone.trim() === '') 
        {
            document.getElementById('phone-error').textContent = 'El teléfono es obligatorio.';
            isValid = false;
        }

        // Validar selección de asunto
        const subject = document.getElementById('contact_subject').value;
        if (subject === '') 
        {
            document.getElementById('subject-error').textContent = 'Debes seleccionar una opción.';
            isValid = false;
        }

        // Validar mensaje
        const consult = document.getElementById('contact_consult').value;
        if (consult.trim() === '') 
        {
            document.getElementById('consult-error').textContent = 'El mensaje es obligatorio.';
            isValid = false;
        }

        // Si todo es válido, enviar el formulario
        if (isValid) 
        {
            const successMessage = document.createElement('div');
            successMessage.classList.add('success-message');
            successMessage.innerHTML = '¡Formulario enviado con éxito!';
            form.appendChild(successMessage);
        }
        else 
        {
            errorMessageContainer.innerHTML = 'Por favor, corrige los errores y vuelve a intentarlo.';
        }
    });
});
