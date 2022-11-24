function checkFields(){
    let firstPassword = document.getElementById("userPassword");
    let secondPassword = document.getElementById("passwordConfirmation");
    if(secondPassword.value != firstPassword.value){
        secondPassword.style.borderColor = "red";
    }
}