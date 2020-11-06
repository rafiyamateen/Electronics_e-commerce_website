function validation() {
    let valid = true,
        emailEntered = document.signUp.email.value,
        dot = emailEntered.lastIndexOf('.'),
        at = emailEntered.indexOf('@'),
        input = true,
        psw = document.signUp.password.value,
        confirmPsw = document.signUp.confirmPassword.value,
        savedData = JSON.parse(localStorage.getItem('userData'));
    if (document.signUp.username.value == '') {
        alert('Please enter user name');
        document.signUp.username.focus();
        valid = false;
        return false;
    }
    if (emailEntered == '') {
        alert('Please enter email address');
        document.signUp.email.focus();
        valid = false;
        return false
    }
    if (emailEntered.indexOf(' ') !== -1) {
        input = false;
    }
    if (at < 1 || at > emailEntered.length - 5) {
        input = false;
    }
    if (dot - at < 2 || dot > emailEntered.length - 3) {
        input = false;
    }
    if (input === false) {
        alert('Please enter a valid email address');
        document.signUp.email.focus();
        valid = false;
        return false;
    }
    if (psw == '') {
        alert('Please enter password');
        document.signUp.password.focus();
        valid = false;
        return false;
    }
    if (psw.length < 6) {
        alert('Password must be atleast 6 characters long')
        document.signUp.password.focus();
        valid = false;
        return false;
    }
    else if (psw.length > 12) {
        alert('Password must be 6-12 characters long');
        document.signUp.password.focus();
        valid = false;
        return false;
    }
    if (confirmPsw == '') {
        alert('Please confirm password');
        document.signUp.confirmPassword.focus();
        valid = false;
        return false;
    }
    if (confirmPsw != psw) {
        alert('Confirm your password again')
        document.signUp.confirmPassword.focus();
        valid = false;
        return false;
    }
    if (savedData) {
        for (let i = 0; i < savedData.length; i++) {
            if (emailEntered == savedData[i].email) {
                alert('Already registered on this email');
                document.signUp.email.focus();
                valid = false;
                return false;
            }
        }
    }
    if (valid == true) {
        saveUserData();
        alert('You have created an account')
    }
}
function saveUserData() {
    let savedData = JSON.parse(localStorage.getItem('userData')) || [],
        newData = {
            username: document.signUp.username.value,
            email: document.signUp.email.value,
            password: document.signUp.password.value
        };
    savedData.push(newData);
    localStorage.setItem('userData', JSON.stringify(savedData));
    localStorage.setItem('loggedIn', JSON.stringify((newData)));
}
let closeForm=document.getElementsByClassName('closeForm');
for(let i=0;i<closeForm.length;i++){
    closeForm[i].onclick=()=>{
        history.back();
    }
}