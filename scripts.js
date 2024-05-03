const createAccountButton = document.querySelector("#createAccountButton");
const createAccountPasswordOne = document.querySelector("#createAccountPasswordOne");
const createAccountPasswordTwo = document.querySelector("#createAccountPasswordTwo");
const passwordsDoNotMatchMessageContainer = document.querySelector("#passwordsDoNotMatchMessageContainer");
let passwordsDoNotMatchMessage;
let isFormSubmissionValid = false;

createAccountPasswordOne.addEventListener("input", () => {
    validate();
});
createAccountPasswordTwo.addEventListener("input", () => {
    validate();
});

function validatePassword () {
    if (!passwordsDoNotMatchMessage && createAccountPasswordOne.value !== createAccountPasswordTwo.value) {
        passwordsDoNotMatchMessage = document.createElement("p");
        passwordsDoNotMatchMessage.textContent = "* Passwords do not match";
        passwordsDoNotMatchMessage.setAttribute("id","passwordsDoNotMatchMessage");  
        passwordsDoNotMatchMessageContainer.appendChild(passwordsDoNotMatchMessage);
        isFormSubmissionValid = false;
    } else if (createAccountPasswordOne.value == createAccountPasswordTwo.value){
        if (passwordsDoNotMatchMessage) {
            passwordsDoNotMatchMessageContainer.removeChild(passwordsDoNotMatchMessage);
            passwordsDoNotMatchMessage = undefined;
        }
        isFormSubmissionValid = true;
    } else {
        isFormSubmissionValid = false;
    }
}

function validate () {
    console.log("VALIDATE ACTIVATED")
    validatePassword();
    if (!isFormSubmissionValid) {
        createAccountButton.disabled = true;
    }  else {
        createAccountButton.disabled = false;
    }
}