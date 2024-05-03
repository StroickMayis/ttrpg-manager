const passwordViewerIconLogIn = document.querySelector("#passwordViewerIconLogIn");
const password = document.querySelector("#password");

passwordViewerIconLogIn.addEventListener("click", (e) => {
    showPassword(e);
});

function showPassword (event) {
    if (event.target.id == "passwordViewerIconLogIn") {
        if (password.type == "password") {
            password.type = "text";
        } else {
            password.type = "password";
        }
    }    
}