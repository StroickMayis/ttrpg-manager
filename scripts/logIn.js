const passwordViewerIconLogIn = document.querySelector("#passwordViewerIconLogIn");
const password = document.querySelector("#password");

passwordViewerIconLogIn.addEventListener("click", (e) => {
    showPassword(e);
    changePasswordViewerIcon();
});

function showPassword (event) {
    if (event.target.id == "passwordViewerIconLogIn") {
        if (password.type == "password") {
            password.type = "text";
        } else {
            password.type = "password";
        }
    }    
};

function changePasswordViewerIcon() {
    if (passwordViewerIconLogIn.src == "file:///home/erik/repos/ttrpg-manager/images/passwordEyeVisible.png") {
        passwordViewerIconLogIn.src = "../images/passwordEyeInvisible.png";
    } else {
        passwordViewerIconLogIn.src = "../images/passwordEyeVisible.png";
    }
}