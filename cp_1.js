const usernameInput = document.getElementById("username");
const emailInput = document.querySelector("#email");
const commentsInput = document.querySelector("#comments");
const submitBtn = document.getElementById("submitButton")


commentsInput.addEventListener("input", () => {
    console.log("Characters:", commentsInput.value.length);
})

commentsInput.addEventListener("mouseover", () => {
    console.log("Please leave your comments in the textbox!");
    
});
commentsInput.addEventListener("mouseout", () => {
    console.log("You are now outside the comments box!")
});

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const comments = commentsInput.value
    if (comments === "") {
        alert("Please leave a comment.");
    }
    return;
});