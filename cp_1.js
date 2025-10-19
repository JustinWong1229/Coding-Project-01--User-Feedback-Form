const form = document.getElementById('feedback-form')
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById('email');
const commentsInput = document.getElementById('comments');
const submitBtn = document.getElementById("submitButton");
const feedbackDisplay = document.getElementById('feedback-display');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const comments = commentsInput.value
    const email = emailInput.value
    const username = usernameInput.value

    if (!username || !email || !comments) {
        alert("Please fill in all of the fields!");
    
    return;
    }


const entry = document.createElement("div");
entry.textContent = `${username} (${email}): ${comments}`;
feedbackDisplay.appendChild(entry);
});

commentsInput.addEventListener("input", () => {
    console.log("Characters:", commentsInput.value.length);
})

commentsInput.addEventListener("mouseover", () => {
    console.log("Please leave your comments in the textbox!");
    
});
commentsInput.addEventListener("mouseout", () => {
    console.log("You are now outside the comments box!")
});
document.querySelector("#feedback-form").addEventListener("click", (e) => {
    if (e.target.matches("input, textarea")) {
        console.log("Interacting with:", e.target.id);
        e.stopPropagation();
        
    }
})
