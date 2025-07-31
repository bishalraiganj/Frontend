const btn = document.getElementById("remindButton");
const input = document.getElementById("textInput");
const tasksList = document.getElementById("tasksList");
const timeInput = document.getElementById("timeInput");

btn.addEventListener("click", () => {
    const text = input.value.trim();
    const time = timeInput.value;
    const timeSpan = document.createElement("span");
    if (text === "" || time === "")
    {
    alert(" Please type the reminder and select time !");
    }

    else {


        timeSpan.className = "time-text";
        timeSpan.textContent= time;
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
        li.appendChild(timeSpan);
        li.appendChild(deleteBtn);
        // li.appendChild(timeInput.value());
        tasksList.appendChild(li);

        input.value = ""; // Clear input
    }
});
