function handleTryMeClicked() {
    document.getElementById('titleText').innerText = 'CSE Daffodil International University';
}



function handleLogin(event){

    event.preventDefault();
    password = event.target.password.value

    let alertText = ''
    
    if (!/[A-Z]/.test(password)) {
        alertText = alertText + "One capital letter required\n"
    }
    if (!/[a-z]/.test(password)) {
        alertText = alertText + "One small letter required\n"
    }
    if (!/[0-9]/.test(password)) {
        alertText = alertText + "One digit required\n"
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        alertText = alertText + "One special character required\n"
    }

    document.getElementById('alertText').innerText= alertText;

}


function handleRegi(event) {
    event.preventDefault();

    firstName = event.target.firstName.value
    email = event.target.email.value

    if(firstName===''){
        document.getElementById('firstNameAlert').innerText = 'First Name Required'
    }

    if(email===''){
        document.getElementById('emailAlert').innerText = 'Email Required'
    }


}



