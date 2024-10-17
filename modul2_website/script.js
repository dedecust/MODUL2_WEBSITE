function appendToInput(value) {
    const inputField = document.getElementById("input");
    if (inputField.value === "0") {
        inputField.value = value; // Ganti 0 dengan angka yang ditekan
    } else {
        inputField.value += value; // Tambahkan angka ke input
    }
}

function clearInput() {
    document.getElementById("input").value = "0"; // Reset input
}

function calculate() {
    const inputField = document.getElementById("input");
    try {
        const result = eval(inputField.value);
        inputField.value = result; // Tampilkan hasil
    } catch (error) {
        alert("Ekspresi tidak valid!"); // Jika terjadi kesalahan
    }
}