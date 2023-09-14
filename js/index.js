function hitungLuas() {
    const panjang = parseFloat(document.getElementById("panjang").value);
    const lebar = parseFloat(document.getElementById("lebar").value);
    const luas = panjang * lebar;
    document.getElementById("luasHasil").textContent =  `Luas: ${panjang} cm x ${lebar} cm`;
    document.getElementById("hasil").textContent = `Hasil: ${luas} cm`;
    document.querySelector(".hasil").style.display = "block";
}

function resetForm() {
    document.getElementById("calculatorForm").reset();
    document.getElementById("luasHasil").textContent = "Luas: - x -";
    document.getElementById("hasil").textContent = "Hasil: -";
    document.querySelector(".hasil").style.display = "none";
}

function hitungKeliling() {
    const panjang2 = parseFloat(document.getElementById("panjang2").value);
    const lebar2 = parseFloat(document.getElementById("lebar2").value);
    const keliling = 2 * (panjang2 + lebar2);
    document.getElementById("kelilingHasil").textContent =  `Keliling: 2(${panjang2} cm + ${lebar2} cm)`;
    document.getElementById("hasil2").textContent = `Hasil: ${keliling} cm`;
    document.querySelector(".hasil2").style.display = "block";
}

function resetFormKeliling() {
    document.getElementById("kelilingForm").reset();
    document.getElementById("kelilingHasil").textContent = "Keliling: -";
    document.getElementById("hasil2").textContent = "Hasil: -";
    document.querySelector(".hasil2").style.display = "none";
}