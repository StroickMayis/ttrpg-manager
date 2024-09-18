const createAccountButton = document.querySelector("#createAccountButton");
const createAccountPasswordOne = document.querySelector("#createAccountPasswordOne");
const createAccountPasswordTwo = document.querySelector("#createAccountPasswordTwo");
const passwordsDoNotMatchMessageContainer = document.querySelector("#passwordsDoNotMatchMessageContainer");

const passwordViewerIconOne = document.querySelector("#passwordViewerIconOne");
const passwordViewerIconTwo = document.querySelector("#passwordViewerIconTwo");
let passwordsDoNotMatchMessage;
let isFormSubmissionValid = false;

createAccountPasswordOne.addEventListener("input", () => {
    validate();
});
createAccountPasswordTwo.addEventListener("input", () => {
    validate();
});

passwordViewerIconOne.addEventListener("click", (e) => {
    showPassword(e);
    changePasswordViewerIconOne();
});
passwordViewerIconTwo.addEventListener("click", (e) => {
    showPassword(e);
    changePasswordViewerIconTwo();
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
    validatePassword();
    if (!isFormSubmissionValid) {
        createAccountButton.disabled = true;
    }  else {
        createAccountButton.disabled = false;
    }
}

function showPassword (event) {
    switch (event.target.id) {
        case "passwordViewerIconOne":
            if (createAccountPasswordOne.type == "password") {
                createAccountPasswordOne.type = "text";
            } else {
                createAccountPasswordOne.type = "password";
            }
        break;
        case "passwordViewerIconTwo":
            if (createAccountPasswordTwo.type == "password") {
                createAccountPasswordTwo.type = "text";
            } else {
                createAccountPasswordTwo.type = "password";
            }
        break;
    }
    
}

function changePasswordViewerIconOne() {
    if (passwordViewerIconOne.src == "file:///home/erik/repos/ttrpg-manager/images/passwordEyeVisible.png") {
        passwordViewerIconOne.src = "../images/passwordEyeInvisible.png";
    } else {
        passwordViewerIconOne.src = "../images/passwordEyeVisible.png";
    }
}

function changePasswordViewerIconTwo() {
    if (passwordViewerIconTwo.src == "file:///home/erik/repos/ttrpg-manager/images/passwordEyeVisible.png") {
        passwordViewerIconTwo.src = "../images/passwordEyeInvisible.png";
    } else {
        passwordViewerIconTwo.src = "../images/passwordEyeVisible.png";
    }
}