const form = document.getElementById('form'), 
inputUsername = document.getElementById('username'),
inputPass = document.getElementById('password'),
inputPassCon = document.getElementById('password-confirmation'),
inputBox = document.getElementById('terms'),
errorsContainer = document.querySelector('.errors'),
errorList = document.querySelector('.errors-list');


form.addEventListener("submit", e => {
    clearErrors();
    let errorMessages = [];

    if(inputUsername.value.length < 6) {
        errorMessages.push(`Username must be at least 6 characters.`)
    }
    if(inputPass.value.length < 10) {
        errorMessages.push(`Password must be at least 10 characters.`)
    }
    if(inputPass.value != inputPassCon.value) {
        errorMessages.push(`Passwords must match!`)
    }
    if(!inputBox.checked) {
        errorMessages.push(`Please agree to terms.`)
    }

    if(errorMessages.length > 0) {
        e.preventDefault();
        showErrors(errorMessages);
    }

    console.log(errorMessages);
});

function clearErrors() {
    while(errorList.children[0] != null) {
        errorList.removeChild(errorList.children[0]);
    }
    errorsContainer.classList.remove("show");
  }
  
  function showErrors(errorMessages) {
    errorMessages.forEach(errorMessage => {
        const li = document.createElement("li");
        li.innerText = errorMessage;
        errorList.appendChild(li);
    });
    errorsContainer.classList.add("show");
}