const usernameInput = document.getElementById("username");
const emailInput = document.querySelector("#email");
const commentsInput = document.querySelector("#comments");

commentsInput.addEventListener("input", () => {
    console.log("Characters:", commentsInput.value.length);
})