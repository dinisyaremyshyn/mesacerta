
const logInputField = document.getElementById('logPassword');
const logInputIcon = document.getElementById('log-pass-icon');

const regInputField = document.getElementById('regPassword');
const regInputIcon = document.getElementById('reg-pass-icon');

function myLogPassword() {
    if (logInputField.type === "password") {
        logInputField.type = "text";

        logInputIcon.name = "eye-off-outline";
        logInputIcon.style.cursor = "pointer";
    }
    else {
        logInputField.type = "password";

        logInputIcon.name = "eye-outline";
        logInputIcon.style.cursor = "pointer";
    }
}

function myRegPassword() {
    if (regInputField.type === "password") {
        regInputField.type = "text";

        regInputIcon.name = "eye-off-outline";
        regInputIcon.style.cursor = "pointer";
    }
    else {
        regInputField.type = "password";

        regInputIcon.name = "eye-outline";
        regInputIcon.style.cursor = "pointer";
    }
}

function changeIcon(value) {
    if (value.length > 0) {
        logInputIcon.name = "eye-outline";
        regInputIcon.name = "eye-outline";
    } else {
        logInputIcon.name = "lock-closed-outline";
        regInputIcon.name = "lock-closed-outline";
    }
}