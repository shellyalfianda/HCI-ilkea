function validateData(){
    event.preventDefault();
    var username = document.getElementById('username').value
    var male=document.getElementById("formale");
    var female=document.getElementById("forfemale");
    var city = document.getElementById('city').value
    var email = document.getElementById('email').value
    var password = document.getElementById('pwd').value
    var confirmpassword = document.getElementById('conpwd').value
    var term =document.getElementById('term')

    if(emptyFieldValidation(username)){
        alert('Username must be filled')
    }
    else if(!male.checked && !female.checked){
        alert("Select your gender!");
    }
    else if(male.checked && female.checked){
        alert("Select your 1 gender!");
    }
    else if(emptyFieldValidation(city)){
        alert('City must be filled')
    }
    else if(emptyFieldValidation(email)){
        alert('Email must be filled')
    }
    else if(!email.endsWith('@gmail.com')){
        alert('Email must ends with "@gmail.com"')
    }
    else if(emptyFieldValidation(password)){
        alert('Password must be filled')
    }
    else if(containNum(password)){
        alert('Password should not contain numbers')
    }
    else if(password.localeCompare(confirmpassword)!=0){
        alert('Password does not match')
    }
    
    else if(!term.checked){
        alert("You must agree with the Terms and Conditions");
    }
    else{
        alert("You have successfully registered")
        location.href="home.html"
    }
}

function emptyFieldValidation(str){
    if(str.length==0){
        return true
    }
    else return false
}

function containNum(password){
    for(let i=0; i<password.length; i++){
        if(!isNaN(password[i])){
            return true;
        }
    }
    return false;
}