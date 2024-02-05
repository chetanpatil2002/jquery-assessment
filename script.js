function validateForm() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    var qualification = document.getElementById('qualification').value;
    var gender = document.getElementById('gender').value;
    var specialization = document.getElementById('specialization').value;
    var password = document.getElementById('password').value;
    var dob = document.getElementById('dob').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    var Pin = document.getElementById('Pin').value;
    var state = document.getElementById('state').value;

    var errorMessage = '';

    if (firstName.trim() === '') {
        errorMessage += 'Please enter your First Name.\n';
    }

    if (lastName.trim() === '') {
        errorMessage += 'Please enter your Last Name.\n';
    }

    if (email.trim() === '') {
        errorMessage += 'Please enter your Email.\n';
    }

    if (number.trim() === '') {
        errorMessage += 'Please enter your Number.\n';
    }

    if (qualification === '') {
        errorMessage += 'Please select your Qualification.\n';
    }

    if (gender === '') {
        errorMessage += 'Please select your Gender.\n';
    }

    if (specialization.trim() === '') {
        errorMessage += 'Please enter your Specialization.\n';
    }

    if (password.trim() === '') {
        errorMessage += 'Please enter your Password.\n';
    }

    if (dob.trim() === '') {
        errorMessage += 'Please enter your Date of Birth.\n';
    }

    if (address.trim() === '') {
        errorMessage += 'Please enter your Address.\n';
    }

    if (city.trim() === '') {
        errorMessage += 'Please enter your City.\n';
    }

    if (Pin.trim() === '') {
        errorMessage += 'Please enter your Area Pin.\n';
    }

    if (state.trim() === '') {
        errorMessage += 'Please enter your State.\n';
    }

    if (errorMessage !== '') {
        alert(errorMessage);
    }
}

