const btn = document.getElementById("btn");
const emailInput = document.getElementById("email");
const errorText = document.getElementById("error");


btn.addEventListener("click", () => {
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        errorText.textContent = "Emty!!!";
        errorText.classList.add('red')
        return;
    }

    if (!emailRegex.test(email)) {
        errorText.textContent = "Enter correct email adress";
        errorText.classList.add('red')
        return;
    }

    errorText.textContent = "Email is correct";
    errorText.classList.add('green')

});
