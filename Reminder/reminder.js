const btn = document.getElementById("remindButton");
const input = document.getElementById("textInput");
const tasksList = document.getElementById("tasksList");

btn.addEventListener("click", () => {
    const text = input.value.trim();
    if (text === "") return;

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    // Toggle 'done' on click
    span.addEventListener("click", () => {
        li.classList.toggle("done");
    });

    // Delete reminder
    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    tasksList.appendChild(li);

    input.value = ""; // Clear input
});
