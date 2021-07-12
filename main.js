function signin(){
    var userName = document.getElementById('user');
    var userPassword = document.getElementById('pass');
    var remember = document.getElementById("check");

    if(userName.value.length == 0){
        alert('Please fill in Username!');
        return;
    }
    else if(localStorage.getItem(userName.value)!=null){
        var user = JSON.parse(window.localStorage.getItem(userName.value));
        var localName = user.username;
        var localPassword = user.password;
    }
    else if(localStorage.getItem(userName.value)==null){
        alert('There are no such Username!');
        return;
    }

    if(userPassword.value.length == 0){
        alert('Please fill in Password!');
        return;
    }

    if(userName.value == localName && userPassword.value == localPassword){
        alert('Sign In!');
        return;
    }
    else{
        alert('Sing In Failed!');
        return;
    }
}

function signup(){
    var username = document.getElementById('user_up');
    var password = document.getElementById('pass_up');
    var repeatpw = document.getElementById('pass_repeat')
    var email = document.getElementById('email')

    if(username.value.length == 0){
        alert('Please fill in Username!');
        return;
    }
    else if(localStorage.getItem(username.value)!=null){
        alert('Invalid Username! Someone already using it!')
        return;
    }
    else if(password.value.length == 0){
        alert('Please fill in Password!');
        return;
    }
    else if(repeatpw.value.length == 0){
        alert('Please fill in Repeat Password!');
        return;
    }
    else if(password.value != pass_repeat.value){
        alert('Please check in Repeat Password!');
        return;
    }
    else if(email.value.length == 0){
        alert('Please fill in Email Address!');
        return;
    }
    else if (!email.value.match('@')) {
        alert('Not valid Email Address!');
        return;
    }
    else{
        var userinfo = {
            username: username.value,
            password: password.value,
            email: email.value
        }

        window.localStorage.setItem(username.value, JSON.stringify(userinfo));
        alert('Your account has been created');
        return;
    }
}
