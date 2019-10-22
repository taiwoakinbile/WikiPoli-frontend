function validateForm() {
    var error = 0;
    var a = document.forms["login"]["username"].value;
    document.getElementById('name_error').innerHTML = '';
    if (a == null || a == "") {
        // alert("Name must be filled out");
        error++;
        document.getElementById('name_error').innerHTML = 'Username or Email must be filled out';
    }

    
    var b = document.forms["login"]["password"].value;
    document.getElementById('password_error').innerHTML = '';
    if (b == null || b == "") {
        // alert("Password must be filled out");
        error++;
        document.getElementById('password_error').innerHTML = 'Password must be filled out';
    }

    if(error>0) {
        return false;
    }
    return true;
}