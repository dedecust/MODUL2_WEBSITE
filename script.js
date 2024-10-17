// Mendapatkan elemen dari DOM
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

let editingTask = null; // Menyimpan tugas yang sedang diedit

// Fungsi untuk menambahkan tugas
addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Tugas tidak boleh kosong!");
        return;
    }

    if (editingTask) {
        // Jika sedang mengedit tugas
        editingTask.textContent = taskText;
        editingTask = null; // Reset tugas yang sedang diedit
    } else {
        // Menambahkan tugas baru
        const listItem = document.createElement("li");
        listItem.textContent = taskText;

        // Tombol edit
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.className = "edit-button";
        editButton.onclick = () => {
            taskInput.value = taskText;
            editingTask = listItem; // Set tugas yang sedang diedit
        };

        // Tombol hapus
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Hapus";
        deleteButton.className = "delete-button";
        deleteButton.onclick = () => {
            taskList.removeChild(listItem);
        };

        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
    }

    taskInput.value = ""; // Kosongkan input
});

// Memungkinkan menekan enter untuk menambahkan tugas
taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTaskButton.click();
    }
});