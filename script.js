document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const taskInput = document.getElementById("task");
    const dateInput = document.getElementById("date");
    const priorityInput = document.getElementById("priority");
    const categoryInputs = document.querySelectorAll("input[name='category']");
    const completedInput = document.getElementById("completed");
    const calendarCells = document.querySelectorAll("td:not(.empty)");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const taskText = taskInput.value.trim();
        const taskDate = dateInput.value;
        const priority = priorityInput.value;
        const category = [...categoryInputs].find(input => input.checked)?.value || "Uncategorized";
        const isCompleted = completedInput.checked ? "✅" : "❌";

        if (!taskText || !taskDate) {
            alert("Please enter a task and select a date.");
            return;
        }
        
        const taskDay = parseInt(taskDate.split("-")[2]);
        
        calendarCells.forEach(cell => {
            if (parseInt(cell.textContent) === taskDay) {
                const taskElement = document.createElement("div");
                taskElement.classList.add("task-item");
                taskElement.innerHTML = `<strong>${taskText}</strong> [${priority}] (${category}) ${isCompleted}`;
                cell.appendChild(taskElement);
            }
        });
        
        form.reset();
    });
});
