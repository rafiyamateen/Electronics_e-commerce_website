function loginCheck() {
    let email = document.login.email.value,
        password = document.login.password.value,
        userData = JSON.parse(localStorage.getItem('userData'));
    if (email == '' || password == '') {
        alert('Please fill out all the fields');
        document.login.email.focus();
        return false;
    }
    else if (userData) {
        let login = false;
        for (let i = 0; i < userData.length; i++) {
            if (email == userData[i].email && password == userData[i].password) {
                alert('You are logged in');
                localStorage.setItem('loggedIn', JSON.stringify((userData)[i]));
                login = true;
                break;
            }
        }
        if (login == false) {
            alert('Incorrect email or password');
            document.login.email.focus();
            return false;
        }
    }
    else {
        alert('Incorrect email or password');
        document.login.email.focus();
        return false;
    }
}
let closeForm = document.getElementsByClassName('closeForm');
for (let i = 0; i < closeForm.length; i++) {
    closeForm[i].onclick = () => {
        history.back();
    }
}