const alertPlaceholder = document.getElementById('liveAlertPlaceholder');

    const appendAlert = (message, type, dismissible) => {
        const wrapper = document.createElement('div');
        const dismissibleClass = dismissible ? 'alert-dismissible' : '';
        wrapper.innerHTML = [
            `<div class="alert alert-${type} ${dismissibleClass}" role="alert">`,
            `   <div>${message}</div>`,
            dismissible ? '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>' : '',
            '</div>'
        ].join('');

        alertPlaceholder.innerHTML = ''; 
        alertPlaceholder.append(wrapper);
    };

    const alertTrigger = document.getElementById('liveAlertBtn');
    if (alertTrigger) {
        alertTrigger.addEventListener('click', () => {
            if (!validateForm()) {
                appendAlert('Please fill in all fields!', 'warning', true);
            } else {
                appendAlert('Thanks for filling in the information!', 'success', true);
            }
        });
    }

    function validateForm() {
        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        if (firstName === "" || lastName === "" || email === "" || password === "") {
            return false; // Fields are empty
        }

        return true; // All fields are filled
    }